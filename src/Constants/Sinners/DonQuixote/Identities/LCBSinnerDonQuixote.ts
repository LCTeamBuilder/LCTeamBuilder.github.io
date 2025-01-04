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

const LCBSinnerDonQuixoteSkill1: Skill = {
    Name: "Joust",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: [new SkillDescriptionPart("[Clash Win] Gain 2 [Haste] next turn")],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/LCBSinner/Joust.png", 
}

const LCBSinnerDonQuixoteSkill2: Skill = {
    Name: "Galloping Tilt",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +12,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[Clash Win] Gain 2 [Attack Power Up] next turn"),
        new SkillDescriptionPart("[Heads Hit] Inflict 2 [Bleed]", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/LCBSinner/GallopingTilt.png", 
}

const LCBSinnerDonQuixoteSkill3: Skill = {
    Name: "For Justice!",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 3,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription:
        [new SkillDescriptionPart("At 10+ Speed, Coin Power +2"),
        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Bleed]", 1),
        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Bleed]", 2),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Bleed] count", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/LCBSinner/ForJustice.png", 
}

export const LCBSinnerDonQuixoteDefense: Skill = {
    Name: "Evade",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 2,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: -2,
    SkillDescription: [],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Evade,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/LCBSinner/EvadeUT4.png", 
}

export const LCBSinnerDonQuixote: Identity = {
    Id: 10301,
    Name: "LCB Sinner",
    Sinner: SinnerEnum.DonQuixote,
    Rarity: RarityEnum.OneStar,
    BaseHealth: 66,
    HealthPerLevel: 2.28,
    SpeedMin: 3,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [LCBSinnerDonQuixoteSkill1, 
            LCBSinnerDonQuixoteSkill2, 
            LCBSinnerDonQuixoteSkill3, 
            LCBSinnerDonQuixoteDefense],
    Passives: [
        new Passive("Righteous Retribution",
            PassiveTypeEnum.Combat,
            "Skills deal +10% damage in a won clash.",
            [{ sin: SinEnum.Lust , amount: 3}],
            PassiveCostTypeEnum.Resonance),

        new Passive("Support",
            PassiveTypeEnum.Support,
            "1 ally with the most SP deals +10% Pierce damage.",
            [{ sin: SinEnum.Lust, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/DonQuixote/Identities/LCBSinner/10301normal.png",
    PortraitImageDir: "./assets/Sinners/DonQuixote/Identities/LCBSinner/10301normalinfo.png"
}