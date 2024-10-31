import { InitDefaultSinners } from "./Handlers/DataInitHandler";
import $ from "jquery";
import { Egos, Identities, MouseHoldTimeThreshhold, tooltipTemplate, MaxLevel } from "./Consts/OtherConstants";
import { EquipEgo, EquipIdentity } from "./Handlers/EquipHandler";
import { LoadEquipableListToModal, LoadIdentityDetailsModal, UpdateSinnerIdentityCard, UpdateTeamSinDisplay } from "./Handlers/UIHandler";
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
globalThis.TeamOverlay = OverlayEnum.None;
globalThis.TeamLink = window.location.href;

globalThis.TeamData.forEach(sinner => {
    for (let i = 0; i < 3; i++) {  //add new sins
        globalThis.TeamSins[sinner.EquipedIdentity.Skills[i]!.Affinity].Generated += (3 - i);
    }
    sinner.EquipedEgos[0]?.Cost.forEach((cost) => {
        globalThis.TeamSins[cost.sin].Used += cost.amount;
    });
})
UpdateTeamSinDisplay();

$("#equipable-level-value").text(MaxLevel);

$('#close-equipable-select-button').on("click", function () {
    $('#equipable-select-modal').hide();
});

$('#close-equipable-details-button').on("click", function () {
    $('#equipable-details-modal').hide();
});

$('#team-builder .identity-view-button').on("click", function () {
    globalThis.TeamOverlay = OverlayEnum.None;
    $('.ego-overlay').hide();
    $('#team-builder .identity-view-button').addClass("selected");
    $('#team-builder .ego-view-button').removeClass("selected");
});

$('#team-builder .ego-view-button').on("click", function () {
    globalThis.TeamOverlay = OverlayEnum.Ego;
    $('.ego-overlay').show();
    $('#team-builder .identity-view-button').removeClass("selected");
    $('#team-builder .ego-view-button').addClass("selected");
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

        urlData.forEach(sinnerUrlData => {
            let match;
            let sinnerEnumValue: SinnerEnum;

            while ((match = regex.exec(sinnerUrlData)) !== null) {
                let paramName = match[1]; // The letter (parameter name)
                let paramValue = match[2]!; // The value (parameter value)

                switch (paramName) {
                    case 's': {
                        sinnerEnumValue = parseInt(paramValue, 10);
                        break;
                    }
                    case 'i': {
                        let identityRegex = /([0-9]*)([A-Z])/g;
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
    }
    catch {
        console.log("Error processing url params");
    }
}

var holdTimeout: number;
var isHolding: boolean = false;

globalThis.TeamData.forEach(sinner => {
    UpdateSinnerIdentityCard(sinner.SinnerEnum);

    $("#team-sinner-" + sinner.SinnerEnum).on("mousedown", function () {
        $("#team-sinner-" + sinner.SinnerEnum + " .loading-circle").css('transition', 'stroke-dashoffset 0.5s linear'); // Reapply transition
        $("#team-sinner-" + sinner.SinnerEnum + " .loading-circle").css('strokeDashoffset', '0'); // Reapply transition
        isHolding = true;
        holdTimeout = setTimeout(function () {
            resetLoadingRing(sinner.SinnerEnum);
            isHolding = false;
            LoadIdentityDetailsModal(sinner.EquipedIdentity);
        }, MouseHoldTimeThreshhold);
    });

    $("#team-sinner-" + sinner.SinnerEnum).on("mouseup", function () {
        resetLoadingRing(sinner.SinnerEnum);
        clearTimeout(holdTimeout);
        if (isHolding) {
            LoadEquipableListToModal(sinner.SinnerEnum);
            $('#equipable-select-modal').show();
            $('#equipable-select-modal .toggle-selected-image').eq(0).show();
            $('#equipable-select-modal .toggle-selected-image').eq(1).hide();
        }
        isHolding = false;
    });

    $("#team-sinner-" + sinner.SinnerEnum).on("mouseleave", function () {
        resetLoadingRing(sinner.SinnerEnum);
        clearTimeout(holdTimeout);
        isHolding = false;
    });
});

function resetLoadingRing(sinnerId: number) {
    $("#team-sinner-" + sinnerId + " .loading-circle").css('transition', 'none');
    $("#team-sinner-" + sinnerId + " .loading-circle").css('strokeDashoffset', '283');
    setTimeout(() => {
        $("#team-sinner-" + sinnerId + " .loading-circle").css('transition', 'stroke-dashoffset 0.5s linear');
    }, 0);
}

const $tooltip = $('#tooltip');

$(document).on('mousemove', function (event) {
    $tooltip.css({
        top: event.pageY - 50,
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