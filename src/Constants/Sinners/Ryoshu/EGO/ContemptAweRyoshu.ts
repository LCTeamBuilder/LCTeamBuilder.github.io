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

const ContemptAweRyoshuAwakening: Skill = {
    Name: "Contempt, Awe",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 10,
    Coins: 2,
    CoinValue: +7,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] Gain (highest Reson.) +1 Atk Weight (Max. 6)<br>"+
            "[Before Attack] Gain (highest Reson. + 1) [Gaze of Contempt] this turn and next turn (max 7)<br>"+
            "[After Attack] If this Skill was a part of a Lust Reson., gain 1 E.G.O resource in Affinities corresponding to each of this unit's Attack Skills<br>"+
            "[After Attack] For 2 turns, lose 10 SP at Turn End"),
        new SkillDescriptionPart("[After Attack] Evenly inflict 15 [Bleed] between all targets", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Ryoshu/EGO/ContemptAwe/20407awakenprofile.png"
}

const ContemptAweRyoshuCorrosion: Skill = {
    Name: "Contempt, Awe",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 44,
    Coins: 1,
    CoinValue: -20,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly<br>"+
            "[Before Attack] Gain 7 [Gaze of Contempt]<br>"+
            "[After Attack] If this Skill was part of a Lust Reson., gain 1 E.G.O resource in Affinities corresponding to each of this unit's Attack Skills"),
        new SkillDescriptionPart("[On Hit] If the target has [Bleed], deal +(the sum of [Bleed] Potency and Count)% more damage (max 60%)<br>"+
            "[On Hit] Inflict (10 + (highest Reson. x 2.5)) [Bleed] (max 25, rounded down)<br>"+
            "[On Hit] Inflict +5 [Bleed] Count", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Ryoshu/EGO/ContemptAwe/20407erosionprofile.png"
}

export const ContemptAweRyoshu: Ego = {
    Id: 20407,
    Name: "Contempt, Awe",
    Sinner: SinnerEnum.Ryoshu,
    RiskLevel: RiskLevelEnum.WAW,
    AwakeningSkill: ContemptAweRyoshuAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: ContemptAweRyoshuCorrosion,
    CorrosionSanityCost: 40,
    Passive: new Passive("Mark of the Gaze", PassiveTypeEnum.Ego, "Whenever this unit uses a base Attack Skill against an enemy, gain 1 additional E.G.O resource for a random, least-owned Affinity that doesn't correspond to the Affinity of the Attack Skill used"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 0.5 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 0.5 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 0.75 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 3 },
            { sin: SinEnum.Lust, amount: 4 },
            { sin: SinEnum.Pride, amount: 4 },
            { sin: SinEnum.Envy, amount: 3 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Ryoshu/EGO/ContemptAwe/20407cg.png"
}