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

const LCBSinnerRyoshuDefense: Skill = {
    Name: "Evade",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 2,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: -2,
    SkillDescription: [],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Evade,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/LCBSinner/EvadeUT4.png"
}

const LCBSinnerRyoshuSkill1: Skill = {
    Name: "Paint",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: [new SkillDescriptionPart("[On Hit] Gain 2 [Poise] next turn", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/LCBSinner/Paint.png"
}

const LCBSinnerRyoshuSkill2: Skill = {
    Name: "Splatter",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Lust,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: [new SkillDescriptionPart("If target previously took damage this turn, deal +30% damage", 1),            new SkillDescriptionPart("If target previously took damage this turn, deal +30% damage", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/LCBSinner/Splatter.png"
}

const LCBSinnerRyoshuSkill3: Skill = {
Name: "Brushstroke",
SkillType: SkillTypeEnum.Attack,
SkillTier: SkillTierEnum.Skill3,
Affinity: SinEnum.Pride,
BaseValue: 5,
Coins: 3,
CoinValue: +3,
AttackWeight: 1,
SkillLevel: +2,
SkillDescription: [new SkillDescriptionPart("[Combat Start] Gain 2 [Slash DMG Up]"),
                            new SkillDescriptionPart("[On Hit] Gain 2 [Poise] next turn", 2)],
DamageType: DamageTypeEnum.Slash,
DefenseType: undefined,
SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/LCBSinner/Brushstroke.png"
}

export const LCBSinnerRyoshu: Identity = {
    Id: 10401,
    Name: "LCB Sinner",
    Sinner: SinnerEnum.Ryoshu,
    Rarity: RarityEnum.OneStar,
    BaseHealth: 66,
    HealthPerLevel: 2.28,
    SpeedMin: 3,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -4,
    SlashResist: 0.5,
    PierceResist: 1,
    BluntResist: 2,
    Skills: [LCBSinnerRyoshuSkill1, 
            LCBSinnerRyoshuSkill2, 
            LCBSinnerRyoshuSkill3, 
            LCBSinnerRyoshuDefense],
    Passives: [
        new Passive("Indiscriminate Art",
            PassiveTypeEnum.Combat,
            "Deal and take +25% damage.",
            [{ sin: SinEnum.Gluttony , amount: 3}],
            PassiveCostTypeEnum.Resonance),

        new Passive("Hustle",
            PassiveTypeEnum.Support,
            "1 ally with the lowest Max HP deals and takes +20% damage.",
            [{ sin: SinEnum.Gluttony, amount: 3}],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Ryoshu/Identities/LCBSinner/10401normal.png",
    PortraitImageDir: "./assets/Sinners/Ryoshu/Identities/LCBSinner/10401normalinfo.png"
}