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

const ChristmasNightmareIshmaelAwakening: Skill = {
    Name: "Christmas Nightmare",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 12,
    Coins: 2,
    CoinValue: +5,
    AttackWeight: 3,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("If the target has less than 0 SP, deal +1% more damage for every SP value below 0 (max 45%)<br>"+
            "[Before Attack] Gain (highest Reson. + 5) [Tremor] Count (max 10)<br>"+
            "[After Attack] If there are any targets in Staggered, Low Morale, or Panic states, heal 10 SP"), 
        new SkillDescriptionPart("[On Hit] Inflict +5 [Tremor] Count<br>"+
            "[On Hit] If the target isn't in Staggered, Low Morale, or Panic states, inflict 5 [Sinking]<br>"+
            "[On Hit] If the target isn't in Staggered, Low Morale, or Panic states, trigger [Tremor Burst] twice; then, reduce the target's [Tremor] Count by 2", 1), 
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]; then, reduce target's [Tremor] Count by 1", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Ishmael/EGO/ChristmasNightmare/20808awakenprofile.png'
}

const ChristmasNightmareIshmaelCorrosion: Skill = {
    Name: "Christmas Nightmare",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 18,
    Coins: 3,
    CoinValue: -5,
    AttackWeight: 5,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "If the main target is in Staggered, Low Morale, or Panic states, Base Power +2<br>"+
            "[Before Attack] Gain (highest Reson. + 5) [Tremor] Count (max 10)<br>"+
            "[Before Attack] Heal 10 HP<br>"+
            "[After Attack] Heal 5 SP for every enemy in Staggered, Low Morale, or Panic states"),
        new SkillDescriptionPart("[On Hit] Inflict +5 [Tremor] Count<br>"+
            "[On Hit] If the target isn't in Staggered, Low Morale, or Panic states, inflict 5 [Sinking] and +2 [Sinking] Count", 1),
        new SkillDescriptionPart("[On Hit] If the target isn't in Staggered, Low Morale, or Panic states, trigger [Tremor Burst]; then, reduce the target's [Tremor] Count by 1<br>"+
            "[On Hit] Trigger [Tremor Burst]; then, reduce target's [Tremor] Count by 1", 2),
        new SkillDescriptionPart("[On Hit] If the target isn't in Staggered, Low Morale, or Panic states, trigger [Tremor Burst]; then, reduce the target's [Tremor] Count by 1<br>"+
            "[On Hit] Trigger [Tremor Burst]; then, reduce target's [Tremor] Count by 1", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Ishmael/EGO/ChristmasNightmare/20808erosionprofile.png'
}

export const ChristmasNightmareIshmael: Ego = {
    Id: 20808,
    Name: "Christmas Nightmare",
    Sinner: SinnerEnum.Ishmael,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: ChristmasNightmareIshmaelAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: ChristmasNightmareIshmaelCorrosion,
    CorrosionSanityCost: 30,
    Passive: new Passive("A Gaze in the Shadows", PassiveTypeEnum.Ego, "Allies gain +1 more [Tremor] Count from Skills or Coin effects (2 times per turn)<br>"+
        "- If the ally's target is in Staggered, Low Morale, or Panic states, gain +2 more instead<br>"+
        "- Effect does not stack with E.G.O Gifts of an identical effect."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 0.5 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 0.75 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Sloth, amount: 4 },
            { sin: SinEnum.Gluttony, amount: 1 },
            { sin: SinEnum.Pride, amount: 2 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/Ishmael/EGO/ChristmasNightmare/20808cg.png'
}