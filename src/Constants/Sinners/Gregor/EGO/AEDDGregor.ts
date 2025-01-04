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

const AEDDGregorAwakening: Skill = {
    Name: "AEDD",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 22,
    Coins: 1,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] Gain +10 [Charge] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 15 [Spark Discharge]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Gregor/EGO/AEDD/21204awakenprofile.png"
}

const AEDDGregorCorrosion: Skill = {
    Name: "AEDD",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 24,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 3,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Prioritizes units with [Charge]<br>"+
            "[Before Attack] Gain +10 [Charge] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 15 [Spark Discharge] and +7 [Charge] Count", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Gregor/EGO/AEDD/21204erosionprofile.png"
}

export const AEDDGregor: Ego = {
    Id: 21204,
    Name: "AEDD",
    Sinner: SinnerEnum.Gregor,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: AEDDGregorAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: AEDDGregorCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Alternating Discharge", PassiveTypeEnum.Ego, "On hit with a Heads coin, spend 2 [Charge] Count to give +1 [Charge] Count to the Charge-possessing ally with the lowest [Charge] Count"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 0.5 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 0.75 }],
    Cost: [{ sin: SinEnum.Gloom, amount: 3 },
            { sin: SinEnum.Envy, amount: 3 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Gregor/EGO/AEDD/21204cg.png"
}