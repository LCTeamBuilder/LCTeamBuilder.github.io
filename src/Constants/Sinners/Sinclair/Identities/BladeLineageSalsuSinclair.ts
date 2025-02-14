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

const BladeLineageSalsuSinclairDefense: Skill = {
    Name: "Newsprung Counter",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Wrath,
    BaseValue: 9,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain 1 [Damage Up] next turn<br>"+
            "[On Use] Gain +3 [Poise] Count")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Counter,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Sinclair/BladeLineageSalsu/NewsprungCounter.png'
}

const BladeLineageSalsuSinclairSkill1: Skill = {
    Name: "Slice then Stab",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("If at 3+ [Poise] Count, Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Gain +2 [Poise] Count", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Sinclair/BladeLineageSalsu/SliceThenStab.png'
}

const BladeLineageSalsuSinclairSkill2: Skill = {
    Name: "Slash Series",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Wrath,
    BaseValue: 6,
    Coins: 3,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[Clash Lose] Gain 2 [Attack Power Up] next turn<br>"+
            "[Clash Win] Do not spend [Poise] Count with critical attacks landed with this skill"),
        new SkillDescriptionPart("[On Hit] Gain 2 [Poise]", 1),
        new SkillDescriptionPart("[On Hit] Gain 1 [Poise]", 2),
        new SkillDescriptionPart("[On Hit] Gain 1 [Poise]", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Sinclair/BladeLineageSalsu/SlashSeries.png'
}

const BladeLineageSalsuSinclairSkill3: Skill = {
    Name: "To Claim Their Bones",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 8,
    Coins: 1,
    CoinValue: +18,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("At 10+ [Poise] Count, +150% Critical Damage"),
        new SkillDescriptionPart("[On Hit] Inflict 5 [Paralyze]<br>"+
            "[On Hit] Inflict 3 [Bleed]", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Sinclair/BladeLineageSalsu/ToClaimTheirBones.png'
}

export const BladeLineageSalsuSinclair: Identity = {
    Id: 11002,
    Name: "Blade Lineage Salsu",
    Sinner: SinnerEnum.Sinclair,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 86,
    HealthPerLevel: 2.96,
    SpeedMin: 2,
    SpeedMax: 5,
    StaggerHpPercentThresholds: [60, 30],
    DefenseLevel: +2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [BladeLineageSalsuSinclairSkill1, 
            BladeLineageSalsuSinclairSkill2, 
            BladeLineageSalsuSinclairSkill3, 
            BladeLineageSalsuSinclairDefense],
    Passives: [
        new Passive("Slayer",
            PassiveTypeEnum.Combat,
            "The last Coin on the last skill in the chain deals +20% damage.<br>"+
            "Whenever an ally other than this unit gains [Poise] Count, this unit gains +1 [Poise] Count at a 50% chance.",
            [{ sin: SinEnum.Pride, amount: 2 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Bloodied Hands",
            PassiveTypeEnum.Support,
            "1 ally with the lowest Speed gains +1 final Power for their last skill.",
            [{ sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Sinclair/Identities/BladeLineageSalsu/11002gacksung.png',
    PortraitImageDir: './assets/Sinners/Sinclair/Identities/BladeLineageSalsu/11002gacksunginfo.png'
}