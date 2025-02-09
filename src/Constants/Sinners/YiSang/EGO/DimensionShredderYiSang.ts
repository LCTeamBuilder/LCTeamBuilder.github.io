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

const DimensionShredderYiSangAwakening: Skill = {
    Name: "Dimension Shredder",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 20,
    Coins: 1,
    CoinValue: +18,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Targets the rearmost unit (In regular encounters)<br>"+
            "[Before Attack] Spend [Charge] Count to deal more damage (Max 75%)"),
        new SkillDescriptionPart("[On Hit] If [Charge] Count was spent, inflict 5 [Dimensional Rift]<br>"+
            "[On Hit] Deal bonus Pride damage by (Target's [Rupture] x 10)% of the damage dealt, and reduce [Rupture] Count by 5 (Max 100%)", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/YiSang/EGO/DimensionShredder/20104awakenprofile.png'
}

const DimensionShredderYiSangCorrosion: Skill = {
    Name: "Dimension Shredder",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 42,
    Coins: 1,
    CoinValue: -24,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "[Before Attack] Spend [Charge] Count to deal more damage (Max 75%)"),
        new SkillDescriptionPart("[On Hit] If [Charge] Count was spent, inflict 5 [Dimensional Rift]<br>"+
            "[On Hit] Inflict 6 [Rupture]<br>"+
            "[On Hit] Deal bonus Pride damage by (Target's [Rupture] x 10)% of the damage dealt, and reduce [Rupture] Count by 5 (Max 100%)", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/YiSang/EGO/DimensionShredder/20104erosionprofile.png'
}

export const DimensionShredderYiSang: Ego = {
    Id: 20104,
    Name: "Dimension Shredder",
    Sinner: SinnerEnum.YiSang,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: DimensionShredderYiSangAwakening,
    AwakeningSanityCost: 25,
    CorrosionSkill: DimensionShredderYiSangCorrosion,
    CorrosionSanityCost: 30,
    Passive: new Passive("Rambling Man", PassiveTypeEnum.Ego, "At the start of the turn, if this unit took no damage last turn, gain +4 [Charge] Count. After successfully hitting an enemy with lower Speed, inflict +1 [Rupture] Count. (3 times per turn)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 0.75 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 0.5 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Sloth, amount: 3 },
            { sin: SinEnum.Gluttony, amount: 3 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/YiSang/EGO/DimensionShredder/20104cg.png'
}