import {
    DamageTypeEnum,
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

const LCBSinnerRodionDefense: Skill = {
    Name: "Counter",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Wrath,
    BaseValue: 7,
    Coins: 1,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +0,
    SkillDescription: [],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/LCBSinner/Counter.png"
}

const LCBSinnerRodionSkill1: Skill = {
    Name: "Strike Down",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 1,
    SkillLevel: +0,
    SkillDescription: [new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/LCBSinner/StrikeDown.png"
}

const LCBSinnerRodionSkill2: Skill = {
    Name: "Axe Combo",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +0,
    SkillDescription: [new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 1),            new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 2),            new SkillDescriptionPart("[Heads Hit] Inflict +1 [Bleed] Count", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/LCBSinner/AxeCombo.png"
}

const LCBSinnerRodionSkill3: Skill = {
    Name: "Slay",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +0,
    SkillDescription: [new SkillDescriptionPart("Skill Power +1 when below 0 SP"),            new SkillDescriptionPart("[Heads Hit] Inflict 1 [Bleed]", 1),            new SkillDescriptionPart("[Heads Hit] Inflict 1 [Bleed]", 2),            new SkillDescriptionPart("[Heads Hit] Inflict 1 [Bleed]", 3),            new SkillDescriptionPart("[On Hit] If target has +6 [Bleed], deal +20% damage", 4)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/LCBSinner/Slay.png"
}

export const LCBSinnerRodion: Identity = {
    Id: 10901,
    Name: "LCB Sinner",
    Sinner: SinnerEnum.Rodion,
    Rarity: RarityEnum.OneStar,
    BaseHealth: 78,
    HealthPerLevel: 2.69,
    SpeedMin: 2,
    SpeedMax: 5,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: +0,
    SlashResist: 0.5,
    PierceResist: 2,
    BluntResist: 1,
    Skills: [LCBSinnerRodionSkill1, 
            LCBSinnerRodionSkill2, 
            LCBSinnerRodionSkill3, 
            LCBSinnerRodionDefense],
    Passives: [
        new Passive("Split Evil",
            PassiveTypeEnum.Combat,
            "On hit, inflict 1 [Bleed] at a 50% chance.",
            [{ sin: SinEnum.Wrath , amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Gambler",
            PassiveTypeEnum.Support,
            "1 ally with the most HP deals +20% damage with Heads Coins.",
            [{ sin: SinEnum.Wrath, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Rodion/Identities/LCBSinner/10901normal.png",
    PortraitImageDir: "./assets/Sinners/Rodion/Identities/LCBSinner/10901normalinfo.png"
}