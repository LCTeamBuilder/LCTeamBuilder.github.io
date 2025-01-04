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

const DimensionShredderHongLuAwakening: Skill = {
    Name: "Dimension Shredder",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 22,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 3,
    SkillLevel: 1,
    SkillDescription: 
        [new SkillDescriptionPart("Targets the rearmost unit (In regular encounters)<br>"+
            "[Before Attack] Gain +5 [Charge] Count, Gain 2 [Haste] next turn"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Fragile] and 4 [Dimensional Rift]", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/HongLu/EGO/DimensionShredder/20603awakenprofile.png"
}

const DimensionShredderHongLuCorrosion: Skill = {
    Name: "Dimension Shredder",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 24,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 3,
    SkillLevel: 5,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets the unit with the most HP<br>"+
            "[Before Attack] Gain 3 [Haste] next turn<br>"+
            "Spend 10 Charge to inflict +2 [Fragile] and [Dimensional Rift] with this skill"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Fragile] and 4 [Dimensional Rift]", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/HongLu/EGO/DimensionShredder/20603erosionprofile.png"
}

export const DimensionShredderHongLu: Ego = {
    Id: 20603,
    Name: "Dimension Shredder",
    Sinner: SinnerEnum.HongLu,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: DimensionShredderHongLuAwakening,
    AwakeningSanityCost: 25,
    CorrosionSkill: DimensionShredderHongLuCorrosion,
    CorrosionSanityCost: 30,
    Passive: new Passive("Entangled Phenomena Restoration", PassiveTypeEnum.Ego, "When hitting an enemy with negative status effects, this unit gains +1 [Charge] Count.<br>"+
        "(Max +4 per turn.)<br>When HP falls to 0 for the first time during battle, spend all [Charge] and heal in proportion to the amount spent. (Cannot heal over 25% Max HP.)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 0.75 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 0.5 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Gluttony, amount: 3 },
            { sin: SinEnum.Pride, amount: 3 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/HongLu/EGO/DimensionShredder/20603cg.png"
}