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
} from "../../../../Enums/Index";
import { Identity, Passive, Skill, SkillDescriptionPart } from "../../../../Models/Index";

const NCorpGrohammerMeursaultDefense: Skill = {
    Name: "Foolishness...!",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Wrath,
    BaseValue: 15,
    Coins: 1,
    CoinValue: -5,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] Gain +1 [Protection]<br>"+
            "At less than 50% HP, +2 Final Power")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Counter,
    SkillImageDir: "assets/Icons/Skills/Sinners/Meursault/NCorpGrohammer/FoolishnessUT4.png"
}

const NCorpGrohammerMeursaultSkill1: Skill = {
    Name: "Drive",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +1,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +4 [Aggro] to this Skill Slot next turn<br>"+
            "At less than 50% HP, Coin Power +2"),
        new SkillDescriptionPart("[On Hit] Lower user's Stagger Threshold by 60% of damage dealt", 1),
        new SkillDescriptionPart("[On Hit] Lower user's Stagger Threshold by 60% of damage dealt", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Meursault/NCorpGrohammer/Drive.png"
}

const NCorpGrohammerMeursaultSkill2: Skill = {
    Name: "You Are Cleansed of Sin",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Wrath,
    BaseValue: 6,
    Coins: 2,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +6 [Aggro] to this Skill Slot next turn"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Nails]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Bind] next turn<br>"+
            "[On Hit] If target has 5+ [Nails], inflict 2 [Bind] and 2 [Attack Power Down] next turn", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Meursault/NCorpGrohammer/YouAreCleansedOfSin.png"
}

const NCorpGrohammerMeursaultSkill3: Skill = {
    Name: "Annihilate Heretics",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 8,
    Coins: 2,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +6 [Aggro] to this Skill Slot next turn"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Nails] next turn", 1),
        new SkillDescriptionPart("[On Hit] Heal 50% of damage dealt<br>"+
            "HP Heal +3% for each of target's [Nails]")],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Meursault/NCorpGrohammer/AnnihilateHeretics.png"
}

export const NCorpGrohammerMeursault: Identity = {
    Id: 10504,
    Name: "N Corp. Großhammer",
    Sinner: SinnerEnum.Meursault,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 99,
    HealthPerLevel: 3.41,
    SpeedMin: 3,
    SpeedMax: 5,
    StaggerHpPercentThresholds: [50],
    DefenseLevel: +5,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [NCorpGrohammerMeursaultSkill1, 
            NCorpGrohammerMeursaultSkill2, 
            NCorpGrohammerMeursaultSkill3, 
            NCorpGrohammerMeursaultDefense],
    Passives: [
        new Passive("Obsessive Hammer",
            PassiveTypeEnum.Combat,
            "When below 50% HP, remove 1 negative status effect and gain 1 [Fanatic], 1 [Attack Power Up], and 3 [Protection] at the start of the combat phase.",
            [{ sin: SinEnum.Wrath, amount: 4 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Highest Honor",
            PassiveTypeEnum.Support,
            "Apply 1 [Attack Power Up] and 1 [Protection] to the ally with the least HP below 50%.<br>"+
            "If the ally is an 'N Corp. Fanatic', also apply 1 [Fanatic].",
            [{ sin: SinEnum.Wrath, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Meursault/Identities/NCorpGrohammer/10504gacksung.png",
    PortraitImageDir: "./assets/Sinners/Meursault/Identities/NCorpGrohammer/10504gacksunginfo.png"
}