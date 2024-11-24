import $ from "jquery";
import { MaxLevel, MouseHoldTimeThreshhold } from "../Constants/ConfigVariables";
import { DescriptionTagDictionary } from "../Constants/DescriptionTagDictionary";
import { Egos, Identities } from "../Constants/Equipables";
import { ResistanceLabels } from "../Constants/ResistanceLabelDictionary";
import { RomanNumerals } from "../Constants/RomanNumeralDictionary";
import {
    DamageTypeEnum,
    OverlayEnum,
    PassiveCostTypeEnum,
    PassiveTypeEnum,
    SinEnum,
    SkillTypeEnum
} from "../Enums/Index";
import { Ego, Identity, Passive } from "../Models/Index";
import { EquipEgo, EquipIdentity } from "./EquipHandler";
import { UpdateLink } from "./URLHandler";

export function AddEventHandlers() {
    $('#close-equipable-select-button').on("click", function () {
        $('#equipable-select-modal').hide();
    });
    
    $('#close-equipable-details-button').on("click", function () {
        $('#equipable-details-modal').hide();
    });
    
    $('#team-builder .deploy-view-button').on("click", function () {
        globalThis.TeamOverlay = OverlayEnum.Deployment;
        UpdateTeamSinDisplay(true);
        $('.ego-overlay').hide();
        $("#team-builder .id-selected-overlay").css("visibility", "visible");
        $("#deployment-panel").show();
    
        $('#team-builder .deploy-view-button').addClass("selected");
        $('#team-builder .identity-view-button').removeClass("selected");
        $('#team-builder .ego-view-button').removeClass("selected");
    
        $("#team-builder .id-hover-overlay-full").hide();
        $("#team-builder .id-hover-overlay-top").show();
        $("#team-builder .id-hover-overlay-bottom").show();
    });
    
    $('#team-builder .identity-view-button').on("click", function () {
        globalThis.TeamOverlay = OverlayEnum.None;
        UpdateTeamSinDisplay(false);
        $('.ego-overlay').hide();
        $("#team-builder .id-selected-overlay").css("visibility", "hidden");
        $("#deployment-panel").hide();
    
        $('#team-builder .deploy-view-button').removeClass("selected");
        $('#team-builder .identity-view-button').addClass("selected");
        $('#team-builder .ego-view-button').removeClass("selected");
    
        $("#team-builder .id-hover-overlay-full").show();
        $("#team-builder .id-hover-overlay-top").hide();
        $("#team-builder .id-hover-overlay-bottom").hide();
    });
    
    $('#team-builder .ego-view-button').on("click", function () {
        globalThis.TeamOverlay = OverlayEnum.Ego;
        UpdateTeamSinDisplay(false);
        $('.ego-overlay').show();
        $("#team-builder .id-selected-overlay").css("visibility", "hidden");
        $("#deployment-panel").hide();
        
        $('#team-builder .deploy-view-button').removeClass("selected");
        $('#team-builder .identity-view-button').removeClass("selected");
        $('#team-builder .ego-view-button').addClass("selected");
    
        $("#team-builder .id-hover-overlay-full").show();
        $("#team-builder .id-hover-overlay-top").hide();
        $("#team-builder .id-hover-overlay-bottom").hide();
    });
    
    $('#equipable-select-modal .identity-view-button').on("click", function () {
        $('#id-select-list').show();
        $('#ego-select-list').hide();
        $('#equipable-select-modal .toggle-selected-image').eq(0).show();
        $('#equipable-select-modal .toggle-selected-image').eq(1).hide();
    });
    
    $('#equipable-select-modal .ego-view-button').on("click", function () {
        $('#id-select-list').hide();
        $('#ego-select-list').show();
        $('#equipable-select-modal .toggle-selected-image').eq(0).hide();
        $('#equipable-select-modal .toggle-selected-image').eq(1).show();
    });
    
    $('#close-equipable-select-button').on("click", function () {
        $('#equipable-select-modal').hide();
    });
    
    $('#copy-link').on("click", function () {
        navigator.clipboard.writeText(globalThis.TeamLink);
        $('#alert-popup').show();
    });
    
    $('#alert-popup-confirm-button').on("click", function () {
        $('#alert-popup').hide();
    });

    const $tooltip = $('#tooltip');

    $(document).on('mousemove', function (event) {
        $tooltip.css({
            top: event.pageY - 5,
            left: event.pageX - 5
        });
    });

    $(document).on('mouseenter', '.tooltip-container', function () {
        var statusInfo = DescriptionTagDictionary['[' + $(this).data('status') + ']']!;
        $tooltip.html(
            "<span class='tooltip-box'>" +
                "<img src='"+statusInfo.ImageLink+"' class='status-icon'><span id='tooltip-name' class='font-mikodacs'>"+statusInfo.Name+"</span><br>" +
                "<span id='tooltip-description' class='font-pretendard-regular'>"+statusInfo.Description+"</span>" +
            "</span>").show();
    });

    $(document).on('mouseleave', '.tooltip-container', function () {
        $tooltip.hide();
    });
}

