import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const YaSunyataTadRupamOutisAwakening: Skill = {
    Name: "Ya Śūnyatā Tad Rūpam",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 19,
    Coins: 1,
    CoinValue: +4,
    AttackWeight: 2,
    SkillLevel: -2,
    SkillDescription: 
        [new SkillDescriptionPart("[After Attack] Heal 18 SP<br>"+
            "[After Attack] Apply 1 [Attack Power Up] to 2 random other allies"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Lust Fragility]", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Outis/EGO/YaSunyataTadRupam/21103awakenprofile.png"
}