import { Egos, Identities, MaxLevel, MouseHoldTimeThreshhold, ResistanceLabels } from "../Consts/OtherConstants";
import { SinEnum } from "../Enums/SinEnum";
import { EgoBase } from "../Models/EgoBase";
import { IdentityBase } from "../Models/IdentityBase";
import $ from "jquery";
import { EquipEgo, EquipId } from "./EquipHandler";
import { DescriptionTagDictionary } from "../Consts/DescriptionTagDictionary";
import { SkillTypeEnum } from "../Enums/SkillTypeEnum";
import { Passive } from "../Models/Passive";
import { PassiveTypeEnum } from "../Enums/PassiveTypeEnum";
import { PassiveCostTypeEnum } from "../Enums/PassiveCostTypeEnum";
import { OverlayEnum } from "../Enums/OverlayEnum";
import { DamageTypeEnum } from "../Enums/DamageTypeEnum";

export function UpdateSinnerIdentityCard(sinnerId: number){
    $("#team-sinner-"+sinnerId).html("");
    let identity = globalThis.TeamData.find(sinner => sinner.SinnerEnum == sinnerId)!.EquipedIdentity;
    $.get("./templates/id-card-template.html", function (data){
        let template = $.parseHTML(data)!;
        $(template).find(".card-frame-overlay").attr("src", "./assets/OtherUIElements/IdFrames/"+identity.Rarity+"StarUptie4.png");
        $(template).find(".portrait").attr("src", identity.PortraitImageDir);
        $(template).find(".identity-rarity-image").attr("src", "./assets/Icons/Rarity"+identity.Rarity+".png");
        $(template).find(".identity-level-value").text(MaxLevel);
        $(template).find(".identity-name").text(identity.Name);
        globalThis.TeamData[sinnerId]?.EquipedEgos.forEach(ego => {
            let egoOverlaySlot = $(template).find(".risk" + ego.RiskLevel);
            egoOverlaySlot.removeClass("no-ego").addClass(SinEnumToString(ego.AwakeningSkill.Affinity).toLowerCase()+"-ego");
            egoOverlaySlot.find(".risk-icon").attr("src", "./assets/Icons/RiskLevels/Risk"+ego.RiskLevel+"IconActive.png");
            egoOverlaySlot.find(".ego-name").css("display", "flex");
            egoOverlaySlot.find(".ego-name").text(ego.Name);
            if (ego.Name.length > 10) { egoOverlaySlot.find(".ego-name").css("font-size", "0.8cqw"); }
            if (ego.Name.length > 14) { egoOverlaySlot.find(".ego-name").css("font-size", "0.7cqw"); }
            if (ego.Name.length > 18) { egoOverlaySlot.find(".ego-name").css("font-size", "0.6cqw").css("letter-spacing", "-0.06cqw"); }
            if (ego.Name.length > 24) { egoOverlaySlot.find(".ego-name").css("font-size", "0.5cqw").css("letter-spacing", "-0.05cqw"); }
            egoOverlaySlot.find(".ego-image").parent().css("display", "flex");
            egoOverlaySlot.find(".ego-image").attr("src", ego.AwakeningSkill.SkillImageDir);
            egoOverlaySlot.find(".threadspin-icon").parent().css("display", "flex");
        });
        $("#team-sinner-"+sinnerId).html(template.map(node => (node as HTMLElement).outerHTML).join(''));
        if (globalThis.TeamOverlay == OverlayEnum.Ego) { $('#team-builder .ego-overlay').show(); };
    });
}

