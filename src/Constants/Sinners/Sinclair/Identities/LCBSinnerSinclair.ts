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
} from '../../../../Enums/Index';
import { Identity, Passive, Skill, SkillDescriptionPart } from '../../../../Models/Index';

const LCBSinnerSinclairDefense: Skill = {
    Name: "Guard",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 7,
    Coins: 1,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: -2,
    SkillDescription: [],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Sinclair/LCBSinner/Counter.png'
}

const LCBSinnerSinclairSkill1: Skill = {
    Name: "Downward Swing",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: [new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Sinclair/LCBSinner/DownwardSwing.png'
}

const LCBSinnerSinclairSkill2: Skill = {
    Name: "Halberd Combo",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: [new SkillDescriptionPart("[Clash Win] +30% damage")],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Sinclair/LCBSinner/RavagingCut.png'
}

const LCBSinnerSinclairSkill3: Skill = {
    Name: "Ravaging Cut",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: [new SkillDescriptionPart("[Clash Win] Gain 1 [Attack Power Up]"),            new SkillDescriptionPart("[Heads Hit] Inflict 1 [Rupture]", 1),            new SkillDescriptionPart("[Heads Hit] Inflict 1 [Rupture]", 2),            new SkillDescriptionPart("[Heads Hit] Inflict 1 [Rupture]", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/YiSang/ThePequodFirstMate/EvadeUT4.png'
}

export const LCBSinnerSinclair: Identity = {
    Id: 11001,
    Name: "LCB Sinner",
    Sinner: SinnerEnum.Sinclair,
    Rarity: RarityEnum.OneStar,
    BaseHealth: 60,
    HealthPerLevel: 2.07,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -4,
    SlashResist: 0.5,
    PierceResist: 2,
    BluntResist: 1,
    Skills: [LCBSinnerSinclairSkill1, 
            LCBSinnerSinclairSkill2, 
            LCBSinnerSinclairSkill3, 
            LCBSinnerSinclairDefense],
    Passives: [
        new Passive("Pluckiness",
            PassiveTypeEnum.Combat,
            "When an ally is defeated, gain 1 [Attack Power Up] next turn.",
            [{ sin: SinEnum.Pride, amount: 3}],
            PassiveCostTypeEnum.Owned),

        new Passive("Grudge",
            PassiveTypeEnum.Support,
            "1 ally with the least SP gains 1 [Attack Power Up] the turn after an ally is defeated.",
            [{ sin: SinEnum.Pride, amount: 3}],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Sinclair/Identities/LCBSinner/11001normal.png',
    PortraitImageDir: './assets/Sinners/Sinclair/Identities/LCBSinner/11001normalinfo.png'
}