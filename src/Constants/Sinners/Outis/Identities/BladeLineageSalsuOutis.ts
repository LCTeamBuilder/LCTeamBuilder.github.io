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

const BladeLineageSalsuOutisDefense: Skill = {
    Name: "Evade",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 3,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("At 6+ [Poise], Coin Power +3")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Evade,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Outis/BladeLineageCutthroat/Evade.png'
}

const BladeLineageSalsuOutisSkill1: Skill = {
    Name: "Draw of the Sword",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("At 5+ [Poise], Coin Power +1"),
            new SkillDescriptionPart("[On Hit] Gain 4 [Poise]", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Outis/BladeLineageCutthroat/DrawOfTheSword.png'
}

const BladeLineageSalsuOutisSkill2: Skill = {
    Name: "Acupuncture",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Lust,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[Clash Win] Gain +2 [Poise] Count"),
        new SkillDescriptionPart("[Heads Hit] Gain 2 [Slash DMG Up] next turn", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Outis/BladeLineageCutthroat/Acupuncture.png'
}

const BladeLineageSalsuOutisSkill3: Skill = {
    Name: "Decisive dive",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 6,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("If target's HP is below 50%, Final Power +2"),
        new SkillDescriptionPart("[On Crit] Raise first Stagger Threshold by 20% of damage dealt", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Outis/BladeLineageCutthroat/DecisiveDive.png'
}

export const BladeLineageSalsuOutis: Identity = {
    Id: 11102,
    Name: "Blade Lineage Salsu",
    Sinner: SinnerEnum.Outis,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 82,
    HealthPerLevel: 2.82,
    SpeedMin: 2,
    SpeedMax: 5,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: 0,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [BladeLineageSalsuOutisSkill1, 
            BladeLineageSalsuOutisSkill2, 
            BladeLineageSalsuOutisSkill3, 
            BladeLineageSalsuOutisDefense],
    Passives: [
        new Passive("Levelheaded",
            PassiveTypeEnum.Combat,
            "Deal +20% damage to targets below 25% HP",
            [{ sin: SinEnum.Pride, amount: 2 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Double Tap",
            PassiveTypeEnum.Support,
            "1 ally with the most SP deals +30% damage to enemies below 25% HP.",
            [{ sin: SinEnum.Pride, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Outis/Identities/BladeLineageCutthroat/11102gacksung.png',
    PortraitImageDir: './assets/Sinners/Outis/Identities/BladeLineageCutthroat/11102gacksunginfo.png'
}