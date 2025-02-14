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

const NCorpMittelhammerRodionDefense: Skill = {
    Name: "Counter",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Wrath,
    BaseValue: 7,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict 1 [Nails]", 1)],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Counter,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Rodion/NCorpMittelhammer/CounterUT4.png'
}

const NCorpMittelhammerRodionSkill1: Skill = {
    Name: "Devoted Hammering",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]<br>"+
            "[On Hit] If target has [Nails], inflict 1 [Nails]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]<br>"+
            "[On Hit] If target has [Nails], inflict 1 [Nails]", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Rodion/NCorpMittelhammer/DevotedHammering.png'
}

const NCorpMittelhammerRodionSkill2: Skill = {
    Name: "Zealous Purge",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Lust,
    BaseValue: 6,
    Coins: 2,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Clash Win] Gain 1 [Fanatic] next turn"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Nails] next turn", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Paralyze] next turn", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Rodion/NCorpMittelhammer/ZealousPurge.png'
}

const NCorpMittelhammerRodionSkill3: Skill = {
    Name: "Ironclad Retribution",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("If this unit is [Fanatic], deal +15% damage<br>"+
            "Deal +5% damage for each 'N Corp. Fanatic' present in the party"),
        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Bleed]", 3),
        new SkillDescriptionPart("[Heads Hit] Inflict 2 [Bleed]", 4)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Rodion/NCorpMittelhammer/IroncladRetribution.png'
}

export const NCorpMittelhammerRodion: Identity = {
    Id: 10904,
    Name: "N Corp. Mittelhammer",
    Sinner: SinnerEnum.Rodion,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 69,
    HealthPerLevel: 2.39,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: 0,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [NCorpMittelhammerRodionSkill1, 
            NCorpMittelhammerRodionSkill2, 
            NCorpMittelhammerRodionSkill3, 
            NCorpMittelhammerRodionDefense],
    Passives: [
        new Passive("Joy of Execution",
            PassiveTypeEnum.Combat,
            "After an enemy is defeated, gain 1 [Haste] and 1 [Damage Up] next turn.<br>"+
            "If this unit defeated an enemy, also gain 1 [Fanatic]. (Once per turn.)",
            [{ sin: SinEnum.Wrath, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Rising Faith",
            PassiveTypeEnum.Support,
            "After an enemy is defeated, apply 1 [Haste] and 1 [Damage Up] to the ally with the most SP. (Once per turn.)",
            [{ sin: SinEnum.Wrath, amount: 3 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Rodion/Identities/NCorpMittelhammer/10904gacksung.png',
    PortraitImageDir: './assets/Sinners/Rodion/Identities/NCorpMittelhammer/10904gacksunginfo.png'
}