export function LoadEquipableListToModal(sinnerId: number){
    $("#id-select-list").html('');
    let equipedId = globalThis.TeamData.find(sinner => sinner.SinnerEnum == sinnerId)!.EquipedIdentity;
    $.get('./templates/id-card-template.html', function (data){
        Identities.filter(identity => identity.Sinner == sinnerId).sort(function(a, b){return b.Rarity - a.Rarity;}).forEach(identity => {
            let template = $.parseHTML(data)!;
            $(template).find(".card-frame-overlay").attr("src", './assets/OtherUIElements/IdFrames/'+identity.Rarity+'StarUptie4.png');
            $(template).find(".portrait").attr("src", identity.PortraitImageDir);
            $(template).find(".identity-level-value").text(MaxLevel);
            $(template).find(".identity-name").text(identity.Name);
            $(template).find(".identity-rarity-image").attr("src", "./assets/Icons/Rarity"+identity.Rarity+".png");

            if (identity.Id == equipedId.Id){
                $(template).find(".id-selected-overlay").css("display", "block");
            }

            var holdTimeout: number;
            var isHolding: boolean = false;
            let $loadingCircle = $(template).find(".loading-circle");

            $(template).on("mousedown", function(){
                isHolding = true;
                $loadingCircle.css('transition', 'stroke-dashoffset '+(MouseHoldTimeThreshhold/1000)+'s linear');
                $loadingCircle.css('strokeDashoffset', '0');
                holdTimeout = setTimeout(function() {
                    resetLoadingRing();
                    isHolding = false;
                    LoadIdentityDetailsModal(identity);
                }, MouseHoldTimeThreshhold);
            });

            $(template).on("mouseup", function(){
                resetLoadingRing();
                clearTimeout(holdTimeout);
                if (isHolding) {
                    EquipId(identity);
                    $("#id-select-list .id-selected-overlay").css("display", "none");
                    $(template).find(".id-selected-overlay").css("display", "block");
                }
                isHolding = false;
            });

            $(template).on("mouseleave", function(){
                resetLoadingRing()
                clearTimeout(holdTimeout);
                isHolding = false;
            });

            function resetLoadingRing() {
                $loadingCircle.css('transition', 'none');
                $loadingCircle.css('strokeDashoffset', '283');
                setTimeout(() => {
                    $loadingCircle.css('transition', 'stroke-dashoffset '+(MouseHoldTimeThreshhold/1000)+'s linear');
                }, 0);
            }
            $("#id-select-list").append(template);
        });
    });
    
    $("#ego-select-list").html('');
    $.get('./templates/ego-list-orb-template.html', function (data){
        Egos.filter(ego => ego.Sinner == sinnerId).sort(function(a, b){return a.RiskLevel - b.RiskLevel;}).forEach(ego => {
            let template = $.parseHTML(data)!;

            $(template).find(".ego-image").attr("src", ego.FullImageDir);
            $(template).find(".ego-label-image").attr("src", "./assets/OtherUIElements/EGO/"+SinEnumToString(ego.AwakeningSkill.Affinity)+"EgoOrbBase.png");             
            $(template).find(".ego-risk-level-image").attr("src", "./assets/Icons/RiskLevels/Risk"+ego.RiskLevel+"IconActive.png");
            $(template).find(".ego-name-value").text(ego.Name);
            
            if (globalThis.TeamData.find(sinner => sinner.SinnerEnum == sinnerId)!.EquipedEgos.some(equipedEgo => equipedEgo.Id == ego.Id)) {
                $(template).find(".ego-orb-selected").css("display", "block");
            } 

            var holdTimeout: number;
            var isHolding: boolean = false;      
            let $loadingCircle = $(template).find(".loading-circle");

            $(template).on("mousedown", function(){
                $loadingCircle.css('transition', 'stroke-dashoffset '+(MouseHoldTimeThreshhold/1000)+'s linear');
                $loadingCircle.css('strokeDashoffset', '0');
                isHolding = true;
                holdTimeout = setTimeout(function() {
                    resetLoadingRing();
                    isHolding = false;
                    LoadEgoDetailsModal(ego);
                }, MouseHoldTimeThreshhold);
            });

            $(template).on("mouseup", function(){
                resetLoadingRing();
                clearTimeout(holdTimeout);
                if (isHolding) {
                    EquipEgo(ego);
                    $("#ego-select-list .ego-list-orb").filter(function() {
                        return $(this).find('.ego-risk-level-image').attr("src") === $(template).find('.ego-risk-level-image').attr("src");
                    }).find(".ego-orb-selected").css("display", "none");
                    if (globalThis.TeamData.find(sinner => sinner.SinnerEnum == sinnerId)!.EquipedEgos.some(equipedEgo => equipedEgo.Id == ego.Id)) {
                        $(template).find(".ego-orb-selected").css("display", "block");
                    } 
                }
                isHolding = false;
            });

            $(template).on("mouseleave", function(){
                resetLoadingRing();
                clearTimeout(holdTimeout);
                isHolding = false;
            });

            function resetLoadingRing() {
                $loadingCircle.css('transition', 'none');
                $loadingCircle.css('strokeDashoffset', '283');
                setTimeout(() => {
                    $loadingCircle.css('transition', 'stroke-dashoffset '+(MouseHoldTimeThreshhold/1000)+'s linear');
                }, 0);
            }

            $("#ego-select-list").append(template);
        });
    });

    $("#id-select-list").show();
    $("#ego-select-list").hide();
}

