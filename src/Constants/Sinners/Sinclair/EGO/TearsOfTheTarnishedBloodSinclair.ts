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

const TearsOfTheTarnishedBloodSinclairAwakening: Skill = {
    Name: "Tears of the Tarnished Blood",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 8,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 5,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 6 [Flower-burying Pin] on self (max 3)<br>" +
            "[Combat Start] Gain [Denial]<br>" +
            "[Before Attack] Gain [Flower-burying Pin] equal to Gluttony Reson. (max 5)<br>" +
            "[Before Attack] Take ([Flower-burying Pin] on self x 2) HP damage<br>" +
            "- Does not get Staggered if this lowers this unit's HP below a Stagger Threshold; instead, remove the Stagger Threshold higher than this unit's current HP<br>" +
            "[After Attack] For 3 turns, lose 10 SP at Turn End<br>"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Rupture] Count", 1),
        new SkillDescriptionPart("Deal +1% damage for every 2% missing HP on self (max 40%)<br>" +
            "[On Hit] Inflict 3 [Rupture]<br>" +
            "[On Hit] If this unit has 30% or less HP, or is at 20 [Flower-burying Pin] Stack, Reuse this Coin (once per Skill)<br>" +
            "[Reuse - On Hit] Consume all HP on self to deal +20% damage with this Coin (once per Turn)<br>", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Sinclair/EGO/TearsOfTheTarnishedBlood/21008awakenprofile.png'
}

const TearsOfTheTarnishedBloodSinclairCorrosion: Skill = {
    Name: "Tears of the Tarnished Blood",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 20,
    Coins: 2,
    CoinValue: -8,
    AttackWeight: 7,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>" +
            "Targets randomly<br>" +
            "Base Power +1 for every 10 [Flower-burying Pin] on self (max 2)<br>" +
            "[Combat Start] Gain [Denial]<br>" +
            "[Before Attack] Gain (Gluttony Reson. + 4) [Flower-burying Pin] (max 10)<br>" +
            "[Before Attack] Take ([Flower-burying Pin] x 2) HP damage<br>" +
            "- Does not get Staggered if this lowers this unit's HP below a Stagger Threshold; instead, remove the Stagger Threshold higher than this unit's current HP<br>"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Rupture] Count<br>" +
            "[On Hit] Inflict 3 [Rupture]<br>", 1),
        new SkillDescriptionPart("Deal +1% damage for every 2% missing HP on self (max 40%)<br>" +
            "[On Hit] If this unit has 30% or less HP, or is at 20 [Flower-burying Pin] Stack, Reuse this Coin (once per Skill)<br>" +
            "[Reuse - On Hit] Consume all HP on self to deal +20% damage with this Coin (once per Turn)<br>", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Sinclair/EGO/TearsOfTheTarnishedBlood/21008erosionprofile.png'
}

export const TearsOfTheTarnishedBloodSinclair: Ego = {
    Id: 21008,
    Name: "Tears of the Tarnished Blood [汚血泣淚]",
    Sinner: SinnerEnum.Sinclair,
    RiskLevel: RiskLevelEnum.WAW,
    AwakeningSkill: TearsOfTheTarnishedBloodSinclairAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: TearsOfTheTarnishedBloodSinclairCorrosion,
    CorrosionSanityCost: 25,
    Passive: new Passive("Crying Tears", PassiveTypeEnum.Ego, "- Turn End: If this unit had a negative effect or lost its HP or SP, heal 5 SP.<br>" +
        "- If this unit or an ally is defeated, inflict 1 [Fragile] to all enemies next turn (once per turn)<br>"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 0.75 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 0.5 },
                { sin: SinEnum.Gloom, resistance: 0.5 },
                { sin: SinEnum.Pride, resistance: 2 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Lust, amount: 2 },
            { sin: SinEnum.Gluttony, amount: 6 },
            { sin: SinEnum.Pride, amount: 2 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/Sinclair/EGO/TearsOfTheTarnishedBlood/21008cg.png'
}