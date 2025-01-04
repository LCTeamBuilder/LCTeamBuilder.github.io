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

const RBSouschefGregorDefense: Skill = {
    Name: "Guard",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 8,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/RBSouschef/GuardUT4.png"
}

const RBSouschefGregorSkill1: Skill = {
    Name: "Keep It Fresh",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 4+ [Bind], deal +30% damage"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Paralyze], if target has [Bleed], inflict 1 [Paralyze] next turn", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/RBSouschef/KeepItFresh.png"
}

const RBSouschefGregorSkill2: Skill = {
    Name: "You Fresh Enough?",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gluttony,
    BaseValue: 6,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("If user's speed is higher than target's by 3+, Coin Power +3"),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Bleed] Count, Inflict 2 [Bind] next turn", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/RBSouschef/YouFreshEnough.png"
}

const RBSouschefGregorSkill3: Skill = {
    Name: "Butcher Viand",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 5,
    Coins: 4,
    CoinValue: +1,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 10+ [Bleed] Count, Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Paralyze]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Paralyze]", 3),
        new SkillDescriptionPart("[On Hit] Heal HP based on target's [Bleed] (Max 20%)", 4)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/RBSouschef/ButcherViand.png"
}

export const RBSouschefGregor: Identity = {
    Id: 11204,
    Name: "R.B. Sous-chef",
    Sinner: SinnerEnum.Gregor,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 76,
    HealthPerLevel: 2.7,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 30],
    DefenseLevel: 0,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [RBSouschefGregorSkill1, 
            RBSouschefGregorSkill2, 
            RBSouschefGregorSkill3, 
            RBSouschefGregorDefense],
    Passives: [
        new Passive("Packed Pies",
            PassiveTypeEnum.Combat,
            "Heal 8 HP at the start of the combat phase.",
            [{ sin: SinEnum.Lust, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Culinary Aid",
            PassiveTypeEnum.Support,
            "At the start of the combat phase, the ally with the least HP heals 5 HP., Boost the healing of R.B. Chef de Cuisine Ryōshū's Passive 'Rustle Up' by 5.",
            [{ sin: SinEnum.Lust, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Gregor/Identities/RBSouschef/11204gacksung.png",
    PortraitImageDir: "./assets/Sinners/Gregor/Identities/RBSouschef/11204gacksunginfo.png"
}