export function LoadIdentityDetailsModal(identity: IdentityBase){
    $("#equipable-details-modal #id-status-list").show();
    $("#equipable-details-modal #id-resistances-list").show();
    $("#equipable-details-modal #ego-resistances-list").hide();
    $("#equipable-level").show();
    $("#id-health-value").text(Math.round(identity.BaseHealth + identity.HealthPerLevel * MaxLevel));
    $("#id-speed").text((identity.SpeedMin+" - "+identity.SpeedMax));
    $("#defense-value").text(MaxLevel + identity.DefenseLevel);
    $("#slash-resistance-label-value, #slash-resistance-number-value").removeClass("fatal-resist endure-resist ineff-resist");
    $("#pierce-resistance-label-value, #pierce-resistance-number-value").removeClass("fatal-resist endure-resist ineff-resist");
    $("#blunt-resistance-label-value, #blunt-resistance-number-value").removeClass("fatal-resist endure-resist ineff-resist");
    $("#slash-resistance-label-value").text(ResistanceLabels.find(l => l.value == identity.SlashResist)!.label);
    $("#slash-resistance-number-value").text('(x'+identity.SlashResist+')');
    switch (identity.SlashResist){
        case 0.5: $("#slash-resistance-label-value, #slash-resistance-number-value").addClass("ineff-resist");
        case 0.75: $("#slash-resistance-label-value, #slash-resistance-number-value").addClass("endure-resist");
        case 2: $("#slash-resistance-label-value, #slash-resistance-number-value").addClass("fatal-resist");
    }
    $("#pierce-resistance-label-value").text(ResistanceLabels.find(l => l.value == identity.PierceResist)!.label);
    $("#pierce-resistance-number-value").text('(x'+identity.PierceResist+')');
    switch (identity.PierceResist){
        case 0.5: $("#pierce-resistance-label-value, #pierce-resistance-number-value").addClass("ineff-resist");
        case 0.75: $("#pierce-resistance-label-value, #pierce-resistance-number-value").addClass("endure-resist");
        case 2: $("#pierce-resistance-label-value, #pierce-resistance-number-value").addClass("fatal-resist");
    }
    $("#blunt-resistance-label-value").text(ResistanceLabels.find(l => l.value == identity.BluntResist)!.label);
    $("#blunt-resistance-number-value").text('(x'+identity.BluntResist+')');
    switch (identity.BluntResist){
        case 0.5: $("#blunt-resistance-label-value, #blunt-resistance-number-value").addClass("ineff-resist");
        case 0.75: $("#blunt-resistance-label-value, #blunt-resistance-number-value").addClass("endure-resist");
        case 2: $("#blunt-resistance-label-value, #blunt-resistance-number-value").addClass("fatal-resist");
    }
    $("#equipable-details-rarity-image").attr("src", "./assets/Icons/Rarity"+identity.Rarity+".png");
    $("#equipable-details-name").text(identity.Name);
    $("#equipable-details-tabs").html('');
    $("#equipable-details-skill-select").html('');
    $("#equipable-details-skills").html('');
    $("#equipable-details-portrait").attr("src", identity.FullImageDir);
    $("#equipable-details-portrait-container").addClass("shadow");
    $("#ego-sanity-cost").hide();
    $("#equipable-details-ego-cost").hide();
    
    $.get('./templates/skill-detail-template.html', function (data){
        identity.Skills.forEach((skill, index) => {
            let template = $.parseHTML(data)!;

            var tab = skill.SkillType == SkillTypeEnum.Attack ? $('<button>Skill '+(index+1)+'</button>') : $('<button>Defense</button>');
            tab.on("click", function(){
                $("#equipable-details-skill-select button").removeClass();
                tab.addClass("selected").addClass(SinEnumToString(skill.Affinity).toLowerCase());
                ShowSkill(index+1);
            });
            $("#equipable-details-skill-select").append(tab);

            $(template).attr('id', 'skill'+(index+1));

            $(template).find(".skill-coin-power-panel").attr("src", "./assets/Icons/Skills/"+SinEnumToString(skill.Affinity)+"CoinPowerPanel.png");
            $(template).find(".skill-icon-frame").attr("src", "./assets/Icons/Skills/"+SinEnumToString(skill.Affinity)+"Skill"+skill.SkillTier+".png");
            if (skill.DamageType != undefined) { $(template).find(".skill-damage-type-icon").attr("src", "./assets/Icons/Skills/SkillDamageTypeBadge/"+SinEnumToString(skill.Affinity)+DamageTypeEnumToString(skill.DamageType!)+".png"); }
            $(template).find(".skill-icon").attr("src", skill.SkillImageDir);
            $(template).find(".skill-name-ribbon-start").attr("src", "./assets/Icons/Skills/SkillNameRibbon/"+SinEnumToString(skill.Affinity)+"RibbonStart.png");
            $(template).find(".skill-name-ribbon-middle").css("background-image", "URL('./assets/Icons/Skills/SkillNameRibbon/"+SinEnumToString(skill.Affinity)+"RibbonMiddle.png')");
            $(template).find(".skill-name-ribbon-end").css("background-image", "URL('./assets/Icons/Skills/SkillNameRibbon/"+SinEnumToString(skill.Affinity)+"RibbonEnd.png')");

            if (index < 3){
                $(template).find(".skill-name-ribbon-end span").text(3 - index);
            }
            else {
                $(template).find(".skill-name-ribbon-end .multiply-icon").hide();
                $(template).find(".skill-name-ribbon-end span").hide();
            }

            $(template).find(".skill-base-power-value").text(skill.BaseValue);
            $(template).find(".skill-coin-power-value").text((skill.CoinValue >= 0 ? '+':'')+skill.CoinValue);
            $(template).find(".skill-name-value").text(skill.Name);
            if (skill.SkillType == SkillTypeEnum.Defense){
                $(template).find(".skill-attack-icon").attr("src", "./assets/Icons/Stats/DefensePower.png");
            
            }
            $(template).find(".skill-level-value").text((MaxLevel + skill.SkillLevel));

            for (let i = 0; i < skill.Coins; i++){
                $(template).find(".skill-coins").append($("<img src='./assets/Icons/Skills/Coin.png'>"));
            }

            for (let i = 0; i < skill.AttackWeight; i++){
                $(template).find(".skill-attack-weight-value").append("⯀");
            }

            skill.SkillDescription.forEach((descriptionPart) => {
                var div = $('<div class="description-part"></div>')
                if (descriptionPart.Coin > 0) {
                    div.append('<div class="description-coin">'+NumberToRoman(descriptionPart.Coin)+'</div>');
                }
                div.append('<div class="description-text">'+AddTooltipsToTags(descriptionPart.Text)+'</div><br>');
                $(template).find(".skill-description").append(div);
            })

            $("#equipable-details-skills").append(template);
        });

        var tab = $('<button>Passive</button>');
        tab.on("click", function(){
            $("#equipable-details-skill-select button").removeClass();
            tab.addClass("selected").addClass(SinEnumToString(SinEnum.Sloth).toLowerCase());
            ShowSkill(10);
        });
        $("#equipable-details-skill-select").append(tab);
        $("#equipable-details-skills").append(BuildPassiveDescriptions(identity.Passives));

        $("#equipable-details-skill-select button").removeClass();
        $("#equipable-details-skill-select button").eq(0).addClass("selected").addClass(SinEnumToString(identity.Skills[0]!.Affinity).toLowerCase());
        ShowSkill(1);
        $("#equipable-details-modal").show();
    });
}