export function UpdateSinnerIdentityCard(sinnerId: number) {
    $("#team-sinner-" + sinnerId).html("");
    let identity = globalThis.TeamData.find(sinner => sinner.SinnerEnum == sinnerId)!.EquipedIdentity;
    let sinner = globalThis.TeamData.find(sinner => sinner.SinnerEnum == sinnerId)!;
    $.get("./templates/id-card-template.html", function (data) {
        let template = $.parseHTML(data)!;
        $(template).find(".card-frame-overlay").attr("src", "./assets/OtherUIElements/IdFrames/" + identity.Rarity + "StarUptie4.png");
        $(template).find(".portrait").attr("src", identity.PortraitImageDir);
        $(template).find(".identity-rarity-image").attr("src", "./assets/Icons/Rarity" + identity.Rarity + ".png");
        $(template).find(".identity-level-value").text(MaxLevel);
        $(template).find(".identity-name").text(identity.Name);
        globalThis.TeamData[sinnerId]?.EquipedEgos.forEach(ego => {
            let egoOverlaySlot = $(template).find(".risk" + ego.RiskLevel);
            egoOverlaySlot.removeClass("no-ego").addClass(SinEnum[ego.AwakeningSkill.Affinity].toLowerCase() + "-ego");
            egoOverlaySlot.find(".risk-icon").attr("src", "./assets/Icons/RiskLevels/Risk" + ego.RiskLevel + "IconActive.png");
            egoOverlaySlot.find(".ego-name").css("display", "flex").text(ego.Name);
            if (ego.Name.length > 10) { egoOverlaySlot.find(".ego-name").css("font-size", "0.8cqw"); }
            if (ego.Name.length > 14) { egoOverlaySlot.find(".ego-name").css("font-size", "0.7cqw"); }
            if (ego.Name.length > 18) { egoOverlaySlot.find(".ego-name").css("font-size", "0.6cqw").css("letter-spacing", "-0.06cqw"); }
            if (ego.Name.length > 24) { egoOverlaySlot.find(".ego-name").css("font-size", "0.5cqw").css("letter-spacing", "-0.05cqw"); }
            egoOverlaySlot.find(".ego-image").parent().css("display", "flex").attr("src", ego.AwakeningSkill.SkillImageDir);
            egoOverlaySlot.find(".threadspin-icon").parent().css("display", "flex");
        });
        $("#team-sinner-" + sinnerId).html(template.map(node => (node as HTMLElement).outerHTML).join(''));
        if (globalThis.TeamOverlay == OverlayEnum.Ego) { $('#team-builder .ego-overlay').show(); };

        if (sinner.DeploymentSlot){
            $("#team-sinner-" + sinnerId).find(".id-selected-overlay").show();
            $("#team-sinner-" + sinnerId).find(".id-deployment-order-value").css("display", "block").text(sinner.DeploymentSlot);
            if (sinner.DeploymentSlot <= 6){
                $("#team-sinner-" + sinnerId).find(".id-selected-image").css("display", "block");
                $("#team-sinner-" + sinnerId).find(".id-deployment-order-value").addClass("amber").removeClass("teal");
            }
            else{
                $("#team-sinner-" + sinnerId).find(".id-backup-image").css("display", "block");
                $("#team-sinner-" + sinnerId).find(".id-deployment-order-value").addClass("teal").removeClass("amber");
            }
        }

        if (globalThis.TeamOverlay == OverlayEnum.Deployment){
            $("#team-sinner-" + sinnerId).find('.id-hover-overlay-full').hide();
            $("#team-sinner-" + sinnerId).find('.id-hover-overlay-top').show();
            $("#team-sinner-" + sinnerId).find('.id-hover-overlay-bottom').show();
            $("#team-sinner-" + sinnerId).find(".id-selected-overlay").css("visibility", "visible");
        }
        else {
            $("#team-sinner-" + sinnerId).find('.id-hover-overlay-full').show();
            $("#team-sinner-" + sinnerId).find('.id-hover-overlay-top').hide();
            $("#team-sinner-" + sinnerId).find('.id-hover-overlay-bottom').hide();
            $("#team-sinner-" + sinnerId).find(".id-selected-overlay").css("visibility", "hidden");
        }

        var holdTimeout: number;
        var isHolding: boolean = false;
        
        $("#team-sinner-" + sinnerId).find(".id-hover-overlay-top, .id-hover-overlay-bottom, .id-hover-overlay-full").on("mousedown", function () {
            $("#team-sinner-" + sinnerId + " .loading-circle").css('transition', 'stroke-dashoffset 0.5s linear').css('strokeDashoffset', '0'); // Reapply transition
            isHolding = true;
            holdTimeout = setTimeout(function () {
                resetLoadingRing(sinnerId);
                isHolding = false;
                LoadIdentityDetailsModal(identity);
            }, MouseHoldTimeThreshhold);
        });

        $("#team-sinner-" + sinnerId).find(".id-hover-overlay-top, .id-hover-overlay-full").on("mouseup", function () {
            resetLoadingRing(sinnerId);
            clearTimeout(holdTimeout);
            if (isHolding) {
                LoadEquipableListToModal(sinnerId);
                $('#equipable-select-modal').show();
                $('#equipable-select-modal .toggle-selected-image').eq(0).show();
                $('#equipable-select-modal .toggle-selected-image').eq(1).hide();
            }
            isHolding = false;
        });

        $("#team-sinner-" + sinnerId).find(".id-hover-overlay-bottom").on("mouseup", function () {
            resetLoadingRing(sinnerId);
            clearTimeout(holdTimeout);
            if (isHolding) {
                ToggleDeployment(sinnerId);
            }
            isHolding = false;
        });

        $("#team-sinner-" + sinnerId).find(".id-hover-overlay-top, .id-hover-overlay-full").on("mouseleave", function () {
            resetLoadingRing(sinnerId);
            clearTimeout(holdTimeout);
            isHolding = false;
        });

        function resetLoadingRing(sinnerId: number) {
            $("#team-sinner-" + sinnerId + " .loading-circle").css('transition', 'none').css('strokeDashoffset', '283');
            setTimeout(() => {
                $("#team-sinner-" + sinnerId + " .loading-circle").css('transition', 'stroke-dashoffset 0.5s linear');
            }, 0);
        }
    });
}

