import { Egos } from "../Consts/OtherConstants";
import { OverlayEnum } from "../Enums/OverlayEnum";
import { RiskLevelEnum } from "../Enums/RiskLevelEnum";
import { SinnerEnum } from "../Enums/SinnerEnum";
import { EgoBase } from "../Models/EgoBase";
import { IdentityBase } from "../Models/IdentityBase";
import { UpdateSinnerIdentityCard, UpdateTeamSinDisplay } from "./UIHandler";
import { UpdateLink } from "./URLHandler";

export function EquipIdentity(identity: IdentityBase): void {
    let sinner = globalThis.TeamData.find(sinner => sinner.SinnerEnum == identity.Sinner)!
    for (let i = 0; i < 3; i++) {  //deduct sins generated by old identity from team total
        let skill = globalThis.TeamData.find(sinner => sinner.SinnerEnum == identity.Sinner)!.EquipedIdentity.Skills[i]!;
        globalThis.TeamSins[skill.Affinity].Generated -= (3 - i);
        if (sinner.DeploymentSlot){
            globalThis.DeployedTeamSins[skill.Affinity].Generated -= (3 - i);
        }
    }
    globalThis.TeamData.find(sinner => sinner.SinnerEnum == identity.Sinner)!.EquipedIdentity = identity;
    for (let i = 0; i < 3; i++) {  //add new sins
        globalThis.TeamSins[identity.Skills[i]!.Affinity].Generated += (3 - i);
        if (sinner.DeploymentSlot){
            globalThis.DeployedTeamSins[identity.Skills[i]!.Affinity].Generated += (3 - i);
        }
    }
    UpdateLink();
    UpdateTeamSinDisplay(globalThis.TeamOverlay == OverlayEnum.Deployment);
}

export function EquipEgo(newEgo: EgoBase): void {
    let sinner = globalThis.TeamData.find(sinner => sinner.SinnerEnum == newEgo.Sinner)!
    if (sinner.EquipedEgos.find(ego => ego.Id == newEgo.Id)) {
        UnequipEgo(newEgo.Sinner, newEgo.RiskLevel);
        if (newEgo.RiskLevel == RiskLevelEnum.ZAYIN) {
            let baseEgo = Egos.find(ego => ego.Sinner == sinner.SinnerEnum && (ego.Id % 100 == 1))!;
            sinner.EquipedEgos.push(baseEgo);
            baseEgo.Cost.forEach((cost) => {
                globalThis.TeamSins[cost.sin].Used += cost.amount;
                if (sinner.DeploymentSlot){
                    globalThis.DeployedTeamSins[cost.sin].Used += cost.amount;
                }
            });
        }
    }
    else {
        UnequipEgo(newEgo.Sinner, newEgo.RiskLevel);
        sinner.EquipedEgos.push(newEgo);
        newEgo.Cost.forEach((cost) => {
            globalThis.TeamSins[cost.sin].Used += cost.amount;
            if (sinner.DeploymentSlot){
                globalThis.DeployedTeamSins[cost.sin].Used += cost.amount;
            }
        });
    }
    UpdateLink();
    UpdateSinnerIdentityCard(newEgo.Sinner);
    UpdateTeamSinDisplay(globalThis.TeamOverlay == OverlayEnum.Deployment);
}

export function UnequipEgo(sinnerEnum: SinnerEnum, riskLevel: RiskLevelEnum): void {
    let sinner = globalThis.TeamData.find(sinner => sinner.SinnerEnum == sinnerEnum)!
    sinner.EquipedEgos.find((ego) => {
        return ego.RiskLevel == riskLevel;
    })?.Cost.forEach((cost) => {
        globalThis.TeamSins[cost.sin].Used -= cost.amount;
        if (sinner.DeploymentSlot){
            globalThis.DeployedTeamSins[cost.sin].Used -= cost.amount;
        }
    });
    sinner.EquipedEgos = sinner.EquipedEgos.filter(function (ego) {
        return ego.RiskLevel != riskLevel;
    });
}