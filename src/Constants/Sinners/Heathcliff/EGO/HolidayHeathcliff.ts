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

const HolidayHeathcliffAwakening: Skill = {
    Name: "Holiday",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 17,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 2,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Randomly select one of the following effects: [Burn], [Bleed], [Tremor], [Rupture], or [Sinking]. Then, inflict 1 Potency of the selected effect next turn. Repeat the above process (2 + (Highest Glut. A-Reson.)) times. (7 times max)<br>"+
            "[On Kill] Randomly select one of the following effects: 2 [Poise] Count, 2 [Charge] Count, 2 [Haste], 2 [Offense Level Up], or 2 [Defense Power Up]. Then, apply the selected effect to 2 random allies next turn", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Heathcliff/EGO/Holiday/20705awakenprofile.png"
}

const HolidayHeathcliffCorrosion: Skill = {
    Name: "Holiday",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 25,
    Coins: 1,
    CoinValue: -10,
    AttackWeight: 2,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate] Targets the unit with the Most SP<br>"+
            "If the main target's SP is higher than 15, +1 Atk Weight<br>"+
            "[Before Attack] Target loses 10 SP"),
        new SkillDescriptionPart("[On Hit] Randomly select one of the following effects: [Burn], [Bleed], [Tremor], [Rupture], or [Sinking]. Then, inflict 1 Potency of the selected effect next turn. Repeat the above process (2 + (Highest Glut. A-Reson.)) times. (7 times max)", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Heathcliff/EGO/Holiday/20705erosionprofile.png"
}

export const HolidayHeathcliff: Ego = {
    Id: 20705,
    Name: "Holiday",
    Sinner: SinnerEnum.Heathcliff,
    RiskLevel: RiskLevelEnum.ZAYIN,
    AwakeningSkill: HolidayHeathcliffAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: HolidayHeathcliffCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Infinite Hatred", PassiveTypeEnum.Ego, "When this unit has a status effect or a negative effect, and if the main target or the attacker has a positive effect:<br>"+
        "- Inflict +1 more [Burn], [Bleed], [Tremor], [Rupture], and [Sinking] Potency to self and enemies with Skill effects or Coin effects<br>"+
        "- Gain +1 more [Poise] and [Charge] Count with Skill effects or Coin effects"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 0.75 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Gluttony, amount: 3 },
            { sin: SinEnum.Envy, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Heathcliff/EGO/Holiday/20705cg.png"
}