export function ToggleDeployment(sinnerId: number){
    let sinner = globalThis.TeamData.find(sinner => sinner.SinnerEnum == sinnerId)!;

    if (!sinner.DeploymentSlot){
        sinner.DeploymentSlot = ++globalThis.DeployedAmount;
        $("#team-sinner-" + sinnerId).find(".id-selected-overlay").css("display", "block");
        $("#team-sinner-" + sinnerId).find(".id-deployment-order-value").css("display", "block").text(sinner.DeploymentSlot);
        if (sinner.DeploymentSlot <= 6){
            $("#team-sinner-" + sinnerId).find(".id-selected-image").css("display", "block");
            $("#team-sinner-" + sinnerId).find(".id-deployment-order-value").addClass("amber").removeClass("teal");
        }
        else{
            $("#team-sinner-" + sinnerId).find(".id-backup-image").css("display", "block");
            $("#team-sinner-" + sinnerId).find(".id-deployment-order-value").addClass("teal").removeClass("amber");
        }
        $("#deployed-current-value").text(globalThis.DeployedAmount);

        for (let i = 0; i < 3; i++) {  //add new sins
            globalThis.DeployedTeamSins[sinner.EquipedIdentity.Skills[i]!.Affinity].Generated += (3 - i);
        }

        sinner.EquipedEgos.forEach(ego => {
            ego.Cost.forEach((cost) => {
                globalThis.TeamSins[cost.sin].Used += cost.amount;
                if (sinner.DeploymentSlot){
                    globalThis.DeployedTeamSins[cost.sin].Used += cost.amount;
                }
            });
        });
    }
    else {
        let slot = sinner.DeploymentSlot;
        sinner.DeploymentSlot = undefined;
        globalThis.DeployedAmount -= 1;
        $("#team-sinner-" + sinnerId).find(".id-selected-overlay").css("display", "none");
        $("#team-sinner-" + sinnerId).find(".deployment-banner").css("display", "none");
        $("#deployed-current-value").text(globalThis.DeployedAmount);

        globalThis.TeamData.filter(teamSinner => teamSinner.DeploymentSlot != undefined && teamSinner.DeploymentSlot > slot).forEach(teamSinner => {
            if (teamSinner.DeploymentSlot == 7){
                $("#team-sinner-" + teamSinner.SinnerEnum).find(".id-selected-image").show();
                $("#team-sinner-" + teamSinner.SinnerEnum).find(".id-backup-image").hide();
                $("#team-sinner-" + teamSinner.SinnerEnum).find(".id-deployment-order-value").addClass("amber").removeClass("teal");
            }
            $("#team-sinner-" + teamSinner.SinnerEnum).find(".id-deployment-order-value").css("display", "block").text(--teamSinner.DeploymentSlot!);
        });

        for (let i = 0; i < 3; i++) {  //deduct sins generated from team total
            let skill = sinner.EquipedIdentity.Skills[i]!;
            globalThis.DeployedTeamSins[skill.Affinity].Generated -= (3 - i);
        }

        sinner.EquipedEgos.forEach(ego => {
            ego.Cost.forEach((cost) => {
                globalThis.DeployedTeamSins[cost.sin].Used -= cost.amount;
            });
        });
    }
    UpdateLink();
    UpdateTeamSinDisplay(true);
}

