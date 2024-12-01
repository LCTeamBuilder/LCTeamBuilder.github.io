import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const BygoneDaysGregorAwakening: Skill = {
    Name: "Bygone Days",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 20,
    Coins: 1,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: -3,
    SkillDescription: 
        [new SkillDescriptionPart("[After Attack] Heal 15 SP to self and 2 other allies with the least SP<br>"+
            "- If the target survives this attack, consume 3 [Sinking] Count on target, then heal additional SP(to self and affected allies) equal to [Sinking] Potency on target (Max SP heal: 20)<br>"+
            "- If the target is defeated, inflict 3 [Sinking] and 1 [Curse] on 3 random enemies (For Focused Encounters, random Parts)")],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Gregor/EGO/BygoneDays/21206awakenprofile.png"
}