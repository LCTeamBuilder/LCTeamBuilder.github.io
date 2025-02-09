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

const LobotomyEgoRedSheetSinclairDefense: Skill = {
    Name: "Guard",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 8,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain 1 [Talisman]")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Sinclair/LobotomyEGORedSheet/GuardUT4.png'
}

const LobotomyEgoRedSheetSinclairSkill1: Skill = {
    Name: "Magnify Wound",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 5,
    Coins: 1,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]<br>"+
        "[On Hit] If target has 5+ [Rupture], gain 1 [Talisman]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Sinclair/LobotomyEGORedSheet/MagnifyWound.png'
}

const LobotomyEgoRedSheetSinclairSkill2: Skill = {
    Name: "Proliferating Talismans",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Gain 1 [Talisman]<br>"+
        "[On Hit] If target has [Rupture], gain 1 [Talisman]", 1),
        new SkillDescriptionPart("[On Hit] Gain 1 [Talisman]<br>"+
        "[On Hit] If target has [Rupture], gain 1 [Talisman]", 2),
        new SkillDescriptionPart("[On Hit] Gain 1 [Talisman]<br>"+
        "[On Hit] If target has [Rupture], gain 1 [Talisman]", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Sinclair/LobotomyEGORedSheet/ProliferatingTalismans.png'
}

const LobotomyEgoRedSheetSinclairSkill3: Skill = {
    Name: "Rupturing Talisman",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Spend 5 [Talisman] on self, Give +5 [Talisman]"),
        new SkillDescriptionPart("[On Hit] If target has [Talisman], inflict +3 [Rupture] Count")],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Sinclair/LobotomyEGORedSheet/RupturingTalismans.png'
}

export const LobotomyEgoRedSheetSinclair: Identity = {
    Id: 11006,
    Name: "Lobotomy E.G.O::Red Sheet",
    Sinner: SinnerEnum.Sinclair,
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
    Skills: [LobotomyEgoRedSheetSinclairSkill1, 
            LobotomyEgoRedSheetSinclairSkill2, 
            LobotomyEgoRedSheetSinclairSkill3, 
            LobotomyEgoRedSheetSinclairDefense],
    Passives: [
        new Passive("Unfixing Talismans",
            PassiveTypeEnum.Combat,
            "On hit, if the target had [Rupture], gain 1 [Talisman] .",
            [{ sin: SinEnum.Gluttony, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Wishing Talisman",
            PassiveTypeEnum.Support,
            "At the start of the combat phase, give (Highest Reson. * 2) [Talisman] to the ally with the most HP.",
            [{ sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Sinclair/Identities/LobotomyEGORedSheet/11006gacksung.png',
    PortraitImageDir: './assets/Sinners/Sinclair/Identities/LobotomyEGORedSheet/11006gacksunginfo.png'
}