function LoadEquipableListToModal(sinnerId: number) {
    $("#id-select-list").html('');
    let equipedId = globalThis.TeamData.find(sinner => sinner.SinnerEnum == sinnerId)!.EquipedIdentity;
    $.get('./templates/id-card-template.html', function (data) {
        Identities.filter(identity => identity.Sinner == sinnerId).sort(function (a, b) { return b.Rarity - a.Rarity; }).forEach(identity => {
            let template = $.parseHTML(data)!;
            $(template).find(".card-frame-overlay").attr("src", './assets/OtherUIElements/IdFrames/' + identity.Rarity + 'StarUptie4.png');
            $(template).find(".portrait").attr("src", identity.PortraitImageDir);
            $(template).find(".identity-level-value").text(MaxLevel);
            $(template).find(".identity-name").text(identity.Name);
            $(template).find(".identity-rarity-image").attr("src", "./assets/Icons/Rarity" + identity.Rarity + ".png");

            if (identity.Id == equipedId.Id) {
                $(template).find(".id-selected-overlay").css("display", "block");
                $(template).find(".id-selected-image").css("display", "block");
            }

            var holdTimeout: number;
            var isHolding: boolean = false;
            let $loadingCircle = $(template).find(".loading-circle");

            $(template).on("mousedown", function () {
                isHolding = true;
                $loadingCircle.css('transition', 'stroke-dashoffset ' + (MouseHoldTimeThreshhold / 1000) + 's linear');
                $loadingCircle.css('strokeDashoffset', '0');
                holdTimeout = setTimeout(function () {
                    resetLoadingRing();
                    isHolding = false;
                    LoadIdentityDetailsModal(identity);
                }, MouseHoldTimeThreshhold);
            });

            $(template).on("mouseup", function () {
                resetLoadingRing();
                clearTimeout(holdTimeout);
                if (isHolding) {
                    EquipIdentity(identity);
                    $("#id-select-list .id-selected-overlay").css("display", "none");
                    $(template).find(".id-selected-overlay").css("display", "block");
                    $(template).find(".id-selected-image").css("display", "block");
                }
                isHolding = false;
            });

            $(template).on("mouseleave", function () {
                resetLoadingRing();
                clearTimeout(holdTimeout);
                isHolding = false;
            });
        
            $(template).find('.id-hover-overlay-full').hide();
            $(template).find('.id-hover-overlay-top').hide();
            $(template).find('.id-hover-overlay-bottom').hide();

            function resetLoadingRing() {
                $loadingCircle.css('transition', 'none');
                $loadingCircle.css('strokeDashoffset', '283');
                setTimeout(() => {
                    $loadingCircle.css('transition', 'stroke-dashoffset ' + (MouseHoldTimeThreshhold / 1000) + 's linear');
                }, 0);
            }
            $("#id-select-list").append(template);
        });
    });

    $("#ego-select-list").html('');
    $.get('./templates/ego-list-orb-template.html', function (data) {
        Egos.filter(ego => ego.Sinner == sinnerId).sort(function (a, b) { return a.RiskLevel - b.RiskLevel; }).forEach(ego => {
            let template = $.parseHTML(data)!;

            $(template).find(".ego-image").attr("src", ego.FullImageDir);
            $(template).find(".ego-label-image").attr("src", "./assets/OtherUIElements/EGO/" + SinEnum[ego.AwakeningSkill.Affinity] + "EgoOrbBase.png");
            $(template).find(".ego-risk-level-image").attr("src", "./assets/Icons/RiskLevels/Risk" + ego.RiskLevel + "IconActive.png");
            $(template).find(".ego-name-value").text(ego.Name);

            if (globalThis.TeamData.find(sinner => sinner.SinnerEnum == sinnerId)!.EquipedEgos.some(equipedEgo => equipedEgo.Id == ego.Id)) {
                $(template).find(".ego-orb-selected").css("display", "block");
            }

            var holdTimeout: number;
            var isHolding: boolean = false;
            let $loadingCircle = $(template).find(".loading-circle");

            $(template).on("mousedown", function () {
                $loadingCircle.css('transition', 'stroke-dashoffset ' + (MouseHoldTimeThreshhold / 1000) + 's linear');
                $loadingCircle.css('strokeDashoffset', '0');
                isHolding = true;
                holdTimeout = setTimeout(function () {
                    resetLoadingRing();
                    isHolding = false;
                    LoadEgoDetailsModal(ego);
                }, MouseHoldTimeThreshhold);
            });

            $(template).on("mouseup", function () {
                resetLoadingRing();
                clearTimeout(holdTimeout);
                if (isHolding) {
                    EquipEgo(ego);
                    $("#ego-select-list .ego-list-orb").filter(function () {
                        return $(this).find('.ego-risk-level-image').attr("src") === $(template).find('.ego-risk-level-image').attr("src");
                    }).find(".ego-orb-selected").css("display", "none");
                    if (globalThis.TeamData.find(sinner => sinner.SinnerEnum == sinnerId)!.EquipedEgos.some(equipedEgo => equipedEgo.Id == ego.Id)) {
                        $(template).find(".ego-orb-selected").css("display", "block");
                    }
                }
                isHolding = false;
            });

            $(template).on("mouseleave", function () {
                resetLoadingRing();
                clearTimeout(holdTimeout);
                isHolding = false;
            });

            function resetLoadingRing() {
                $loadingCircle.css('transition', 'none');
                $loadingCircle.css('strokeDashoffset', '283');
                setTimeout(() => {
                    $loadingCircle.css('transition', 'stroke-dashoffset ' + (MouseHoldTimeThreshhold / 1000) + 's linear');
                }, 0);
            }

            $("#ego-select-list").append(template);
        });
    });

    $("#id-select-list").show();
    $("#ego-select-list").hide();
}

