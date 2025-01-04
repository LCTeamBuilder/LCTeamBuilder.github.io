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

const TheOneWhoGripsFaustDefense: Skill = {
    Name: "Such Filth",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Evade] Target loses 3 SP")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Evade,
    SkillImageDir: "assets/Icons/Skills/Sinners/Faust/TheOneWhoGrips/SuchFilthUT4.png"
}

const TheOneWhoGripsFaustSkill1: Skill = {
    Name: "Cackle",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Envy,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("[Clash Win] Target loses 3 SP"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Nails]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Faust/TheOneWhoGrips/Cackle.png"
}

const TheOneWhoGripsFaustSkill2: Skill = {
    Name: "The Gripping",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Lust,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict 2 [Nails]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Nails]", 2),
        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Paralyze] next turn<br>"+
            "[On Hit] Inflict [Gaze] next turn", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Faust/TheOneWhoGrips/TheGripping.png"
}

const TheOneWhoGripsFaustSkill3: Skill = {
    Name: "Execution",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 6,
    Coins: 3,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("[On Kill] Heal all allies for 10 SP and apply 1 [Pierce DMG Up] and [Blunt DMG Up]"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Nails]", 1),
        new SkillDescriptionPart("[Heads Hit] Inflict 2 [Nails]", 2),
        new SkillDescriptionPart("+70% damage to targets with 5+ [Nails]", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Faust/TheOneWhoGrips/Execution.png"
}

export const TheOneWhoGripsFaust: Identity = {
    Id: 10204,
    Name: "The One Who Grips",
    Sinner: SinnerEnum.Faust,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 66,
    HealthPerLevel: 2.28,
    SpeedMin: 4,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -1,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [TheOneWhoGripsFaustSkill1, 
            TheOneWhoGripsFaustSkill2, 
            TheOneWhoGripsFaustSkill3, 
            TheOneWhoGripsFaustDefense],
    Passives: [
        new Passive("Whistles",
            PassiveTypeEnum.Combat,
            "At the start of the combat phase, heal 2 allies with the least SP for 15 SP.<br>"+
            "If the ally is an 'N Corp. Fanatic', also apply 2 [Fanatic].",
            [{ sin: SinEnum.Lust, amount: 4 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Whispers",
            PassiveTypeEnum.Support,
            "At the start of the combat phase, heal 1 ally with the least SP for 15 SP.<br>"+
            "If the ally is an 'N Corp. Fanatic', also apply 2 [Fanatic] .",
            [{ sin: SinEnum.Lust, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Faust/Identities/TheOneWhoGrips/10204gacksung.png",
    PortraitImageDir: "./assets/Sinners/Faust/Identities/TheOneWhoGrips/10204gacksunginfo.png"
}