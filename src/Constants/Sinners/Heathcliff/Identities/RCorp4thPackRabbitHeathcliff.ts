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

const RCorp4thPackRabbitHeathcliffDefense: Skill = {
    Name: "Evade",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: -2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +1 [Charge] Count")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Evade,
    SkillImageDir: "assets/Icons/Skills/Sinners/Heathcliff/RCorp4thPackRabbit/EvadeUT4.png"
}

const RCorp4thPackRabbitHeathcliffSkill1: Skill = {
    Name: "Graze the Grass",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("Spend 1 Ammo", 1),
        new SkillDescriptionPart("Spend 1 Ammo", 2),
        new SkillDescriptionPart("[On Hit] Gain +3 [Charge] Count", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Heathcliff/RCorp4thPackRabbit/GrazeTheGrass.png"
}

const RCorp4thPackRabbitHeathcliffSkill2: Skill = {
    Name: "Concentrated Fire",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gluttony,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 at 6+ Speed"),
        new SkillDescriptionPart("Spend 1 [Ammo]<br>"+
            "[On Hit] Inflict 1 [Bleed]", 1),
        new SkillDescriptionPart("Spend 1 [Ammo]<br>"+
            "[On Hit] Inflict 1 [Bleed]", 2),
        new SkillDescriptionPart("Spend 1 [Ammo]<br>"+
            "[On Hit] Inflict 1 [Bleed]", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Heathcliff/RCorp4thPackRabbit/ConcentratedFire.png"
}

const RCorp4thPackRabbitHeathcliffSkill3: Skill = {
    Name: "Quick Suppression",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 3,
    Coins: 5,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +2 at 6+ Speed"),
        new SkillDescriptionPart("Spend 1 [Ammo]<br>"+
            "[On Hit] Inflict 2 [Fragile]", 1),
        new SkillDescriptionPart("Spend 1 [Ammo]<br>"+
            "[On Hit] Inflict 2 [Fragile]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]", 3),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]", 4),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Rupture]", 5)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Heathcliff/RCorp4thPackRabbit/QuickSuppression.png"
}

export const RCorp4thPackRabbitHeathcliff: Identity = {
    Id: 10703,
    Name: "R Corp. 4th Pack Rabbit",
    Sinner: SinnerEnum.Heathcliff,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 66,
    HealthPerLevel: 2.28,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -4,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [RCorp4thPackRabbitHeathcliffSkill1, 
            RCorp4thPackRabbitHeathcliffSkill2, 
            RCorp4thPackRabbitHeathcliffSkill3, 
            RCorp4thPackRabbitHeathcliffDefense],
    Passives: [
        new Passive("Raring to Graze",
            PassiveTypeEnum.Combat,
            "Gain (Wrath Reson.) [Charge] Count next turn.<br>"+
            "At 5+ [Charge] Count, gain 1 [Haste] and 1 [Attack Power Up].<br>"+
            "Always Activate: At the start of the stage, gain +3 [Ammo].",
            [{ sin: SinEnum.Wrath, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Doggedness",
            PassiveTypeEnum.Support,
            "1 ally with the highest Speed deals +10% Pierce damage.",
            [{ sin: SinEnum.Wrath, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Heathcliff/Identities/RCorp4thPackRabbit/10703gacksung.png",
    PortraitImageDir: "./assets/Sinners/Heathcliff/Identities/RCorp4thPackRabbit/10703gacksunginfo.png"
}