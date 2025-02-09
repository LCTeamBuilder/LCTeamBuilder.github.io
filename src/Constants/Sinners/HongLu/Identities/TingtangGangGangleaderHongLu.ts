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

const TingtangGangGangleaderHongLuDefense: Skill = {
    Name: "Evade",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 2,
    Coins: 1,
    CoinValue: +14,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 5+ [Bleed], Coin Power +2<br>"+
            "[On Evade] Heal 3 SP")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Evade,
    SkillImageDir: 'assets/Icons/Skills/Sinners/HongLu/TingtangGangGangleader/EvadeUT4.png'
}

const TingtangGangGangleaderHongLuSkill1: Skill = {
    Name: "Throat Slit",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Envy,
    BaseValue: 5,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Heads Hit] Inflict 4 [Bleed]", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/HongLu/TingtangGangGangleader/ThroatSlit.png'
}

const TingtangGangGangleaderHongLuSkill2: Skill = {
    Name: "Shank",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Lust,
    BaseValue: 3,
    Coins: 3,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 7+ [Bleed] , deal +20% damage"),
        new SkillDescriptionPart("[Heads Hit] Damage +3", 1),
        new SkillDescriptionPart("[Heads Hit] Damage +3", 2),
        new SkillDescriptionPart("[Heads Hit] If target is below 25% HP, use this Coin an additional time if target survives<br>"+
            "Heads: +50% Damage for this Coin<br>"+
            "[Reuse - Heads Hit] +50% Damage for this Coin", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/HongLu/TingtangGangGangleader/Shank.png'
}

const TingtangGangGangleaderHongLuSkill3: Skill = {
    Name: "Mutilate",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 5,
    Coins: 1,
    CoinValue: +25,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Kill] Use this skill 1 more time"),
        new SkillDescriptionPart("[Heads Hit] Damage +7<br>"+
            "[Reuse - Heads Hit] +100% damage for this Coin<br>"+
            "[Reuse - Heads Hit] If target has 10+ [Bleed], deal +50% damage", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/HongLu/TingtangGangGangleader/Mutilate.png'
}

export const TingtangGangGangleaderHongLu: Identity = {
    Id: 10603,
    Name: "Tingtang Gang Gangleader",
    Sinner: SinnerEnum.HongLu,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 76,
    HealthPerLevel: 2.6,
    SpeedMin: 3,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: +2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [TingtangGangGangleaderHongLuSkill1, 
            TingtangGangGangleaderHongLuSkill2, 
            TingtangGangGangleaderHongLuSkill3, 
            TingtangGangGangleaderHongLuDefense],
    Passives: [
        new Passive("Gaiety",
            PassiveTypeEnum.Combat,
            "Heal (2x Gluttony Reson.) SP next turn.",
            [{ sin: SinEnum.Gluttony, amount: 2 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Gambit",
            PassiveTypeEnum.Support,
            "1 ally with the most SP deals +20% damage with Heads Coins.",
            [{ sin: SinEnum.Gluttony, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/HongLu/Identities/TingtangGangGangleader/10603gacksung.png',
    PortraitImageDir: './assets/Sinners/HongLu/Identities/TingtangGangGangleader/10603gacksunginfo.png'
}