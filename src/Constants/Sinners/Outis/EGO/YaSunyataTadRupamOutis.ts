import {
    DamageTypeEnum,
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../Enums/Index";
import { Ego, Passive, Skill, SkillDescriptionPart } from "../../../../Models/Index";

const YaSunyataTadRupamOutisAwakening: Skill = {
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

const YaSunyataTadRupamOutisCorrosion: Skill = {
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

export const YaSunyataTadRupamOutis: Ego = {
    Id: 21103,
    Name: "Ya Śūnyatā Tad Rūpam",
    Sinner: SinnerEnum.Outis,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: YaSunyataTadRupamOutisAwakening,
    AwakeningSanityCost: 15,
    CorrosionSkill: YaSunyataTadRupamOutisCorrosion,
    CorrosionSanityCost: 15,
    Passive: new Passive("Emptying", PassiveTypeEnum.Ego, "At the start of the turn, gain 1 [Lust DMG Up].<br>"+
        "Gain 1 more when below 0 SP."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 0.5 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Lust, amount: 2 },
            { sin: SinEnum.Sloth, amount: 2 },
            { sin: SinEnum.Pride, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Outis/EGO/YaSunyataTadRupam/21103cg.png"
}