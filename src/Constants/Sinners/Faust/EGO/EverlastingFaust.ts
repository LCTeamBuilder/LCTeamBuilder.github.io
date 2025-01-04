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

const EverlastingFaustAwakening: Skill = {
    Name: "Everlasting",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("If the target's Speed is slower than this unit's, deal +(5 x (Speed difference))% more damage (max 50%)<br>"+
            "[Before Attack] At 3+ highest Reson., inflict [Tremor] Potency by (2 x (highest Reson.)) (max 10)<br>"+
            "[Before Attack] If the highest Reson. was a Sloth A-Reson., inflict [Tremor] Count by [Tremor] Potency inflicted (max 10)<br>"+
            "[After Attack] For 3 turns, lose 10 SP at Turn End"),
        new SkillDescriptionPart("[On Hit] Inflict 10 [Tremor] and +10 [Tremor] Count<br>"+
            "[On Hit] Trigger [Amplitude Entanglement] into [Tremor - Everlasting]<br>"+
            "[On Hit] Trigger [Tremor Burst], then, reduce target's [Tremor] Count by 1", 1),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst], then, reduce target's [Tremor] Count by 1", 2),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst], then, reduce target's [Tremor] Count by 1", 3),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst], then, reduce target's [Tremor] Count by 1<br>"+
            "[On Hit] Reduce target's Max Speed by half next turn", 4)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Faust/EGO/Everlasting/20206awakenprofile.png"
}

const EverlastingFaustCorrosion: Skill = {
    Name: "Everlasting",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 36,
    Coins: 1,
    CoinValue: -12,
    AttackWeight: 3,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "If the main target's Speed is slower than this unit's, deal +(2.5 x (Speed difference))% more damage (max 20%)<br>"+
            "[Before Attack] At 3+ highest Reson., inflict [Tremor] Potency by highest Reson. (max 5)<br>"+
            "[Before Attack] If the highest Reson. was a Sloth A-Reson., inflict [Tremor] Count by [Tremor] Potency inflicted (max 5)"),
        new SkillDescriptionPart("[On Hit] Inflict 5 [Tremor] and +5 [Tremor] Count<br>"+
            "[On Hit] Trigger [Amplitude Entanglement] into [Tremor - Everlasting]<br>"+
            "[On Hit] Trigger [Tremor Burst], then, reduce target's [Tremor] Count by 1<br>"+
            "[On Hit] Trigger [Tremor Burst], then, reduce target's [Tremor] Count by 1<br>"+
            "[On Hit] Trigger [Tremor Burst], then, reduce target's [Tremor] Count by 1<br>"+
            "[On Hit] Reduce the target's Max Speed by half next turn", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Faust/EGO/Everlasting/20206erosionprofile.png"
}

export const EverlastingFaust: Ego = {
    Id: 20206,
    Name: "Everlasting",
    Sinner: SinnerEnum.Faust,
    RiskLevel: RiskLevelEnum.WAW,
    AwakeningSkill: EverlastingFaustAwakening,
    AwakeningSanityCost: 10,
    CorrosionSkill: EverlastingFaustCorrosion,
    CorrosionSanityCost: 40,
    Passive: new Passive("Running Time", PassiveTypeEnum.Ego, "When this unit uses a Skill to trigger [Tremor Burst] on an enemy, gain 1 [Haste] next turn. (4 times per turn, including E.G.O Skills)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 0.75 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 0.5 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 0.5 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Lust, amount: 2 },
            { sin: SinEnum.Sloth, amount: 4 },
            { sin: SinEnum.Gloom, amount: 2 },
            { sin: SinEnum.Pride, amount: 3 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Faust/EGO/Everlasting/20206cg.png"
}