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

const LCBSinnerFaustDefense: Skill = {
    Name: "Evade",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 2,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: [],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Evade,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Faust/LCBSinner/EvadeUT4.png', 
}

const LCBSinnerFaustSkill1: Skill = {
    Name: "Downward Slash",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: [new SkillDescriptionPart("[On Hit] Inflict 1 [Paralyze]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Faust/LCBSinner/DownwardSlash.png', 
}

const LCBSinnerFaustSkill2: Skill = {
    Name: "Upward Slash",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Sloth,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: [new SkillDescriptionPart("[On Hit] Inflict 3 [Offense Level Down] next turn", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Faust/LCBSinner/UpwardSlash.png', 
}

const LCBSinnerFaustSkill3: Skill = {
    Name: "Drilling Stab",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 7,
    Coins: 2,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: [new SkillDescriptionPart("[Heads Hit] Inflict 1 [Attack Power Down] next turn", 1),            new SkillDescriptionPart("[On Hit] Inflict 1 [Attack Power Down] next turn", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Faust/LCBSinner/DrillingStab.png', 
}

export const LCBSinnerFaust: Identity = {
    Id: 10201,
    Name: "LCB Sinner",
    Sinner: SinnerEnum.Faust,
    Rarity: RarityEnum.OneStar,
    BaseHealth: 84,
    HealthPerLevel: 2.9,
    SpeedMin: 2,
    SpeedMax: 4,
    StaggerHpPercentThresholds: [60, 30, 15],
    DefenseLevel: +1,
    SlashResist: 2,
    PierceResist: 0.5,
    BluntResist: 1,
    Skills: [LCBSinnerFaustSkill1, 
            LCBSinnerFaustSkill2, 
            LCBSinnerFaustSkill3, 
            LCBSinnerFaustDefense],
    Passives: [
        new Passive("Analytic Eye",
            PassiveTypeEnum.Combat,
            "Deal +10% damage to units with negative status effects.",
            [{ sin: SinEnum.Pride , amount: 2 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Keen Observation",
            PassiveTypeEnum.Support,
            "1 ally with the highest Max HP inflicts 2 [Offense Level Down] with attacks at a 25% chance.",
            [{ sin: SinEnum.Pride, amount: 3}],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Faust/Identities/LCBSinner/10201normal.png',
    PortraitImageDir: './assets/Sinners/Faust/Identities/LCBSinner/10201normalinfo.png'
}