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

const SevenAssocSouthSection4FaustDefense: Skill = {
    Name: "Let's Wrap It Up",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 10,
    Coins: 1,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: -2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain 1 [Haste] next turn (3 times per turn)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: "assets/Icons/Skills/Sinners/Faust/SevenAssociationSouthSection4/LetsWrapItUpUT4.png"
}

const SevenAssocSouthSection4FaustSkill1: Skill = {
    Name: "Predictive Analysis",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Envy,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 3 Rupture on target (Max 2)"),
        new SkillDescriptionPart("[On Hit] Inflict 3 Rupture", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Faust/SevenAssociationSouthSection4/PredictiveAnalysis.png"
}

const SevenAssocSouthSection4FaustSkill2: Skill = {
    Name: "Dissect Target",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 6 [Rupture] on target (Max 2)<br>"+
            "[Clash Win] Inflict +3 [Rupture] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Rupture]", 1),
        new SkillDescriptionPart("[On Hit] If target has 6+ [Rupture], inflict [Weakness Analyzed] next turn", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Faust/SevenAssociationSouthSection4/DissectTarget.png"
}

const SevenAssocSouthSection4FaustSkill3: Skill = {
    Name: "Profiling",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Deal +10% damage for every 3 [Rupture] on target (Max 50%)<br>"+
            "[Clash Win] Inflict +2 [Rupture] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Rupture]", 2),
        new SkillDescriptionPart("[After Attack] If target is Staggered or defeated, gain 1 [Haste] and 1 [Slash Power Up] next turn", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Faust/SevenAssociationSouthSection4/Profiling.png"
}

export const SevenAssocSouthSection4Faust: Identity = {
    Id: 10206,
    Name: "Seven Assoc. South Section 4",
    Sinner: SinnerEnum.Faust,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 76,
    HealthPerLevel: 2.4,
    SpeedMin: 4,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [SevenAssocSouthSection4FaustSkill1, 
            SevenAssocSouthSection4FaustSkill2, 
            SevenAssocSouthSection4FaustSkill3, 
            SevenAssocSouthSection4FaustDefense],
    Passives: [
        new Passive("Before The Tea Cools...",
            PassiveTypeEnum.Combat,
            'When attacking a target with a damage type the target is "Weak" or "Fatal" (Resistance>x1) to, gain 1 [Poise] for each [Rupture] on target before the attack (Max 20 per turn)',
            [{ sin: SinEnum.Gluttony, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Seven Association Tea Time",
            PassiveTypeEnum.Support,
            '1 ally with the fastest Speed deals more damage based on the target\'s [Rupture] when attacking with a damage type that the target is "Weak" or "Fatal"(Resistance>x1) to<br>'+
            "(+1.5% per 1 [Rupture], Max 15%)<br>"+
            "If the ally is a Seven Association Fixer, deal further increased damage<br>"+
            "(+0.5% per 1 [Rupture], Max 5%)",
            [{ sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Faust/Identities/SevenAssociationSouthSection4/10206gacksung.png",
    PortraitImageDir: "./assets/Sinners/Faust/Identities/SevenAssociationSouthSection4/10206gacksunginfo.png"
}