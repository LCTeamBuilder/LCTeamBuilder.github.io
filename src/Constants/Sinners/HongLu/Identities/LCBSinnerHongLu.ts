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

const LCBSinnerHongLuDefense: Skill = {
    Name: "Evade",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 2,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: -2,
    SkillDescription: [],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Evade,
    SkillImageDir: "assets/Icons/Skills/Sinners/HongLu/LCBSinner/EvadeUT4.png", 
}

const LCBSinnerHongLuSkill1: Skill = {
    Name: "Downward Cleave",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: [new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/HongLu/LCBSinner/DownwardCleave.png", 
}

const LCBSinnerHongLuSkill2: Skill = {
    Name: "Dual Strike",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: [new SkillDescriptionPart("If user took no damage last turn, Coin Power +1"),            new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking]", 1),            new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/HongLu/LCBSinner/DualStrike.png", 
}

const LCBSinnerHongLuSkill3: Skill = {
    Name: "Whirlwind",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 6,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("If user took no damage last turn, Coin Power +2"),
        new SkillDescriptionPart("[Heads Hit] Inflict 2 [Attack Power Down]<br>"+
            "[On Hit] Inflict 2 [Sinking]<br>"+
            "[On Hit] Inflict 2 [Rupture]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/HongLu/LCBSinner/Whirldwind.png", 
}

export const LCBSinnerHongLu: Identity = {
    Id: 10601,
    Name: "LCB Sinner",
    Sinner: SinnerEnum.HongLu,
    Rarity: RarityEnum.OneStar,
    BaseHealth: 66,
    HealthPerLevel: 2.28,
    SpeedMin: 3,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -2,
    SlashResist: 2,
    PierceResist: 1,
    BluntResist: 0.5,
    Skills: [LCBSinnerHongLuSkill1, 
            LCBSinnerHongLuSkill2, 
            LCBSinnerHongLuSkill3, 
            LCBSinnerHongLuDefense],
    Passives: [
        new Passive("Entertainment",
            PassiveTypeEnum.Combat,
            "Heal 6 SP next turn.",
            [{ sin: SinEnum.Sloth , amount: 2 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Frivolous Jokes",
            PassiveTypeEnum.Support,
            "At the start of combat phase, the ally with the least SP heals 6 SP.",
            [{ sin: SinEnum.Sloth, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/HongLu/Identities/LCBSinner/10601normal.png",
    PortraitImageDir: "./assets/Sinners/HongLu/Identities/LCBSinner/10601normalinfo.png"
}