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

const NCorpKleinhammerHeathcliffDefense: Skill = {
    Name: "Guard",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 8,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Heathcliff/NCorpKleinhammer/GuardUT4.png'
}

const NCorpKleinhammerHeathcliffSkill1: Skill = {
    Name: "Gawky Nailing",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Envy,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Heads Hit] Inflict 1 [Nails] next turn<br>"+
            "[Tails Hit] Inflict 1 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]<br>"+
            "[On Hit] Inflict 1 [Nails]", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Heathcliff/NCorpKleinhammer/GawkyNailing.png'
}

const NCorpKleinhammerHeathcliffSkill2: Skill = {
    Name: "Puri...fy!",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gloom,
    BaseValue: 6,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Clash Win] Heal 5 SP"),
        new SkillDescriptionPart("[Heads Hit] Inflict 2 [Plus Coin Drop] next turn", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Heathcliff/NCorpKleinhammer/Purify.png'
}

const NCorpKleinhammerHeathcliffSkill3: Skill = {
    Name: "Infirm Retribution",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Heads Hit] Deal bonus damage by 10% of damage dealt", 1),
        new SkillDescriptionPart("[Heads Hit] Deal bonus damage by 10% of damage dealt", 2),
        new SkillDescriptionPart("[Heads Hit] Deal bonus damage by 10% of damage dealt", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Heathcliff/NCorpKleinhammer/InfirmRetribution.png'
}

export const NCorpKleinhammerHeathcliff: Identity = {
    Id: 10704,
    Name: "N Corp. Kleinhammer",
    Sinner: SinnerEnum.Heathcliff,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 76,
    HealthPerLevel: 2.6,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: +1,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [NCorpKleinhammerHeathcliffSkill1, 
            NCorpKleinhammerHeathcliffSkill2, 
            NCorpKleinhammerHeathcliffSkill3, 
            NCorpKleinhammerHeathcliffDefense],
    Passives: [
        new Passive("Bugger...",
            PassiveTypeEnum.Combat,
            "When an ally is defeated, lose 10 SP and gain 1 [Blunt Power Up] next turn.<br>"+
            "If 4 or more surviving units in the team, including this unit, are 'N Corp. Fanatics', Coin Power +1.",
            [{ sin: SinEnum.Envy, amount: 2 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Cantillation",
            PassiveTypeEnum.Support,
            "1 ally with the highest Speed inflicts +1 [Nails].",
            [{ sin: SinEnum.Lust, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Heathcliff/Identities/NCorpKleinhammer/10704gacksung.png',
    PortraitImageDir: './assets/Sinners/Heathcliff/Identities/NCorpKleinhammer/10704gacksunginfo.png'
}