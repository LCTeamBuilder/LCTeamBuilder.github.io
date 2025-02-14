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

const YearningMircallaDonQuixoteAwakening: Skill = {
    Name: "Yearning Mircalla",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 3,
    Coins: 4,
    CoinValue: +3,
    AttackWeight: 7,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("This unit's HP does not drop below 1 while using this Skill.<br>"+
            "Coin Power +1 for every 10 [Bleed] on the target (max 2)<br>"+
            "Clash Power +1 for every 100 [Bloodfeast Consumed] by this unit (max 5)<br>"+
            "[Before Attack] At less than 100 [Bloodfeast], inflict 1 [Bleed] with every Hit<br>"+
            "[After Attack] For 3 turns, lose 10 SP at Turn End."),
        new SkillDescriptionPart("[Unbreakable Coin]<br>"+
            "Deal +0.1% more damage for every [Bloodfeast Consumed (shared)] (max 10%)", 1),
        new SkillDescriptionPart("[Unbreakable Coin]<br>"+
            "At 100+ [Bloodfeast Consumed (shared)]: deal +0.1% more damage for every value (max 20%)", 2),
        new SkillDescriptionPart("[Unbreakable Coin]<br>"+
            "At 200+ [Bloodfeast Consumed (shared)]: deal +0.1% more damage for every value (max 30%)", 3),
        new SkillDescriptionPart("[Unbreakable Coin]<br>"+
            "At 300+ [Bloodfeast Consumed (shared)]: deal +0.1% more damage for every value (max 50%)<br>"+
            "[Hit after Clash Win] Inflict [Polydipsic Rose] based on the highest Lust A-Reson. (max 4)", 4)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/DonQuixote/EGO/YearningMircalla/20307awakenprofile.png'
}

const YearningMircallaDonQuixoteCorrosion: Skill = {
    Name: "Yearning Mircalla",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 30,
    Coins: 2,
    CoinValue: -10,
    AttackWeight: 7,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "This unit's HP does not drop below 1 while using this Skill.<br>"+
            "If the target has 10+ [Bleed], Coin Power -1<br>"+
            "At 200+ [Bloodfeast Consumed] by this unit, Coin Power -1<br>"+
            "[Before Attack] At less than 150 [Bloodfeast], inflict 1 [Bleed] with every hit<br>"+
            "[Before Attack] Gain 20 [Bleed], and activate [Bleed] on self immediately. Lose 2 [Bleed] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed] for every 50 [Bloodfeast Consumed (shared)] (max 10)<br>"+
            "[On Hit] At 100- [Bloodfeast], inflict 10 [Bleed]", 1),
        new SkillDescriptionPart("Deal +20% more damage for every 100 [Bloodfeast Consumed (shared)] (max 100%)<br>"+
            "[Hit after Clash Win] Inflict [Polydipsic Rose] based on the highest Lust A-Reson. (max 5)<br>"+
            "[Hit after Clash Win] Heal by 50% of the HP damage dealt (max 10)", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/DonQuixote/EGO/YearningMircalla/20307erosionprofile.png'
}

export const YearningMircallaDonQuixote: Ego = {
    Id: 20307,
    Name: "Yearning Mircalla",
    Sinner: SinnerEnum.DonQuixote,
    RiskLevel: RiskLevelEnum.WAW,
    AwakeningSkill: YearningMircallaDonQuixoteAwakening,
    AwakeningSanityCost: 15,
    CorrosionSkill: YearningMircallaDonQuixoteCorrosion,
    CorrosionSanityCost: 40,
    Passive: new Passive("Spiring Crimson Blossom", PassiveTypeEnum.Ego, "Every time 10 [Bleed] damage occurs, heal 1 SP on self (10 per turn)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 0.5 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 0.5 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 0.75 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Lust, amount: 5 },
            { sin: SinEnum.Gluttony, amount: 3 },
            { sin: SinEnum.Pride, amount: 2 },
            { sin: SinEnum.Envy, amount: 2 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/DonQuixote/EGO/YearningMircalla/20307cg.png'
}