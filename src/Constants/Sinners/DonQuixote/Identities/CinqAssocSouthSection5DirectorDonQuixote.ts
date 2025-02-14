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

const CinqAssocSouthSection5DirectorDonQuixoteSkill1: Skill = {
    Name: "Remise",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("At 7+ Speed, Coin Power +2<br>"+
            "[Clash Win] Gain 1 [Haste] next turn"),
        new SkillDescriptionPart("[Hit After Clash Win] Inflict 1 [Bind] next turn", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/DonQuixote/CinqAssociationSouthSection5Director/Remise.png'
}

const CinqAssocSouthSection5DirectorDonQuixoteSkill2: Skill = {
    Name: "Flèche",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gloom,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain 2 [Haste] next turn<br>"+
            "[Clash Win] Deal more damage based on Clash count (+5% per Clash count, Max 50%)"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bind] next turn", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/DonQuixote/CinqAssociationSouthSection5Director/Fleche.png'
}

const CinqAssocSouthSection5DirectorDonQuixoteSkill3: Skill = {
    Name: "Salut!",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 6,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("At 10+ Speed, Coin Power +3<br>"+
            "[Clash Win] Deal more damage based on Clash count (+10% per Clash count, Max 100%)"),
        new SkillDescriptionPart("[On Hit] Inflict [Declared Duel] - Don Quixote", 1),
        new SkillDescriptionPart("[On Kill] Heal 15 SP", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/DonQuixote/CinqAssociationSouthSection5Director/Salut.png'
}

const CinqAssocSouthSection5DirectorDonQuixoteDefense: Skill = {
    Name: "Défensive",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Evade] Target loses 3 SP")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Evade,
    SkillImageDir: 'assets/Icons/Skills/Sinners/DonQuixote/CinqAssociationSouthSection5Director/DefensiveUT4.png'
}

export const CinqAssocSouthSection5DirectorDonQuixote: Identity = {
    Id: 10305,
    Name: "Cinq Assoc. South Section 5 Director",
    Sinner: SinnerEnum.DonQuixote,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 72,
    HealthPerLevel: 2.28,
    SpeedMin: 4,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [CinqAssocSouthSection5DirectorDonQuixoteSkill1, 
            CinqAssocSouthSection5DirectorDonQuixoteSkill2, 
            CinqAssocSouthSection5DirectorDonQuixoteSkill3, 
            CinqAssocSouthSection5DirectorDonQuixoteDefense],
    Passives: [
        new Passive("A Noble Duel",
            PassiveTypeEnum.Combat,
            "If Speed of all allies is higher than Speed of all enemies, this unit deals more damage based on the Speed difference between it and the slowest enemy. (+6% per 1 point of difference, Max 30%)",
            [{ sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Dueling Request",
            PassiveTypeEnum.Support,
            "If Speed of all allies is higher than Speed of all enemies, the fastest ally deals more damage based on the Speed difference between it and the slowest enemy. (+3% per 1 point of difference, Max 15%)",
            [{ sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/DonQuixote/Identities/CinqAssociationSouthSection5Director/10305gacksung.png',
    PortraitImageDir: './assets/Sinners/DonQuixote/Identities/CinqAssociationSouthSection5Director/10305gacksunginfo.png'
}