function LoadIdentityDetailsModal(identity: Identity) {
    $("#equipable-details-modal #id-status-list").show();
    $("#equipable-details-modal #id-resistances-list").show();
    $("#equipable-details-modal #ego-resistances-list").hide();
    $("#equipable-level").show();
    $("#id-health-value").text(Math.round(identity.BaseHealth + identity.HealthPerLevel * MaxLevel));
    $("#id-speed").text((identity.SpeedMin + " - " + identity.SpeedMax));
    $("#defense-value").text(MaxLevel + identity.DefenseLevel);
    $("#slash-resistance-label-value, #slash-resistance-number-value").removeClass("fatal-resist endure-resist ineff-resist");
    $("#pierce-resistance-label-value, #pierce-resistance-number-value").removeClass("fatal-resist endure-resist ineff-resist");
    $("#blunt-resistance-label-value, #blunt-resistance-number-value").removeClass("fatal-resist endure-resist ineff-resist");
    $("#slash-resistance-label-value").text(ResistanceLabels.find(l => l.value == identity.SlashResist)!.label);
    $("#slash-resistance-number-value").text('(x' + identity.SlashResist + ')');
    switch (identity.SlashResist) {
        case 0.5: $("#slash-resistance-label-value, #slash-resistance-number-value").addClass("ineff-resist");
        case 0.75: $("#slash-resistance-label-value, #slash-resistance-number-value").addClass("endure-resist");
        case 2: $("#slash-resistance-label-value, #slash-resistance-number-value").addClass("fatal-resist");
    }
    $("#pierce-resistance-label-value").text(ResistanceLabels.find(l => l.value == identity.PierceResist)!.label);
    $("#pierce-resistance-number-value").text('(x' + identity.PierceResist + ')');
    switch (identity.PierceResist) {
        case 0.5: $("#pierce-resistance-label-value, #pierce-resistance-number-value").addClass("ineff-resist");
        case 0.75: $("#pierce-resistance-label-value, #pierce-resistance-number-value").addClass("endure-resist");
        case 2: $("#pierce-resistance-label-value, #pierce-resistance-number-value").addClass("fatal-resist");
    }
    $("#blunt-resistance-label-value").text(ResistanceLabels.find(l => l.value == identity.BluntResist)!.label);
    $("#blunt-resistance-number-value").text('(x' + identity.BluntResist + ')');
    switch (identity.BluntResist) {
        case 0.5: $("#blunt-resistance-label-value, #blunt-resistance-number-value").addClass("ineff-resist");
        case 0.75: $("#blunt-resistance-label-value, #blunt-resistance-number-value").addClass("endure-resist");
        case 2: $("#blunt-resistance-label-value, #blunt-resistance-number-value").addClass("fatal-resist");
    }
    $("#equipable-details-rarity-image").attr("src", "./assets/Icons/Rarity" + identity.Rarity + ".png");
    $("#equipable-details-name").text(identity.Name);
    $("#equipable-details-tabs").html('');
    $("#equipable-details-skill-select").html('');
    $("#equipable-details-skills").html('');
    $("#equipable-details-portrait").attr("src", identity.FullImageDir);
    $("#equipable-details-portrait-container").addClass("shadow");
    $("#ego-sanity-cost").hide();
    $("#equipable-details-ego-cost").hide();

    $.get('./templates/skill-detail-template.html', function (data) {
        identity.Skills.forEach((skill, index) => {
            let template = $.parseHTML(data)!;

            var tab = skill.SkillType == SkillTypeEnum.Attack ? $('<button>Skill ' + (index + 1) + '</button>') : $('<button>Defense</button>');
            tab.on("click", function () {
                $("#equipable-details-skill-select button").removeClass();
                tab.addClass("selected").addClass(SinEnum[skill.Affinity].toLowerCase());
                ShowSkill(index + 1);
            });
            $("#equipable-details-skill-select").append(tab);

            $(template).attr('id', 'skill' + (index + 1));

            $(template).find(".skill-coin-power-panel").attr("src", "./assets/Icons/Skills/" + SinEnum[skill.Affinity] + "CoinPowerPanel.png");
            $(template).find(".skill-icon-frame").attr("src", "./assets/Icons/Skills/" + SinEnum[skill.Affinity] + "Skill" + skill.SkillTier + ".png");
            if (skill.DamageType != undefined) { $(template).find(".skill-damage-type-icon").attr("src", "./assets/Icons/Skills/SkillDamageTypeBadge/" + SinEnum[skill.Affinity] + DamageTypeEnum[skill.DamageType!] + ".png"); }
            $(template).find(".skill-icon").attr("src", skill.SkillImageDir);
            $(template).find(".skill-name-ribbon-start").attr("src", "./assets/Icons/Skills/SkillNameRibbon/" + SinEnum[skill.Affinity] + "RibbonStart.png");
            $(template).find(".skill-name-ribbon-middle").css("background-image", "URL('./assets/Icons/Skills/SkillNameRibbon/" + SinEnum[skill.Affinity] + "RibbonMiddle.png')");
            $(template).find(".skill-name-ribbon-end").css("background-image", "URL('./assets/Icons/Skills/SkillNameRibbon/" + SinEnum[skill.Affinity] + "RibbonEnd.png')");

            if (index < 3) {
                $(template).find(".skill-name-ribbon-end span").text(3 - index);
            }
            else {
                $(template).find(".skill-name-ribbon-end .multiply-icon").hide();
                $(template).find(".skill-name-ribbon-end span").hide();
            }

            $(template).find(".skill-base-power-value").text(skill.BaseValue);
            $(template).find(".skill-coin-power-value").text((skill.CoinValue >= 0 ? '+' : '') + skill.CoinValue);
            $(template).find(".skill-name-value").text(skill.Name);
            if (skill.SkillType == SkillTypeEnum.Defense) {
                $(template).find(".skill-attack-icon").attr("src", "./assets/Icons/Stats/DefensePower.png");

            }
            $(template).find(".skill-level-value").text((MaxLevel + skill.SkillLevel));

            for (let i = 0; i < skill.Coins; i++) {
                $(template).find(".skill-coins").append($("<img src='./assets/Icons/Skills/Coin.png'>"));
            }

            for (let i = 0; i < skill.AttackWeight; i++) {
                $(template).find(".skill-attack-weight-value").append("⯀");
            }

            skill.SkillDescription.forEach((descriptionPart) => {
                var div = $('<div class="description-part"></div>')
                if (descriptionPart.Coin > 0) {
                    div.append('<div class="description-coin">' + RomanNumerals[descriptionPart.Coin] + '</div>');
                }
                div.append('<div class="description-text">' + AddTooltipsToTags(descriptionPart.Text) + '</div><br>');
                $(template).find(".skill-description").append(div);
            })

            $("#equipable-details-skills").append(template);
        });

        var tab = $('<button>Passive</button>');
        tab.on("click", function () {
            $("#equipable-details-skill-select button").removeClass();
            tab.addClass("selected").addClass("sloth");
            ShowSkill(10);
        });
        $("#equipable-details-skill-select").append(tab);
        $("#equipable-details-skills").append(BuildPassiveDescriptions(identity.Passives));

        $("#equipable-details-skill-select button").removeClass().eq(0).addClass("selected").addClass(SinEnum[identity.Skills[0]!.Affinity].toLowerCase());
        ShowSkill(1);
        $("#equipable-details-modal").show();
    });
}

