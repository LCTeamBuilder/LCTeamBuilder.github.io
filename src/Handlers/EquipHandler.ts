import { Egos } from "../Consts/OtherConstants";
import { RiskLevelEnum } from "../Enums/RiskLevelEnum";
import { SinnerEnum } from "../Enums/SinnerEnum";
import { EgoBase } from "../Models/EgoBase";
import { IdentityBase } from "../Models/IdentityBase";
import { UpdateSinnerIdentityCard } from "./UIHandler";
import { UpdateLink } from "./URLHandler";

export function EquipId(identity: IdentityBase) : void{
    globalThis.TeamData.find(sinner => sinner.SinnerEnum == identity.Sinner)!.EquipedIdentity = identity;
    UpdateLink();
}

export function EquipEgo(newEgo: EgoBase) : void{
    let sinner = globalThis.TeamData.find(sinner => sinner.SinnerEnum == newEgo.Sinner)!
    if (sinner.EquipedEgos.find(ego => ego.Id == newEgo.Id)){
        UnequipEgo(newEgo.Sinner, newEgo.RiskLevel);
        if (newEgo.RiskLevel == RiskLevelEnum.ZAYIN){
            sinner.EquipedEgos.push(Egos.find(ego => ego.Sinner == sinner.SinnerEnum && (ego.Id % 100 == 1))!);
        }
    }
    else {
        UnequipEgo(newEgo.Sinner, newEgo.RiskLevel);
        sinner.EquipedEgos.push(newEgo);
    }
    UpdateLink();
    UpdateSinnerIdentityCard(newEgo.Sinner);
}

export function UnequipEgo(sinnerEnum: SinnerEnum, riskLevel: RiskLevelEnum) : void{
    let sinner = globalThis.TeamData.find(sinner => sinner.SinnerEnum == sinnerEnum)!
    sinner.EquipedEgos = sinner.EquipedEgos.filter(function(ego) {
        return ego.RiskLevel != riskLevel;
    });
}