export function LoadEgoDetailsModal(ego: EgoBase){
    $("#equipable-details-modal #id-status-list").hide();
    $("#equipable-details-modal #id-resistances-list").hide();
    $("#equipable-details-modal #ego-resistances-list").show();  
    $("#equipable-level").hide();      
    $("#equipable-details-modal #equipable-details-rarity-image").hide();

    $("#wrath-resistance-label-value, #wrath-resistance-number-value").removeClass("fatal-resist endure-resist ineff-resist");
    $("#lust-resistance-label-value, #lust-resistance-number-value").removeClass("fatal-resist endure-resist ineff-resist");
    $("#sloth-resistance-label-value, #sloth-resistance-number-value").removeClass("fatal-resist endure-resist ineff-resist");
    $("#gluttony-resistance-label-value, #gluttony-resistance-number-value").removeClass("fatal-resist endure-resist ineff-resist");
    $("#gloom-resistance-label-value, #gloom-resistance-number-value").removeClass("fatal-resist endure-resist ineff-resist");
    $("#pride-resistance-label-value, #pride-resistance-number-value").removeClass("fatal-resist endure-resist ineff-resist");
    $("#envy-resistance-label-value, #envy-resistance-number-value").removeClass("fatal-resist endure-resist ineff-resist");

    $("#wrath-resistance-label-value").text(ResistanceLabels.find(l => l.value == ego.Resistances.find(e => e.sin == SinEnum.Wrath)!.resistance)!.label);
    switch (ego.Resistances.find(e => e.sin == SinEnum.Wrath)!.resistance){
        case 0.5: $("#wrath-resistance-label-value, #wrath-resistance-number-value").addClass("ineff-resist");
        case 0.75: $("#wrath-resistance-label-value, #wrath-resistance-number-value").addClass("endure-resist");
        case 2: $("#wrath-resistance-label-value, #wrath-resistance-number-value").addClass("fatal-resist");
    }
    $("#lust-resistance-label-value").text(ResistanceLabels.find(l => l.value == ego.Resistances.find(e => e.sin == SinEnum.Lust)!.resistance)!.label);
    switch (ego.Resistances.find(e => e.sin == SinEnum.Lust)!.resistance){
        case 0.5: $("#lust-resistance-label-value, #lust-resistance-number-value").addClass("ineff-resist");
        case 0.75: $("#lust-resistance-label-value, #lust-resistance-number-value").addClass("endure-resist");
        case 2: $("#lust-resistance-label-value, #lust-resistance-number-value").addClass("fatal-resist");
    }
    $("#sloth-resistance-label-value").text(ResistanceLabels.find(l => l.value == ego.Resistances.find(e => e.sin == SinEnum.Sloth)!.resistance)!.label);
    switch (ego.Resistances.find(e => e.sin == SinEnum.Sloth)!.resistance){
        case 0.5: $("#sloth-resistance-label-value, #sloth-resistance-number-value").addClass("ineff-resist");
        case 0.75: $("#sloth-resistance-label-value, #sloth-resistance-number-value").addClass("endure-resist");
        case 2: $("#sloth-resistance-label-value, #sloth-resistance-number-value").addClass("fatal-resist");
    }
    $("#gluttony-resistance-label-value").text(ResistanceLabels.find(l => l.value == ego.Resistances.find(e => e.sin == SinEnum.Gluttony)!.resistance)!.label);
    switch (ego.Resistances.find(e => e.sin == SinEnum.Gluttony)!.resistance){
        case 0.5: $("#gluttony-resistance-label-value, #gluttony-resistance-number-value").addClass("ineff-resist");
        case 0.75: $("#gluttony-resistance-label-value, #gluttony-resistance-number-value").addClass("endure-resist");
        case 2: $("#gluttony-resistance-label-value, #gluttony-resistance-number-value").addClass("fatal-resist");
    }
    $("#gloom-resistance-label-value").text(ResistanceLabels.find(l => l.value == ego.Resistances.find(e => e.sin == SinEnum.Gloom)!.resistance)!.label);
    switch (ego.Resistances.find(e => e.sin == SinEnum.Gloom)!.resistance){
        case 0.5: $("#gloom-resistance-label-value, #gloom-resistance-number-value").addClass("ineff-resist");
        case 0.75: $("#gloom-resistance-label-value, #gloom-resistance-number-value").addClass("endure-resist");
        case 2: $("#gloom-resistance-label-value, #gloom-resistance-number-value").addClass("fatal-resist");
    }
    $("#pride-resistance-label-value").text(ResistanceLabels.find(l => l.value == ego.Resistances.find(e => e.sin == SinEnum.Pride)!.resistance)!.label);
    switch (ego.Resistances.find(e => e.sin == SinEnum.Pride)!.resistance){
        case 0.5: $("#pride-resistance-label-value, #pride-resistance-number-value").addClass("ineff-resist");
        case 0.75: $("#pride-resistance-label-value, #pride-resistance-number-value").addClass("endure-resist");
        case 2: $("#pride-resistance-label-value, #pride-resistance-number-value").addClass("fatal-resist");
    }
    $("#envy-resistance-label-value").text(ResistanceLabels.find(l => l.value == ego.Resistances.find(e => e.sin == SinEnum.Envy)!.resistance)!.label);
    switch (ego.Resistances.find(e => e.sin == SinEnum.Envy)!.resistance){
        case 0.5: $("#envy-resistance-label-value, #envy-resistance-number-value").addClass("ineff-resist");
        case 0.75: $("#envy-resistance-label-value, #envy-resistance-number-value").addClass("endure-resist");
        case 2: $("#envy-resistance-label-value, #envy-resistance-number-value").addClass("fatal-resist");
    }

    $("#wrath-resistance-number-value").text('(x'+ego.Resistances.find(e => e.sin == SinEnum.Wrath)!.resistance+')');
    $("#lust-resistance-number-value").text('(x'+ego.Resistances.find(e => e.sin == SinEnum.Lust)!.resistance+')')!;
    $("#sloth-resistance-number-value").text('(x'+ego.Resistances.find(e => e.sin == SinEnum.Sloth)!.resistance+')')!;
    $("#gluttony-resistance-number-value").text('(x'+ego.Resistances.find(e => e.sin == SinEnum.Gluttony)!.resistance+')')!;
    $("#gloom-resistance-number-value").text('(x'+ego.Resistances.find(e => e.sin == SinEnum.Gloom)!.resistance+')')!;
    $("#pride-resistance-number-value").text('(x'+ego.Resistances.find(e => e.sin == SinEnum.Pride)!.resistance+')')!;
    $("#envy-resistance-number-value").text('(x'+ego.Resistances.find(e => e.sin == SinEnum.Envy)!.resistance+')')!;

    $("#equipable-details-name").text(ego.Name);
    $("#equipable-details-tabs").html('');
    $("#equipable-details-skill-select").html('');
    $("#equipable-details-skills").html('');
    $("#equipable-details-portrait").attr("src", ego.FullImageDir);
    $("#equipable-details-portrait-container").removeClass("shadow");
    $("#ego-sanity-cost").show();
    $("#ego-awakening-cost-value").show();
    $("#ego-awakening-cost-value").text(ego.AwakeningSanityCost);
    $("#ego-corrosion-cost-value").hide();
    $("#ego-corrosion-cost-value").text(ego.CorrosionSanityCost ?? '');
    $("#equipable-details-ego-cost").show();
    $("#equipable-details-ego-cost span").each(function() { 
        $(this).text("0");
    });
    $.get('./templates/skill-detail-template.html', function (data){
        let template = $.parseHTML(data)!;

        var tab = $('<button>Awakening</button>');
        tab.on("click", function(){
            $("#equipable-details-skill-select button").removeClass();
            tab.addClass("selected").addClass(SinEnumToString(ego.AwakeningSkill.Affinity).toLowerCase());
            ShowSkill(1);
            $("#ego-awakening-cost-value").show();
            $("#ego-corrosion-cost-value").hide();
        });
        $("#equipable-details-skill-select").append(tab);

        $(template).attr('id', 'skill1');

        $(template).find(".skill-coin-power-panel").attr("src", "./assets/Icons/Skills/"+SinEnumToString(ego.AwakeningSkill.Affinity)+"CoinPowerPanel.png");            
        $(template).find(".skill-icon-frame").attr("src", "./assets/Icons/Skills/"+SinEnumToString(ego.AwakeningSkill.Affinity)+"Skill"+ego.AwakeningSkill.SkillTier+".png");
        $(template).find(".skill-icon").attr("src", ego.AwakeningSkill.SkillImageDir);
        $(template).find(".skill-damage-type-icon").attr("src", "./assets/Icons/Skills/SkillDamageTypeBadge/"+SinEnumToString(ego.AwakeningSkill.Affinity)+DamageTypeEnumToString(ego.AwakeningSkill.DamageType!)+".png");
        $(template).find(".skill-name-ribbon-start").attr("src", "./assets/Icons/Skills/SkillNameRibbon/"+SinEnumToString(ego.AwakeningSkill.Affinity)+"RibbonStart.png");
        $(template).find(".skill-name-ribbon-middle").css("background-image", "URL('./assets/Icons/Skills/SkillNameRibbon/"+SinEnumToString(ego.AwakeningSkill.Affinity)+"RibbonMiddle.png')");
        $(template).find(".skill-name-ribbon-end").css("background-image", "URL('./assets/Icons/Skills/SkillNameRibbon/"+SinEnumToString(ego.AwakeningSkill.Affinity)+"RibbonEnd.png')");


        $(template).find(".skill-base-power-value").text(ego.AwakeningSkill.BaseValue);
        $(template).find(".skill-coin-power-value").text((ego.AwakeningSkill.CoinValue >= 0 ? '+':'')+ego.AwakeningSkill.CoinValue);
        $(template).find(".skill-name-value").text(ego.AwakeningSkill.Name);
        $(template).find(".skill-level-value").text((MaxLevel + ego.AwakeningSkill.SkillLevel));

        for (let i = 0; i < ego.AwakeningSkill.Coins; i++){
            $(template).find(".skill-coins").append($("<img src='./assets/Icons/Skills/Coin.png'>"));
        }

        for (let i = 0; i < ego.AwakeningSkill.AttackWeight; i++){
            $(template).find(".skill-attack-weight-value").append("⯀");
        }

        $(template).find(".skill-name-ribbon-end .multiply-icon").hide();
        $(template).find(".skill-name-ribbon-end span").hide();

        ego.AwakeningSkill.SkillDescription.forEach((descriptionPart) => {
            var div = $('<div class="description-part"></div>')
            if (descriptionPart.Coin > 0) {
                div.append('<div class="description-coin">'+NumberToRoman(descriptionPart.Coin)+'</div>');
            }
            div.append('<div class="description-text">'+AddTooltipsToTags(descriptionPart.Text)+'</div><br>');
            $(template).find(".skill-description").append(div);
        });

        $("#equipable-details-skills").append(template);

        if (ego.CorrosionSkill){
            let template = $.parseHTML(data)!;
    
            var tab2 = $('<button>Corrosion</button>')
            tab2.on("click", function(){
                $("#equipable-details-skill-select button").removeClass();
                tab2.addClass("selected").addClass(SinEnumToString(ego.CorrosionSkill!.Affinity).toLowerCase());
                ShowSkill(2);
                $("#ego-awakening-cost-value").hide();
                $("#ego-corrosion-cost-value").show();
            });
            $("#equipable-details-skill-select").append(tab2);
    
            $(template).attr('id', 'skill2');

            $(template).find(".skill-coin-power-panel").attr("src", "./assets/Icons/Skills/"+SinEnumToString(ego.CorrosionSkill.Affinity)+"CoinPowerPanel.png");         
            $(template).find(".skill-icon-frame").attr("src", "./assets/Icons/Skills/"+SinEnumToString(ego.CorrosionSkill.Affinity)+"Skill"+ego.CorrosionSkill.SkillTier+".png");
            $(template).find(".skill-damage-type-icon").attr("src", "./assets/Icons/Skills/SkillDamageTypeBadge/"+SinEnumToString(ego.CorrosionSkill.Affinity)+DamageTypeEnumToString(ego.CorrosionSkill.DamageType!)+".png");
            $(template).find(".skill-icon").attr("src", ego.CorrosionSkill.SkillImageDir);
            $(template).find(".skill-name-ribbon-start").attr("src", "./assets/Icons/Skills/SkillNameRibbon/"+SinEnumToString(ego.CorrosionSkill.Affinity)+"RibbonStart.png");
            $(template).find(".skill-name-ribbon-middle").css("background-image", "URL('./assets/Icons/Skills/SkillNameRibbon/"+SinEnumToString(ego.CorrosionSkill.Affinity)+"RibbonMiddle.png')");
            $(template).find(".skill-name-ribbon-end").css("background-image", "URL('./assets/Icons/Skills/SkillNameRibbon/"+SinEnumToString(ego.CorrosionSkill.Affinity)+"RibbonEnd.png')");

            $(template).find(".skill-base-power-value").text(ego.CorrosionSkill.BaseValue);
            $(template).find(".skill-coin-power-value").text((ego.CorrosionSkill.CoinValue >= 0 ? '+':'')+ego.CorrosionSkill.CoinValue);
            $(template).find(".skill-name-value").text(ego.CorrosionSkill.Name);
            $(template).find(".skill-level-value").text((MaxLevel + ego.CorrosionSkill.SkillLevel));
            
            for (let i = 0; i < ego.CorrosionSkill.Coins; i++){
                $(template).find(".skill-coins").append($("<img src='./assets/Icons/Skills/Coin.png'>"));
            }

            for (let i = 0; i < ego.CorrosionSkill.AttackWeight; i++){
                $(template).find(".skill-attack-weight-value").append("⯀");
            }

            $(template).find(".skill-name-ribbon-end .multiply-icon").hide();
            $(template).find(".skill-name-ribbon-end span").hide();
    
            ego.CorrosionSkill.SkillDescription.forEach((descriptionPart) => {
                var div = $('<div class="description-part"></div>')
                if (descriptionPart.Coin > 0) {
                    div.append('<div class="description-coin">'+NumberToRoman(descriptionPart.Coin)+'</div>');
                }
                div.append('<div class="description-text">'+AddTooltipsToTags(descriptionPart.Text)+'</div><br>');
                $(template).find(".skill-description").append(div);
            })
    
            $("#equipable-details-skills").append(template);
        }     

        var tab3 = $('<button>Passive</button>');
        tab3.on("click", function(){
            $("#equipable-details-skill-select button").removeClass();
            tab3.addClass("selected").addClass(SinEnumToString(SinEnum.Sloth).toLowerCase());
            ShowSkill(10);
        });
        $("#equipable-details-skill-select").append(tab3);
        $("#equipable-details-skills").append(BuildPassiveDescriptions([ego.Passive]));

        ego.Cost.forEach((cost) => {
            $("#equipable-details-ego-cost .ego-cost-slot:nth-child("+(cost.sin+1)+")").find(".cost-value-container").text(cost.amount);
        });

        ShowSkill(1);
        $("#equipable-details-skill-select button").removeClass();
        $("#equipable-details-skill-select button").eq(0).addClass("selected").addClass(SinEnumToString(ego.AwakeningSkill.Affinity).toLowerCase());
        $("#equipable-details-modal").show();
    });
}

