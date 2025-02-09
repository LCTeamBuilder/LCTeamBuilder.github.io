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

const RbChefDeCuisineRyoshuDefense: Skill = {
    Name: "F.I. in Sight",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Evade] Gain 1 [Haste] next turn")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Evade,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ryoshu/RBChefDeCuisine/FIInSightUT4.png'
}

const RbChefDeCuisineRyoshuSkill1: Skill = {
    Name: "P.C.",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict +1 [Bleed] Count", 1),
        new SkillDescriptionPart("[On Hit] Gain 2 [Appetite]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ryoshu/RBChefDeCuisine/PC.png'
}

const RbChefDeCuisineRyoshuSkill2: Skill = {
    Name: "I.H.",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 3,
    Coins: 3,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain 1 [Appetite]"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bind] next turn", 1),
        new SkillDescriptionPart("[Heads Hit] Inflict 3 [Bleed]", 2),
        new SkillDescriptionPart("[On Hit] If target has [Bleed] or [Paralyze], inflict 4 [HP Healing Down] next turn", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ryoshu/RBChefDeCuisine/IH.png'
}

const RbChefDeCuisineRyoshuSkill3: Skill = {
    Name: "I Can Cook Anything",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 3,
    Coins: 4,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Boost damage by 5% of target's missing HP (Max 20)"),
        new SkillDescriptionPart("[Heads Hit] The final Coin deals +10% damage", 1),
        new SkillDescriptionPart("[Heads Hit] The final Coin deals +5% damage", 2),
        new SkillDescriptionPart("[Heads Hit] The final Coin deals +5% damage", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ryoshu/RBChefDeCuisine/ICanCookAnything.png'
}

export const RbChefDeCuisineRyoshu: Identity = {
    Id: 10404,
    Name: "R.B. Chef de Cuisine",
    Sinner: SinnerEnum.Ryoshu,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 70,
    HealthPerLevel: 2.4,
    SpeedMin: 3,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: -2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [RbChefDeCuisineRyoshuSkill1, 
            RbChefDeCuisineRyoshuSkill2, 
            RbChefDeCuisineRyoshuSkill3, 
            RbChefDeCuisineRyoshuDefense],
    Passives: [
        new Passive("Rustle Up",
            PassiveTypeEnum.Combat,
            "After defeating an enemy, heal the ally with the least HP for 15 HP. (Once per turn.)<br>"+
            "If this unit has an [Appetite], spend it to boost the healing based on its Count.",
            [{ sin: SinEnum.Lust, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Artistic Flavor",
            PassiveTypeEnum.Support,
            "When an enemy is defeated, the ally with the least HP heals 15 HP. (Once per turn.)",
            [{ sin: SinEnum.Lust, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Ryoshu/Identities/RBChefDeCuisine/10404gacksung.png',
    PortraitImageDir: './assets/Sinners/Ryoshu/Identities/RBChefDeCuisine/10404gacksunginfo.png'
}