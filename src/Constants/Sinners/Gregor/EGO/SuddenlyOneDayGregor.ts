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

const SuddenlyOneDayGregorAwakening: Skill = {
    Name: "Suddenly, One Day Gregor",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 14,
    Coins: 1,
    CoinValue: +14,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: [new SkillDescriptionPart("[On Hit] Inflict 10 of a random status, chosen from [Burn], [Bleed], [Tremor], [Rupture], and [Sinking]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Gregor/EGO/SuddenlyOneDay/21201awakenprofile.png"
}

export const SuddenlyOneDayGregor: Ego = {
    Id: 21201,
    Name: "Suddenly, One Day Gregor",
    Sinner: SinnerEnum.Gregor,
    RiskLevel: RiskLevelEnum.ZAYIN,
    AwakeningSkill: SuddenlyOneDayGregorAwakening,
    AwakeningSanityCost: 10,
    CorrosionSkill: undefined,
    CorrosionSanityCost: undefined,
    Passive: new Passive("Uncontrolled Morph", PassiveTypeEnum.Ego, "At the start of the turn, if below 25% HP, heal 15 HP and gain 2 [Protection]. When this effect activates, inflict 1 random other ally & 1 random enemy with +2 [SP Loss Efficiency]."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 0.75 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Lust, amount: 3},
            { sin: SinEnum.Gloom, amount: 1 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Gregor/EGO/SuddenlyOneDay/21201cg.png"
}