export function ShowSkill(index: number){
    $(".skill").hide();
    $("#skill"+index).show();
}

function AddTooltipsToTags(description: string): string{ 
    return description.replace(/\[([\w-.&]+(?:[\s-&]+[\w-&]+)*)\]/g, (match, p1) => {
        // Add brackets back to the key for the dictionary lookup
        const keyWithBrackets = `[${p1}]`;
        return DescriptionTagDictionary[keyWithBrackets] !== undefined ? DescriptionTagDictionary[keyWithBrackets].HtmlString : match;
    });
}

function BuildPassiveDescriptions(passives: Array<Passive>): JQuery<HTMLElement>{
    let description = $('<div id="skill10" class="skill"></div>');
    if (passives.length > 1) {
        description.append($('<div class="passive-category-label font-mikodacs">Passives</div>'))
    };
    $.get("./templates/passive-detail-template.html", function (data){
        passives.forEach((passive) => {
            if (passive.Type == PassiveTypeEnum.Support){              
                description.append($('<div class="passive-category-label font-mikodacs">Support</div>'));
            }
            let template = $.parseHTML(data)!;
            $(template).find(".passive-name-value").text(passive.Name);
            $(template).find(".passive-description-value").html(AddTooltipsToTags(passive.Description));

            if (passive.Cost){
                passive.Cost.forEach(cost => {
                    $(template).find(".passive-cost").append('<img class="'+SinEnumToString(cost.sin).toLowerCase()+'-icon"><img class="multiply-icon"><span class="passive-cost-value font-excelsior-sans">'+cost.amount+'</span>')
                });
                $(template).find(".passive-cost").append('<span class="passive-cost-type font-mikodacs">'+(passive.CostType == PassiveCostTypeEnum.Owned ? ' Owned' : ' Res.')+'</span>');
            }
            description.append(template);
        });
    });
    return description;
}
                                                // REWRITE AS DICTIONARY        
function SinEnumToString(sinEnum: SinEnum): string {
    switch (sinEnum) {
        case SinEnum.Wrath:
            return 'Wrath';
        case SinEnum.Lust:
            return 'Lust';
        case SinEnum.Sloth:
            return 'Sloth';
        case SinEnum.Gluttony:
            return 'Gluttony';
        case SinEnum.Gloom:
            return 'Gloom';
        case SinEnum.Pride:
            return 'Pride';
        case SinEnum.Envy:
            return 'Envy';
    }
}

function DamageTypeEnumToString(damageTypeEnum: DamageTypeEnum): string {
    switch (damageTypeEnum) {
        case DamageTypeEnum.Slash:
            return 'Slash';
        case DamageTypeEnum.Pierce:
            return 'Pierce';
        case DamageTypeEnum.Blunt:
            return 'Blunt';
    }
}

function NumberToRoman(number: number): string {
    switch (number) {
        case 1: return 'I';
        case 2: return 'II';
        case 3: return 'III';
        case 4: return 'IV';
        case 5: return 'V';
        default: return '';
    }
}