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

const ChristmasNightmareGregorAwakening: Skill = {
    Name: "Christmas Nightmare",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 12,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 5,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("If the target has less than 0 SP, deal +1% more damage for every SP value below 0 (max 45%)<br>"+
            "[After Attack] At max HP, heal 15 SP at Turn End and gain 1 [Attack Power Up] next turn"),
        new SkillDescriptionPart(" [On Hit] Inflict 5 [Tremor]<br>"+
            "[On Hit] Trigger [Tremor Burst]; then, reduce target's [Tremor] Count by 1", 1),
        new SkillDescriptionPart("[On Hit] Heal (3 + highest Reson.)% of the missing HP on self (max 30% per Skill)<br>"+
            "[On Hit] Inflict 4 [Sinking]<br>"+
            "[On Hit] If the target is in Staggered, Low Morale, or Panic states, inflict 1 [Attack Power Down] and Fragility against the Affinity of the highest Reson. next turn", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Gregor/EGO/ChristmasNightmare/21208awakenprofile.png'
}

const ChristmasNightmareGregorCorrosion: Skill = {
    Name: "Christmas Nightmare",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 22,
    Coins: 2,
    CoinValue: -6,
    AttackWeight: 5,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly<br>"+
            "If the target has less than 0 SP, deal more damage for every SP value below 0 (max 45%)<br>"+
            "[Before Attack] Heal 10 HP on self<br>"+
            "[After Attack] At max HP, heal 20 SP at Turn End and gain 1 [Attack Power Up] next turn"),
        new SkillDescriptionPart("[On Hit] Inflict 5 [Tremor]<br>"+
            "[On Hit] Trigger [Tremor Burst]; then, reduce target's [Tremor] Count by 1", 1),
        new SkillDescriptionPart("[On Hit] Heal (3 + highest Reson.)% of the missing HP on self (max 30% per Skill)<br>"+
            "[On Hit] Inflict 4 [Sinking]<br>"+
            "[On Hit] If the target is in Staggered, Low Morale, or Panic states, inflict 1 [Attack Power Down] and 2 [Fragility] against the Affinity of the highest Reson. next turn", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Gregor/EGO/ChristmasNightmare/21208erosionprofile.png'
}

export const ChristmasNightmareGregor: Ego = {
    Id: 21208,
    Name: "Christmas Nightmare",
    Sinner: SinnerEnum.Gregor,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: ChristmasNightmareGregorAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: ChristmasNightmareGregorCorrosion,
    CorrosionSanityCost: 30,
    Passive: new Passive("Insomniac Night", PassiveTypeEnum.Ego, "Combat Start: against all enemies, inflict 1 Offense Level Down.pngOffense Level Down or 1 Defense Level Down.pngDefense Level Down to all enemies (# of enemies in Staggered, Low Morale, or Panic states) times. (2 times per turn)<br>"+
        "- Effect does not stack with E.G.O Gifts with the same effect."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 0.5 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 0.75 },
                { sin: SinEnum.Pride, resistance: 2 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Sloth, amount: 2 },
            { sin: SinEnum.Gluttony, amount: 2 },
            { sin: SinEnum.Gloom, amount: 2 },
            { sin: SinEnum.Pride, amount: 2 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/Gregor/EGO/ChristmasNightmare/21208cg.png'
}