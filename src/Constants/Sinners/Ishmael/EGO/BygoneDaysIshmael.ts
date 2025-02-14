import {
    DamageTypeEnum,
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum,
    SkillTierEnum,
    SkillTypeEnum
} from '../../../../Enums/Index';
import { Ego, Passive, Skill, SkillDescriptionPart } from '../../../../Models/Index';

const BygoneDaysIshmaelAwakening: Skill = {
    Name: "Bygone Days",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 17,
    Coins: 1,
    CoinValue: +9,
    AttackWeight: 3,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] At 4+ highest Reson., gain +1 Atk Weight<br>"+
            "- If the said Reson. was a Gloom Reson., gain +1 Atk Weight<br>"+
            "[After Attack] Heal 2 allies with the lowest HP percentages by (10 + (sum of [Sinking] Potency and Count on the main target)/3)% HP (max 20%)<br>"+
            "- If the highest Reson. was a 4+ Gloom Reson., heal 10% more of the max HP"),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Sinking] Count<br>"+
            "[On Hit] Inflict 2 [Curse]<br>"+
            "[On Hit] At 4+ Gloom Reson., inflict 1 [Gloom Fragility]<br>"+
            "[On Hit] Inflict 2 [The Uninvited]", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Ishmael/EGO/BygoneDays/20807awakenprofile.png'
}

const BygoneDaysIshmaelCorrosion: Skill = {
    Name: "Bygone Days",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 28,
    Coins: 1,
    CoinValue: -10,
    AttackWeight: 3,
    SkillLevel: -3,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Prioritizes targets with the most [Sinking]<br>"+
            "[Before Attack] Lose HP by 10% of Max HP (does not get Staggered due to this effect)<br>"+
            "[After Attack] Heal 3 other allies with the lowest HP percentages by (10 + (sum of [Sinking] Potency and Count on the main target)/3)% HP (max 15%)<br>"+
            "- At 4+ highest Reson., heal 1 additional ally<br>"+
            "- If the said Reson. was a Gloom Reson., heal an additional 5% HP"),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Sinking] Count<br>"+
            "[On Hit] Inflict 2 [Curse]<br>"+
            "[On Hit] For every 3 Gloom Reson., inflict 1 [Gloom Fragility] (max 2)<br>"+
            "[On Hit] Inflict 2 [The Uninvited]<br>"+
            "[On Hit] Inflict 2 [Echoes of the Manor] next turn", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Ishmael/EGO/BygoneDays/20807erosionprofile.png'
}

export const BygoneDaysIshmael: Ego = {
    Id: 20807,
    Name: "Bygone Days",
    Sinner: SinnerEnum.Ishmael,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: BygoneDaysIshmaelAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: BygoneDaysIshmaelCorrosion,
    CorrosionSanityCost: 30,
    Passive: new Passive("Interloper Reception", PassiveTypeEnum.Ego, "If the target has [The Uninvited] or any of the Panic Type changing effects, Clash Power +1.<br>"+
        "On Hit against the said target, heal 1 ally with the least SP for 5 SP. (once per turn)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 2 },
                { sin: SinEnum.Gloom, resistance: 0.5 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Lust, amount: 2 },
            { sin: SinEnum.Sloth, amount: 1 },
            { sin: SinEnum.Gloom, amount: 3 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/Ishmael/EGO/BygoneDays/20807cg.png'
}