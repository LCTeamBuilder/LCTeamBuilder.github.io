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

const LCBSinnerOutisDefense: Skill = {
    Name: "Evade",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 2,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: -3,
    SkillDescription: [],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Evade,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Outis/LCBSinner/EvadeUT4.png'
}

const LCBSinnerOutisSkill1: Skill = {
    Name: "Pulled Blade",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 3,
    Coins: 3,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: [new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]", 2),            new SkillDescriptionPart(" [Heads Hit] Inflict 1 [Rupture]", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Outis/LCBSinner/PulledBlade.png'
}

const LCBSinnerOutisSkill2: Skill = {
    Name: "Backslash",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gloom,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: [new SkillDescriptionPart("If user's speed is higher than target's, +20% Damage", 1),            new SkillDescriptionPart("If user's speed is higher than target's, +20% Damage", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Outis/LCBSinner/Backslash.png'
}

const LCBSinnerOutisSkill3: Skill = {
    Name: "Piercing Thrust",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 7,
    Coins: 1,
    CoinValue: +14,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: [new SkillDescriptionPart("If target's HP is above 50%, deal +20% damage", 1),            new SkillDescriptionPart("[On Hit] Inflict +1 [Rupture] Count", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Outis/LCBSinner/PiercingThrust.png'
}

export const LCBSinnerOutis: Identity = {
    Id: 11101,
    Name: "LCB Sinner",
    Sinner: SinnerEnum.Outis,
    Rarity: RarityEnum.OneStar,
    BaseHealth: 60,
    HealthPerLevel: 2.07,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -4,
    SlashResist: 0.5,
    PierceResist: 1,
    BluntResist: 2,
    Skills: [LCBSinnerOutisSkill1, 
            LCBSinnerOutisSkill2, 
            LCBSinnerOutisSkill3, 
            LCBSinnerOutisDefense],
    Passives: [
        new Passive("Executor",
            PassiveTypeEnum.Combat,
            "If target's SP is below 0, deal +10% damage.",
            [{ sin: SinEnum.Sloth, amount: 4}],
            PassiveCostTypeEnum.Owned),

        new Passive("Military Mindset",
            PassiveTypeEnum.Support,
            "1 ally with the most HP deals +30% damage to enemies below 0 SP.",
            [{ sin: SinEnum.Sloth, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Outis/Identities/LCBSinner/11101normal.png',
    PortraitImageDir: './assets/Sinners/Outis/Identities/LCBSinner/11101normalinfo.png'
}