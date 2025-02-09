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

const GCorpHeadManagerOutisDefense: Skill = {
    Name: "Guard",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 9,
    Coins: 1,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Outis/GCorpHeadManager/GuardUT4.png'
}

const GCorpHeadManagerOutisSkill1: Skill = {
    Name: "Order",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 5+ [Sinking], Coin Power +2"),
        new SkillDescriptionPart("[On Hit] Apply 2 [Protection] to the ally with the lowest Speed", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Outis/GCorpHeadManager/Order.png'
}

const GCorpHeadManagerOutisSkill2: Skill = {
    Name: "Onslaught Command",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gluttony,
    BaseValue: 6,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Apply 1 [Attack Power Up] to the ally with the lowest Speed"),
        new SkillDescriptionPart("[On Hit] Apply 2 [Damage Up] to the ally with the lowest Speed", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Outis/GCorpHeadManager/OnslaughtCommand.png'
}

const GCorpHeadManagerOutisSkill3: Skill = {
    Name: "Focus",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 6,
    Coins: 1,
    CoinValue: +16,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict 5 [Sinking]<br>"+
            "[On Hit] Inflict 2 [Attack Power Down]<br>"+
            "[Heads Hit] Inflict 4 [Sinking]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Outis/GCorpHeadManager/Focus.png'
}

export const GCorpHeadManagerOutis: Identity = {
    Id: 11103,
    Name: "G Corp. Head Manager",
    Sinner: SinnerEnum.Outis,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 76,
    HealthPerLevel: 2.6,
    SpeedMin: 4,
    SpeedMax: 8,
    StaggerHpPercentThresholds: [65, 35],
    DefenseLevel: +2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [GCorpHeadManagerOutisSkill1, 
            GCorpHeadManagerOutisSkill2, 
            GCorpHeadManagerOutisSkill3, 
            GCorpHeadManagerOutisDefense],
    Passives: [
        new Passive("Morale Boost",
            PassiveTypeEnum.Combat,
            "Next turn, apply 2 [Haste] to self and allies who are adjacent to this unit on the Dashboard this turn.",
            [{ sin: SinEnum.Sloth, amount: 2 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Resolution",
            PassiveTypeEnum.Support,
            "1 ally with the most HP randomly gains 1 [Attack Power Up], 1 [Defense Power Up], or 1 [Protection] at the start of the combat phase.",
            [{ sin: SinEnum.Sloth, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Outis/Identities/GCorpHeadManager/11103gacksung.png',
    PortraitImageDir: './assets/Sinners/Outis/Identities/GCorpHeadManager/11103gacksunginfo.png'
}