function LoadEgoDetailsModal(ego: Ego) {
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
    $("#lust-resistance-label-value").text(ResistanceLabels.find(l => l.value == ego.Resistances.find(e => e.sin == SinEnum.Lust)!.resistance)!.label);
    $("#sloth-resistance-label-value").text(ResistanceLabels.find(l => l.value == ego.Resistances.find(e => e.sin == SinEnum.Sloth)!.resistance)!.label);
    $("#gluttony-resistance-label-value").text(ResistanceLabels.find(l => l.value == ego.Resistances.find(e => e.sin == SinEnum.Gluttony)!.resistance)!.label);
    $("#gloom-resistance-label-value").text(ResistanceLabels.find(l => l.value == ego.Resistances.find(e => e.sin == SinEnum.Gloom)!.resistance)!.label);
    $("#pride-resistance-label-value").text(ResistanceLabels.find(l => l.value == ego.Resistances.find(e => e.sin == SinEnum.Pride)!.resistance)!.label);
    $("#envy-resistance-label-value").text(ResistanceLabels.find(l => l.value == ego.Resistances.find(e => e.sin == SinEnum.Envy)!.resistance)!.label);

    $("#wrath-resistance-number-value").text('(x' + ego.Resistances.find(e => e.sin == SinEnum.Wrath)!.resistance + ')');
    $("#lust-resistance-number-value").text('(x' + ego.Resistances.find(e => e.sin == SinEnum.Lust)!.resistance + ')')!;
    $("#sloth-resistance-number-value").text('(x' + ego.Resistances.find(e => e.sin == SinEnum.Sloth)!.resistance + ')')!;
    $("#gluttony-resistance-number-value").text('(x' + ego.Resistances.find(e => e.sin == SinEnum.Gluttony)!.resistance + ')')!;
    $("#gloom-resistance-number-value").text('(x' + ego.Resistances.find(e => e.sin == SinEnum.Gloom)!.resistance + ')')!;
    $("#pride-resistance-number-value").text('(x' + ego.Resistances.find(e => e.sin == SinEnum.Pride)!.resistance + ')')!;
    $("#envy-resistance-number-value").text('(x' + ego.Resistances.find(e => e.sin == SinEnum.Envy)!.resistance + ')')!;

    SetSinResistanceAttributes(SinEnum.Wrath, ego.Resistances.find(e => e.sin == SinEnum.Wrath)!.resistance);
    SetSinResistanceAttributes(SinEnum.Lust, ego.Resistances.find(e => e.sin == SinEnum.Lust)!.resistance);
    SetSinResistanceAttributes(SinEnum.Sloth, ego.Resistances.find(e => e.sin == SinEnum.Sloth)!.resistance);
    SetSinResistanceAttributes(SinEnum.Gluttony, ego.Resistances.find(e => e.sin == SinEnum.Gluttony)!.resistance);
    SetSinResistanceAttributes(SinEnum.Gloom, ego.Resistances.find(e => e.sin == SinEnum.Gloom)!.resistance);
    SetSinResistanceAttributes(SinEnum.Pride, ego.Resistances.find(e => e.sin == SinEnum.Pride)!.resistance);
    SetSinResistanceAttributes(SinEnum.Envy, ego.Resistances.find(e => e.sin == SinEnum.Envy)!.resistance);

    $("#equipable-details-name").text(ego.Name);
    $("#equipable-details-tabs").html('');
    $("#equipable-details-skill-select").html('');
    $("#equipable-details-skills").html('');
    $("#equipable-details-portrait").attr("src", ego.FullImageDir);
    $("#equipable-details-portrait-container").removeClass("shadow");
    $("#ego-sanity-cost").show();
    $("#ego-awakening-cost-value").show().text(ego.AwakeningSanityCost);
    $("#ego-corrosion-cost-value").hide().text(ego.CorrosionSanityCost ?? '');
    $("#equipable-details-ego-cost").show().find(".cost-value-container").each(function () {
        $(this).text("0");
    });
    $(".cost-value-container").addClass("no-cost");

    $.get('./templates/skill-detail-template.html', function (data) {
        let template = $.parseHTML(data)!;

        var tab = $('<button>Awakening</button>');
        tab.on("click", function () {
            $("#equipable-details-skill-select button").removeClass();
            tab.addClass("selected").addClass(SinEnum[ego.AwakeningSkill.Affinity].toLowerCase());
            ShowSkill(1);
            $("#ego-awakening-cost-value").show();
            $("#ego-corrosion-cost-value").hide();
        });
        $("#equipable-details-skill-select").append(tab);

        $(template).attr('id', 'skill1');

        $(template).find(".skill-coin-power-panel").attr("src", "./assets/Icons/Skills/" + SinEnum[ego.AwakeningSkill.Affinity] + "CoinPowerPanel.png");
        $(template).find(".skill-icon-frame").attr("src", "./assets/Icons/Skills/" + SinEnum[ego.AwakeningSkill.Affinity] + "Skill" + ego.AwakeningSkill.SkillTier + ".png");
        $(template).find(".skill-icon").attr("src", ego.AwakeningSkill.SkillImageDir);
        $(template).find(".skill-damage-type-icon").attr("src", "./assets/Icons/Skills/SkillDamageTypeBadge/" + SinEnum[ego.AwakeningSkill.Affinity] + DamageTypeEnum[ego.AwakeningSkill.DamageType!] + ".png");
        $(template).find(".skill-name-ribbon-start").attr("src", "./assets/Icons/Skills/SkillNameRibbon/" + SinEnum[ego.AwakeningSkill.Affinity] + "RibbonStart.png");
        $(template).find(".skill-name-ribbon-middle").css("background-image", "URL('./assets/Icons/Skills/SkillNameRibbon/" + SinEnum[ego.AwakeningSkill.Affinity] + "RibbonMiddle.png')");
        $(template).find(".skill-name-ribbon-end").css("background-image", "URL('./assets/Icons/Skills/SkillNameRibbon/" + SinEnum[ego.AwakeningSkill.Affinity] + "RibbonEnd.png')");


        $(template).find(".skill-base-power-value").text(ego.AwakeningSkill.BaseValue);
        $(template).find(".skill-coin-power-value").text((ego.AwakeningSkill.CoinValue >= 0 ? '+' : '') + ego.AwakeningSkill.CoinValue);
        $(template).find(".skill-name-value").text(ego.AwakeningSkill.Name);
        $(template).find(".skill-level-value").text((MaxLevel + ego.AwakeningSkill.SkillLevel));

        for (let i = 0; i < ego.AwakeningSkill.Coins; i++) {
            $(template).find(".skill-coins").append($("<img src='./assets/Icons/Skills/Coin.png'>"));
        }

        for (let i = 0; i < ego.AwakeningSkill.AttackWeight; i++) {
            $(template).find(".skill-attack-weight-value").append("⯀");
        }

        $(template).find(".skill-name-ribbon-end .multiply-icon").hide();
        $(template).find(".skill-name-ribbon-end span").hide();

        ego.AwakeningSkill.SkillDescription.forEach((descriptionPart) => {
            var div = $('<div class="description-part"></div>')
            if (descriptionPart.Coin > 0) {
                div.append('<div class="description-coin">' + RomanNumerals[descriptionPart.Coin] + '</div>');
            }
            div.append('<div class="description-text">' + AddTooltipsToTags(descriptionPart.Text) + '</div><br>');
            $(template).find(".skill-description").append(div);
        });

        $("#equipable-details-skills").append(template);

        if (ego.CorrosionSkill) {
            let template = $.parseHTML(data)!;

            var tab2 = $('<button>Corrosion</button>')
            tab2.on("click", function () {
                $("#equipable-details-skill-select button").removeClass();
                tab2.addClass("selected").addClass(SinEnum[ego.CorrosionSkill!.Affinity].toLowerCase());
                ShowSkill(2);
                $("#ego-awakening-cost-value").hide();
                $("#ego-corrosion-cost-value").show();
            });
            $("#equipable-details-skill-select").append(tab2);

            $(template).attr('id', 'skill2');

            $(template).find(".skill-coin-power-panel").attr("src", "./assets/Icons/Skills/" + SinEnum[ego.AwakeningSkill.Affinity] + "CoinPowerPanel.png");
            $(template).find(".skill-icon-frame").attr("src", "./assets/Icons/Skills/" + SinEnum[ego.AwakeningSkill.Affinity] + "Skill" + ego.CorrosionSkill.SkillTier + ".png");
            $(template).find(".skill-damage-type-icon").attr("src", "./assets/Icons/Skills/SkillDamageTypeBadge/" + SinEnum[ego.AwakeningSkill.Affinity] + DamageTypeEnum[ego.CorrosionSkill.DamageType!] + ".png");
            $(template).find(".skill-icon").attr("src", ego.CorrosionSkill.SkillImageDir);
            $(template).find(".skill-name-ribbon-start").attr("src", "./assets/Icons/Skills/SkillNameRibbon/" + SinEnum[ego.AwakeningSkill.Affinity] + "RibbonStart.png");
            $(template).find(".skill-name-ribbon-middle").css("background-image", "URL('./assets/Icons/Skills/SkillNameRibbon/" + SinEnum[ego.AwakeningSkill.Affinity] + "RibbonMiddle.png')");
            $(template).find(".skill-name-ribbon-end").css("background-image", "URL('./assets/Icons/Skills/SkillNameRibbon/" + SinEnum[ego.AwakeningSkill.Affinity] + "RibbonEnd.png')");

            $(template).find(".skill-base-power-value").text(ego.CorrosionSkill.BaseValue);
            $(template).find(".skill-coin-power-value").text((ego.CorrosionSkill.CoinValue >= 0 ? '+' : '') + ego.CorrosionSkill.CoinValue);
            $(template).find(".skill-name-value").text(ego.CorrosionSkill.Name);
            $(template).find(".skill-level-value").text((MaxLevel + ego.CorrosionSkill.SkillLevel));

            for (let i = 0; i < ego.CorrosionSkill.Coins; i++) {
                $(template).find(".skill-coins").append($("<img src='./assets/Icons/Skills/Coin.png'>"));
            }

            for (let i = 0; i < ego.CorrosionSkill.AttackWeight; i++) {
                $(template).find(".skill-attack-weight-value").append("⯀");
            }

            $(template).find(".skill-name-ribbon-end .multiply-icon").hide();
            $(template).find(".skill-name-ribbon-end span").hide();

            ego.CorrosionSkill.SkillDescription.forEach((descriptionPart) => {
                var div = $('<div class="description-part"></div>')
                if (descriptionPart.Coin > 0) {
                    div.append('<div class="description-coin">' + RomanNumerals[descriptionPart.Coin] + '</div>');
                }
                div.append('<div class="description-text">' + AddTooltipsToTags(descriptionPart.Text) + '</div><br>');
                $(template).find(".skill-description").append(div);
            })

            $("#equipable-details-skills").append(template);
        }

        var tab3 = $('<button>Passive</button>');
        tab3.on("click", function () {
            $("#equipable-details-skill-select button").removeClass();
            tab3.addClass("selected").addClass("sloth");
            ShowSkill(10);
        });
        $("#equipable-details-skill-select").append(tab3);
        $("#equipable-details-skills").append(BuildPassiveDescriptions([ego.Passive]));

        ego.Cost.forEach((cost) => {
            $("#equipable-details-ego-cost .ego-cost-slot:nth-child(" + (cost.sin + 1) + ")").find(".cost-value-container").text(cost.amount).removeClass("no-cost");
        });

        ShowSkill(1);
        $("#equipable-details-skill-select button").removeClass().eq(0).addClass("selected").addClass(SinEnum[ego.AwakeningSkill.Affinity].toLowerCase());
        $("#equipable-details-modal").show();
    });
}

