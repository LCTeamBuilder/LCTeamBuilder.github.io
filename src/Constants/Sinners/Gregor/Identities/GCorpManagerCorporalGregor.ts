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

const GCorpManagerCorporalGregorDefense: Skill = {
    Name: "Guard",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 10,
    Coins: 1,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: -2,
    SkillDescription: 
        [],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Gregor/GCorpManagerCorporal/GuardUT4.png'
}

const GCorpManagerCorporalGregorSkill1: Skill = {
    Name: "Hack",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[Clash Win] Damage +40%<br>"+
            "If target has 5+ [Rupture], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Heal by 50% of damage dealt", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Gregor/GCorpManagerCorporal/Hack.png'
}

const GCorpManagerCorporalGregorSkill2: Skill = {
    Name: "Dismember",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Sloth,
    BaseValue: 6,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 5+ [Rupture], deal +50% damage"),
        new SkillDescriptionPart("[On Hit] Inflict 5 [Rupture]<br>"+
            "[On Hit] Heal by 50% of damage dealt", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Gregor/GCorpManagerCorporal/Dismember.png'
}

const GCorpManagerCorporalGregorSkill3: Skill = {
    Name: "Eviscerate",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 5+ [Rupture], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] If target has [Rupture], deal 30% of damage dealt as bonus damage", 1),
        new SkillDescriptionPart("[On Hit] If target has [Rupture], deal 30% of damage dealt as bonus damage", 2),
        new SkillDescriptionPart("[On Hit] If target has [Rupture], deal 30% of damage dealt as bonus damage", 3),
        new SkillDescriptionPart("[On Hit] Heal by 100% of damage dealt", 4)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Gregor/GCorpManagerCorporal/Eviscerate.png'
}

export const GCorpManagerCorporalGregor: Identity = {
    Id: 11203,
    Name: "G Corp. Manager Corporal",
    Sinner: SinnerEnum.Gregor,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 66,
    HealthPerLevel: 2.28,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [GCorpManagerCorporalGregorSkill1, 
            GCorpManagerCorporalGregorSkill2, 
            GCorpManagerCorporalGregorSkill3, 
            GCorpManagerCorporalGregorDefense],
    Passives: [
        new Passive("Emergency Rations",
            PassiveTypeEnum.Combat,
            "At less than 25% HP, heal by 5% of Max HP after winning a clash.",
            [{ sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Gene Code G-3",
            PassiveTypeEnum.Support,
            "The ally with the least HP heals 5 HP after winning a clash.",
            [{ sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Gregor/Identities/GCorpCorporalManager/11203gacksung.png',
    PortraitImageDir: './assets/Sinners/Gregor/Identities/GCorpCorporalManager/11203gacksunginfo.png'
}