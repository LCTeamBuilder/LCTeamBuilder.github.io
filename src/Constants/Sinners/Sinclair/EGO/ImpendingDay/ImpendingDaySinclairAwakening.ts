import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ImpendingDaySinclairAwakening: Skill = {
    Name: "Impending Day",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 28,
    Coins: 1,
    CoinValue: -8,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("If target's HP is below 25%, +40% Damage"),
        new SkillDescriptionPart("[On Kill] Gain 1 [Attack Power Up] next turn<br>"+
            "[On Kill] Heal all allies for 15% of their Max HP", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Sinclair/EGO/ImpendingDay/21002awakenprofile.png"
}