function SetSinResistanceAttributes(sin: SinEnum, value: number) {
    let sinName = SinEnum[sin];
    switch (value) {
        case 0.5: {
            $("#equipable-details-modal").find("." + sinName.toLowerCase() + "-icon").attr("src", "./assets/Icons/Resistances/" + sinName + "Ineff.png");
            $("#" + sinName.toLowerCase() + "-resistance-label-value, #" + sinName.toLowerCase() + "-resistance-number-value").addClass("ineff-resist");
            break;
        }
        case 0.75: {
            $("#equipable-details-modal").find("." + sinName.toLowerCase() + "-icon").attr("src", "./assets/Icons/Resistances/" + sinName + "Endure.png");
            $("#" + sinName.toLowerCase() + "-resistance-label-value, #" + sinName.toLowerCase() + "-resistance-number-value").addClass("endure-resist");
            break;
        }
        case 1: {
            $("#equipable-details-modal").find("." + sinName.toLowerCase() + "-icon").attr("src", "./assets/Icons/Resistances/" + sinName + "Normal.png");
            break;
        }
        case 2: {
            $("#equipable-details-modal").find("." + sinName.toLowerCase() + "-icon").attr("src", "./assets/Icons/Resistances/" + sinName + "Fatal.png");
            $("#" + sinName.toLowerCase() + "-resistance-label-value, #" + sinName.toLowerCase() + "-resistance-number-value").addClass("fatal-resist");
            break;
        }
    }
}

