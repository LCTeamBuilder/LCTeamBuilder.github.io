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

const LCBSinnerHeathcliffDefense: Skill = {
    Name: "Counter",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Envy,
    BaseValue: 7,
    Coins: 1,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +0,
    SkillDescription: [],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: DefenseTypeEnum.Counter,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Heathcliff/LCBSinner/Counter.png', 
}

const LCBSinnerHeathcliffSkill1: Skill = {
    Name: "Bat Bash",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Envy,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 1,
    SkillLevel: +0,
    SkillDescription: [new SkillDescriptionPart("[On Hit] Inflict 3 [Tremor]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Heathcliff/LCBSinner/BatBash.png', 
}

const LCBSinnerHeathcliffSkill2: Skill = {
    Name: "Smackdown",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +0,
    SkillDescription: [new SkillDescriptionPart("[On Use] Gain 1 [Attack Power Up] and [Damage Up] next turn"),            new SkillDescriptionPart("[Heads Hit] Inflict 2 [Tremor]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Heathcliff/LCBSinner/Smackdown.png', 
}

const LCBSinnerHeathcliffSkill3: Skill = {
    Name: "Upheaval",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +8,
    AttackWeight: 1,
    SkillLevel: +0,
    SkillDescription: [new SkillDescriptionPart("[Heads Hit] Next Coin has +2 Power", 1),            new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Heathcliff/LCBSinner/Upheaval.png', 
}

export const LCBSinnerHeathcliff: Identity = {
    Id: 10701,
    Name: "LCB Sinner",
    Sinner: SinnerEnum.Heathcliff,
    Rarity: RarityEnum.OneStar,
    BaseHealth: 78,
    HealthPerLevel: 2.69,
    SpeedMin: 2,
    SpeedMax: 5,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: +0,
    SlashResist: 2,
    PierceResist: 1,
    BluntResist: 0.5,
    Skills: [LCBSinnerHeathcliffSkill1, 
            LCBSinnerHeathcliffSkill2, 
            LCBSinnerHeathcliffSkill3, 
            LCBSinnerHeathcliffDefense],
    Passives: [
        new Passive("Ressentiment",
            PassiveTypeEnum.Combat,
            "Deal +10% damage to targets with higher Max HP.",
            [{ sin: SinEnum.Envy , amount: 4}],
            PassiveCostTypeEnum.Resonance),

        new Passive("Spite-driven",
            PassiveTypeEnum.Support,
            "1 ally with the lowest Max HP deals +10% Blunt damage.",
            [{ sin: SinEnum.Envy, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Heathcliff/Identities/LCBSinner/10701normal.png',
    PortraitImageDir: './assets/Sinners/Heathcliff/Identities/LCBSinner/10701normalinfo.png'
}