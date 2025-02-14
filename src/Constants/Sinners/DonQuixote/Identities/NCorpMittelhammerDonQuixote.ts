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

const NCorpMittelhammerDonQuixoteSkill1: Skill = {
    Name: "Rightful Purge",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[Heads Hit] Inflict 2 [Nails]<br>"+
        "[On Hit] Inflict 1 [Tremor]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Tremor]", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/DonQuixote/NCorpMittelhammer/RightfulPurge.png'
}

const NCorpMittelhammerDonQuixoteSkill2: Skill = {
    Name: "Enacment!",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gluttony,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +12,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]<br>"+
            "+30% damage to targets with 5+ [Nails]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/DonQuixote/NCorpMittelhammer/Enactment.png'
}

const NCorpMittelhammerDonQuixoteSkill3: Skill = {
    Name: "Fanatical Judgement",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict 2 [Nails]", 1),
        new SkillDescriptionPart("[Heads Hit] Inflict 2 [Nails]<br>"+
        "[On Hit] Inflict +1 [Tremor] Count", 2),
        new SkillDescriptionPart("[Heads Hit] If target has 5+ [Nails], inflict 1 [Attack Power Down] next turn<br>"+
        "[Heads Hit] If target has 5+ [Nails], inflict 2 [Paralyze] next turn<br>"+
        "[On Hit] Inflict +1 [Tremor] Count", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/DonQuixote/NCorpMittelhammer/FanaticalJudgement.png'
}

const NCorpMittelhammerDonQuixoteDefense: Skill = {
    Name: "Guard",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 10,
    Coins: 1,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/DonQuixote/NCorpMittelhammer/Guard.png'
}

export const NCorpMittelhammerDonQuixote: Identity = {
    Id: 10304,
    Name: "N Corp. Mittelhammer",
    Sinner: SinnerEnum.DonQuixote,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 82,
    HealthPerLevel: 2.82,
    SpeedMin: 2,
    SpeedMax: 5,
    StaggerHpPercentThresholds: [65, 35],
    DefenseLevel: +1,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [NCorpMittelhammerDonQuixoteSkill1, 
            NCorpMittelhammerDonQuixoteSkill2, 
            NCorpMittelhammerDonQuixoteSkill3, 
            NCorpMittelhammerDonQuixoteDefense],
    Passives: [
        new Passive("Thou Shalt Hammer!",
            PassiveTypeEnum.Combat,
            "If the target has [Nails], inflict +1 [Tremor] Count.<br>"+
            "If this unit is [Fanatic], inflict +1 [Nails].",
            [{ sin: SinEnum.Lust, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Hammer of Zealotry",
            PassiveTypeEnum.Support,
            "1 Fanatic ally with the least SP deals +10% damage.",
            [{ sin: SinEnum.Lust, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/DonQuixote/Identities/NCorpMittelhammer/10304gacksung.png',
    PortraitImageDir: './assets/Sinners/DonQuixote/Identities/NCorpMittelhammer/10304gacksunginfo.png'
}