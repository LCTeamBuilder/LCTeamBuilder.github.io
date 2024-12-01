import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const YaSunyataTadRupamOutisCorrosion: Skill = {
    Name: "Ya Śūnyatā Tad Rūpam",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 25,
    Coins: 1,
    CoinValue: -8,
    AttackWeight: 2,
    SkillLevel: -2,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "[After Attack] Apply 1 [Attack Power Up] to 2 random other allies"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Lust Fragility]<br>"+
            "[On Hit] Inflict 2 [Fragile]<br>"+
            "[Tails Hit] Gain 2 [Fragile]", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Outis/EGO/YaSunyataTadRupam/21103awakenprofile.png"
}