function ShowSkill(index: number) {
    $(".skill").hide();
    $("#skill" + index).show();
}

function AddTooltipsToTags(description: string): string {
    return description.replace(/\[([\w-.()&]+(?:[\s-&]+[\w-()&]+)*)\]/g, (match, p1) => {
        // Add brackets back to the key for the dictionary lookup
        const keyWithBrackets = `[${p1}]`;
        return DescriptionTagDictionary[keyWithBrackets] !== undefined ? DescriptionTagDictionary[keyWithBrackets].HtmlString : match;
    });
}

function BuildPassiveDescriptions(passives: Array<Passive>): JQuery<HTMLElement> {
    let description = $('<div id="skill10" class="skill"></div>');
    if (passives.length > 1) {
        description.append($('<div class="passive-category-label font-mikodacs">Passives</div>'))
    };
    $.get("./templates/passive-detail-template.html", function (data) {
        passives.forEach((passive) => {
            if (passive.Type == PassiveTypeEnum.Support) {
                description.append($('<div class="passive-category-label font-mikodacs">Support</div>'));
            }
            let template = $.parseHTML(data)!;
            $(template).find(".passive-name-value").text(passive.Name);
            $(template).find(".passive-description-value").html(AddTooltipsToTags(passive.Description));

            if (passive.Cost) {
                passive.Cost.forEach(cost => {
                    $(template).find(".passive-cost").append('<img class="' + SinEnum[cost.sin].toLowerCase() + '-icon"><img class="multiply-icon"><span class="passive-cost-value font-excelsior-sans">' + cost.amount + '</span>')
                });
                $(template).find(".passive-cost").append('<span class="passive-cost-type font-mikodacs">' + (passive.CostType == PassiveCostTypeEnum.Owned ? ' Owned' : ' Res.') + '</span>');
            }
            description.append(template);
        });
    });
    return description;
}

export function UpdateTeamSinDisplay(deployedOnly: boolean = false): void {
    let sinList = deployedOnly ? globalThis.DeployedTeamSins : globalThis.TeamSins;
    $("#wrath-generated-value").text(sinList[SinEnum.Wrath].Generated);
    $("#wrath-used-value").text(sinList[SinEnum.Wrath].Used);

    $("#lust-generated-value").text(sinList[SinEnum.Lust].Generated);
    $("#lust-used-value").text(sinList[SinEnum.Lust].Used);

    $("#sloth-generated-value").text(sinList[SinEnum.Sloth].Generated);
    $("#sloth-used-value").text(sinList[SinEnum.Sloth].Used);

    $("#gluttony-generated-value").text(sinList[SinEnum.Gluttony].Generated);
    $("#gluttony-used-value").text(sinList[SinEnum.Gluttony].Used);

    $("#gloom-generated-value").text(sinList[SinEnum.Gloom].Generated);
    $("#gloom-used-value").text(sinList[SinEnum.Gloom].Used);

    $("#pride-generated-value").text(sinList[SinEnum.Pride].Generated);
    $("#pride-used-value").text(sinList[SinEnum.Pride].Used);

    $("#envy-generated-value").text(sinList[SinEnum.Envy].Generated);
    $("#envy-used-value").text(sinList[SinEnum.Envy].Used);
}