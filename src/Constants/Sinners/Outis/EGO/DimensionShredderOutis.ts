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

const DimensionShredderOutisAwakening: Skill = {
    Name: "Dimension Shredder",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 21,
    Coins: 1,
    CoinValue: +9,
    AttackWeight: 4,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] Gain +1 Atk Weight (Max. 2) for every Reson. above 2<br>"+
            "[Before Attack] At less than 10 [Charge] Count, consume 10% HP to gain +10 [Charge] Count (this damage does not reduce this unit's HP to 0, rounded down)<br>"+
            "[Before Attack] Consume up to 40 [Charge] Count and deal +1% more damage for every [Charge] Count consumed (max 30%)"),
        new SkillDescriptionPart("[On Hit] Inflict ([Charge] - 1) [Dimensional Rift] (max 2)<br>"+
            "[On Hit] Gain 1 [Haste] and 1 [Load] next turn for every [Charge] (max 3 of each per Skill)<br>"+
            "[On Kill] Gain +2 [Charge] Count", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Outis/EGO/DimensionShredder/21107awakenprofile.png'
}

const DimensionShredderOutisCorrosion: Skill = {
    Name: "Dimension Shredder",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 32,
    Coins: 1,
    CoinValue: -13,
    AttackWeight: 4,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "[Before Attack] Gain +1 Atk Weight (Max. 2) for every Reson. above 2<br>"+
            "[Before Attack] At less than maximum [Charge] Count, consume (missing [Charge] Count)% HP to gain up to max [Charge] Count (max [Charge] Count obtainable from this effect: 30. This damage does not reduce this unit's HP to 0, rounded down)<br>"+
            "[Before Attack] Consume up to 40 [Charge] Count and deal +2% more damage for every [Charge] Count consumed (max 60%)"),
        new SkillDescriptionPart("[On Hit] Inflict ([Charge] - 1) [Dimensional Rift] (max 4)<br>"+
            "[On Hit] Gain 1 [Haste] and 1 [Load] next turn for every [Charge] (max 3 of each per Skill)<br>"+
            "[On Kill] Gain +2 [Charge] Count", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Outis/EGO/DimensionShredder/21107erosionprofile.png'
}

export const DimensionShredderOutis: Ego = {
    Id: 21107,
    Name: "Dimension Shredder",
    Sinner: SinnerEnum.Outis,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: DimensionShredderOutisAwakening,
    AwakeningSanityCost: 25,
    CorrosionSkill: DimensionShredderOutisCorrosion,
    CorrosionSanityCost: 30,
    Passive: new Passive("Rambling Man", PassiveTypeEnum.Ego, "Max [Charge] Count +5<br>"+
        "Skills that consume [Charge] Count deal +2% more damage for every ([Charge] -1) (max 10%)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 0.75 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 0.5 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 1 },
            { sin: SinEnum.Gloom, amount: 3 },
            { sin: SinEnum.Pride, amount: 1 },
            { sin: SinEnum.Envy, amount: 4 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/Outis/EGO/DimensionShredder/21107cg.png'
}