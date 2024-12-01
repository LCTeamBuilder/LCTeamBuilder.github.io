import {
    DefenseTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const CinqAssocsouthSection4OutisDefense: Skill = {
    Name: "Retraite",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 5,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("If this unit's Speed is higher than the target's, gain Coin Power based on Speed difference (Coin Power +1 for every Speed difference, max 3)<br>"+
            "[On Evade] Gain 1 [Poise] (Max 10)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Evade,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/CinqAssociationSouthSection4/RetraiteUT4.png"
}