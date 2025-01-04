import {
    DamageTypeEnum,
    DefenseTypeEnum,
    FactionEnum,
    KeywordEnum,
    PassiveCostTypeEnum,
    PassiveTypeEnum,
    RarityEnum,
    SinEnum,
    SinnerEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../Enums/Index";
import { Identity, Passive, Skill, SkillDescriptionPart } from "../../../../Models/Index";

const TheRingPointillistStudentOutisDefense: Skill = {
    Name: "Guard",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 7,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] If the target has 10+ [Bleed], Coin Power +7")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/TheRingPointillistStudent/GuardUT4.png"
}

const TheRingPointillistStudentOutisSkill1: Skill = {
    Name: "Dotting",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("If the target has 6+ [Bleed], Clash Power +1<br>"+
            "If the target has 10+ [Bleed], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/TheRingPointillistStudent/Dotting.png"
}

const TheRingPointillistStudentOutisSkill2: Skill = {
    Name: "Sanguine Painting",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Wrath,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("If the target has 6+ [Bleed], +2 Clash Power"),
        new SkillDescriptionPart("[On Hit] 40% chance to Reuse Coin. +20% more chance to Reuse Coin for every type of negative effect on the target (2 times max per Skill)<br>"+
            "[On Hit] Inflict +1 [Bleed] Count<br>"+
            "When Reusing Coin with this unit's Coin effects, inflict +1 more [Bleed] Count", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/TheRingPointillistStudent/SanguinePainting.png"
}

const TheRingPointillistStudentOutisSkill3: Skill = {
    Name: "Artwork Inspection",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("If the target has 6+ [Bleed], Coin Power +1<br>"+
            "Deal +12.5% more damage for every type of negative effect on the target (Max 50%)<br>"+
            "[On Use] Apply 1 [Haste] next turn to 2 allies adjacent to this unit on the Dashboard"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Bleed]<br>"+
            "[On Hit] Inflict 3 Potency for 1 of the following effects: [Burn], [Bleed], [Tremor], [Rupture], or [Sinking]. Effect selected at random.<br>"+
            "[After Attack] If the target is Staggered or defeated, apply 1 [Pierce DMG Up] next turn to 1 other ally with the highest SP.<br>"+
            "If the affected ally is a member of the Ring, apply 1 [Pierce Power Up] as well", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/TheRingPointillistStudent/ArtworkInspection.png"
}

export const TheRingPointillistStudentOutis: Identity = {
    Id: 11109,
    Name: "The Ring Pointillist Student",
    Sinner: SinnerEnum.Outis,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 69,
    HealthPerLevel: 2.26,
    SpeedMin: 3,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: -2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [TheRingPointillistStudentOutisSkill1, 
            TheRingPointillistStudentOutisSkill2, 
            TheRingPointillistStudentOutisSkill3, 
            TheRingPointillistStudentOutisDefense],
    Passives: [
        new Passive("Sanguine Pointillist",
            PassiveTypeEnum.Combat,
            "This Identity only counts as an 'Identity that inflicts [Bleed]'. This Identity's Skills that randomly inflict [Burn], [Bleed], [Tremor], [Rupture], and [Sinking] do not count as Skills that inflict each respective Keyword."),

        new Passive("Multitude of Dots",
            PassiveTypeEnum.Combat,
            "Combat Start: Inflict 2 Potency for 1 of the following effects on 2 enemies with the least types of negative effects: [Burn], [Bleed], [Tremor], [Rupture], or [Sinking]. Effect selected at random.<br>"+
            "(In Focused Encounters, Parts)",
            [{ sin: SinEnum.Lust, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Rough Sketch",
            PassiveTypeEnum.Support,
            "1 ally with the least SP heals 4 SP when defeating an enemy with [Bleed].<br>"+
            "Heal 1 additional SP for every type of negative effect on the target. (Max 4. 3 times per turn)",
            [{ sin: SinEnum.Lust, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Outis/Identities/TheRingPointillistStudent/11109gacksung.png",
    PortraitImageDir: "./assets/Sinners/Outis/Identities/TheRingPointillistStudent/11109gacksunginfo.png"
}