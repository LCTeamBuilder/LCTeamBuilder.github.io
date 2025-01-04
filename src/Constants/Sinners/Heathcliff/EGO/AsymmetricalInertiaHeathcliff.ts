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

const AsymmetricalInertiaHeathcliffAwakening: Skill = {
    Name: "Asymmetrical Inertia",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 8,
    Coins: 2,
    CoinValue: +8,
    AttackWeight: 3,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] Gain (4 + highest Reson.) [Tremor] Count (max 8, 20 per turn)<br>"+
            "- If the said Reson. was a Sloth Reson., trigger [Amplitude Conversion] on [Tremor] on self into [Tremor - Clockwinding]"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Tremor] Count<br>"+
            "[Heads Hit] Inflict 5 [Tremor]<br>"+
            "[Tails Hit] Inflict +3 [Tremor] Count", 1),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst], then, reduce target's [Tremor] Count by 1 <br>"+
            "- When triggering [Tremor Burst], inflict 1 [Sloth Fragility] this turn<br>"+
            "- If the highest Reson. was a 3+ Sloth Reson., inflict 1 [Sloth Fragility] next turn as well", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Heathcliff/EGO/AsymmetricalInertia/20708awakenprofile.png"
}

const AsymmetricalInertiaHeathcliffCorrosion: Skill = {
    Name: "Asymmetrical Inertia",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 28,
    Coins: 2,
    CoinValue: -8,
    AttackWeight: 3,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "[Before Attack] Gain (4 + highest Reson.) [Tremor] Count (max 10, 20 per turn) <br>"+
            "- If the said Reson. was a Sloth Reson., trigger [Amplitude Conversion] on [Tremor] on self into [Tremor - Clockwinding]"),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Tremor] Count <br>"+
            "[Heads Hit] Inflict 6 [Tremor]<br>"+
            "[Tails Hit] Inflict +4 [Tremor] Count", 1),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst], then, reduce target's [Tremor] Count by 1 <br>"+
            "[On Hit] Trigger [Tremor Burst], then, reduce target's [Tremor] Count by 1<br>"+
            "- When triggering [Tremor Burst], inflict 2 [Sloth Fragility] this turn<br>"+
            "- If the highest Reson. was a 3+ Sloth Reson., inflict 2 [Sloth Fragility] next turn as well", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Heathcliff/EGO/AsymmetricalInertia/20708erosionprofile.png"
}

export const AsymmetricalInertiaHeathcliff: Ego = {
    Id: 20708,
    Name: "Asymmetrical Inertia",
    Sinner: SinnerEnum.Heathcliff,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: AsymmetricalInertiaHeathcliffAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: AsymmetricalInertiaHeathcliffCorrosion,
    CorrosionSanityCost: 30,
    Passive: new Passive("Broken Bell", PassiveTypeEnum.Ego, "Inflict [Fragile] this turn on enemies who were hit by [Tremor Burst] from Skill, Coin, or Passive effects.<br>"+
        "- Does not stack with E.G.O Gifts that inflict [Fragile] upon triggering [Tremor Burst]. (If the said E.G.O Gifts have been enhanced, subtract this effect's value from the final value before inflicting it.)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                    { sin: SinEnum.Lust, resistance: 1 },
                    { sin: SinEnum.Sloth, resistance: 0.5 },
                    { sin: SinEnum.Gluttony, resistance: 1 },
                    { sin: SinEnum.Gloom, resistance: 2 },
                    { sin: SinEnum.Pride, resistance: 2 },
                    { sin: SinEnum.Envy, resistance: 0.75 }],
    Cost: [{ sin: SinEnum.Sloth, amount: 2 },
            { sin: SinEnum.Gloom, amount: 1 },
            { sin: SinEnum.Pride, amount: 2 },
            { sin: SinEnum.Envy, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Heathcliff/EGO/AsymmetricalInertia/20708cg.png"
}