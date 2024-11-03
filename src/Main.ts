import { InitDefaultSinners } from "./Handlers/DataInitHandler";
import $ from "jquery";
import { Egos, Identities, MouseHoldTimeThreshhold, tooltipTemplate, MaxLevel } from "./Consts/OtherConstants";
import { EquipEgo, EquipIdentity } from "./Handlers/EquipHandler";
import { LoadEquipableListToModal, LoadIdentityDetailsModal, ToggleDeployment, UpdateSinnerIdentityCard, UpdateTeamSinDisplay } from "./Handlers/UIHandler";
import { DescriptionTagDictionary } from "./Consts/DescriptionTagDictionary";
import { SinEnum, SinnerEnum, OverlayEnum } from "./Enums/Index";

globalThis.TeamData = InitDefaultSinners();
globalThis.TeamSins = {
    [SinEnum.Wrath]: { Generated: 0, Used: 0 },
    [SinEnum.Lust]: { Generated: 0, Used: 0 },
    [SinEnum.Sloth]: { Generated: 0, Used: 0 },
    [SinEnum.Gluttony]: { Generated: 0, Used: 0 },
    [SinEnum.Gloom]: { Generated: 0, Used: 0 },
    [SinEnum.Pride]: { Generated: 0, Used: 0 },
    [SinEnum.Envy]: { Generated: 0, Used: 0 },
}
globalThis.DeployedTeamSins = {
    [SinEnum.Wrath]: { Generated: 0, Used: 0 },
    [SinEnum.Lust]: { Generated: 0, Used: 0 },
    [SinEnum.Sloth]: { Generated: 0, Used: 0 },
    [SinEnum.Gluttony]: { Generated: 0, Used: 0 },
    [SinEnum.Gloom]: { Generated: 0, Used: 0 },
    [SinEnum.Pride]: { Generated: 0, Used: 0 },
    [SinEnum.Envy]: { Generated: 0, Used: 0 },
}
globalThis.TeamOverlay = OverlayEnum.None;
globalThis.TeamLink = window.location.href;
globalThis.DeployedAmount = 0;

globalThis.TeamData.forEach(sinner => {
    for (let i = 0; i < 3; i++) {  //add new sins
        globalThis.TeamSins[sinner.EquipedIdentity.Skills[i]!.Affinity].Generated += (3 - i);
    }
    sinner.EquipedEgos[0]?.Cost.forEach((cost) => {
        globalThis.TeamSins[cost.sin].Used += cost.amount;
    });
})
UpdateTeamSinDisplay(false);

$("#equipable-level-value").text(MaxLevel);
$("#deployment-panel").hide();

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

const params = new URLSearchParams(window.location.search);
if (params.has('v1')) {
    try {
        let regex = /([a-z])([0-9A-Z]*)/g;
        let urlData = params.get('v1')!.split(/(?=s)/g);
        let deploymentUsed = false;
        let deploymentOrder: Array<{sinner: SinnerEnum, order: number}> = [];

        urlData.forEach(sinnerUrlData => {
            let match;
            let sinnerEnumValue: SinnerEnum | undefined = undefined;

            while ((match = regex.exec(sinnerUrlData)) !== null) {
                let paramName = match[1]; // The letter (parameter name)
                let paramValue = match[2]!; // The value (parameter value)

                switch (paramName) {
                    case 's': {
                        sinnerEnumValue = parseInt(paramValue, 10);
                        break;
                    }
                    case 'o': {
                        if (sinnerEnumValue != undefined) {
                            deploymentOrder.push({sinner: sinnerEnumValue, order: parseInt(paramValue, 10)});
                            deploymentUsed = true;
                        };
                        break;
                    }
                    case 'i': {
                        //let identityRegex = /([0-9]*)([A-Z])/g;
                        EquipIdentity(Identities.find(identity => identity.Sinner == sinnerEnumValue && (identity.Id % 100) == parseInt(paramValue.replace(/[^0-9]/g, ''), 10))!)

                        break;
                    }
                    case 'e': {
                        let egoRegex = /([0-9]*)([A-Z])/g;
                        let egoMatch: RegExpExecArray;

                        while ((egoMatch = egoRegex.exec(paramValue)!) !== null) {
                            EquipEgo(Egos.find(ego => ego.Sinner == sinnerEnumValue && (ego.Id % 100) == parseInt(egoMatch[1]!, 10))!)
                        }

                        break;
                    }
                }
            }
        });
        
        if (deploymentUsed){
            deploymentOrder.sort(function (a, b) { return a.order - b.order; }).forEach(entry => {            
                ToggleDeployment(entry.sinner);
            })
            $('#team-builder .deploy-view-button').trigger("click");
        }
    }
    catch {
        console.log("Error processing url params");
    }
}

globalThis.TeamData.forEach(sinner => {
    UpdateSinnerIdentityCard(sinner.SinnerEnum);
});

const $tooltip = $('#tooltip');

$(document).on('mousemove', function (event) {
    $tooltip.css({
        top: event.pageY - 5,
        left: event.pageX - 5
    });
});

$(document).on('mouseenter', '.tooltip-container', function (event) {
    function fillTooltip(template: string, name: string, description: string, imageLink: string): string {
        return template.replace("{Name}", name).replace("{Description}", description).replace("{ImageLink}", imageLink);
    }

    var statusInfo = DescriptionTagDictionary['[' + $(this).data('status') + ']']!;
    $tooltip.html('' + fillTooltip(tooltipTemplate, statusInfo.Name, statusInfo.Description, statusInfo.ImageLink));
    $tooltip.show();
});

$(document).on('mouseleave', '.tooltip-container', function () {
    $tooltip.hide();
});