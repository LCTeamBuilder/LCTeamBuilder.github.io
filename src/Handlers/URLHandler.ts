import $ from "jquery";
import { Egos, Identities } from "../Constants/Equipables";
import { SinnerEnum } from "../Enums/Index";
import { EquipEgo, EquipIdentity } from "./EquipHandler";
import { ToggleDeployment } from "./UIHandler";

export function ProcessURL() {
    let params = new URLSearchParams(window.location.search);
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
        catch (e) {
            console.log("Error processing url params:");
            console.log(e);
        }
    }
}

export function UpdateLink() {
    let urlParams = "/?v1=";
    globalThis.TeamData.filter(sinner => (sinner.EquipedIdentity.Id % 100 != 1) || sinner.EquipedEgos.length != 1 || (sinner.EquipedEgos[0]!.Id % 100 != 1) || sinner.DeploymentSlot)
        .forEach(sinner => {
            urlParams += "s" + sinner.SinnerEnum;
            if (sinner.DeploymentSlot){
                urlParams += "o" + sinner.DeploymentSlot;
            }
            urlParams += "i" + sinner.EquipedIdentity.Id % 100;
            urlParams += "D";
            urlParams += "e";
            sinner.EquipedEgos.filter(ego => (ego.Id % 100 != 1))
                .forEach(ego => {
                    urlParams += ego.Id % 100;
                    urlParams += "D";
                });
        });

    globalThis.TeamLink = (window.location.origin + urlParams);
}