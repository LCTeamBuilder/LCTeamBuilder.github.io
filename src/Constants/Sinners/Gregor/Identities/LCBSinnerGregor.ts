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

const LCBSinnerGregorDefense: Skill = {
    Name: "Guard",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 8,
    Coins: 1,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +0,
    SkillDescription: [],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Gregor/LCBSinner/GuardUT4.png', 
}

const LCBSinnerGregorSkill1: Skill = {
    Name: "Swipe",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: [new SkillDescriptionPart("[Heads Hit] Inflict 4 [Rupture]", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Gregor/LCBSinner/Swipe.png', 
}

const LCBSinnerGregorSkill2: Skill = {
    Name: "Jag",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gluttony,
    BaseValue: 5,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict +1 [Rupture] Count<br>"+
            "[Heads Hit] Inflict 1 [Pierce Fragility]<br>"+
            "[Heads Hit] Inflict 2 [Rupture]", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Gregor/LCBSinner/Jag.png', 
}

const LCBSinnerGregorSkill3: Skill = {
    Name: "Chop Up",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 6,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] If target has [Rupture], +10% Damage", 1),
        new SkillDescriptionPart("[On Hit] If target has [Rupture], +10% Damage<br>"+
            "[Heads Hit] Heal by 30% of damage dealt", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Gregor/LCBSinner/ChopUp.png', 
}

export const LCBSinnerGregor: Identity = {
    Id: 11201,
    Name: "LCB Sinner",
    Sinner: SinnerEnum.Gregor,
    Rarity: RarityEnum.OneStar,
    BaseHealth: 72,
    HealthPerLevel: 2.48,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 30],
    DefenseLevel: +0,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [LCBSinnerGregorSkill1, 
            LCBSinnerGregorSkill2, 
            LCBSinnerGregorSkill3, 
            LCBSinnerGregorDefense],
    Passives: [
        new Passive("Forced Survival",
            PassiveTypeEnum.Combat,
            "Heal 5 HP at the start of the combat phase.",
            [{ sin: SinEnum.Gloom , amount: 3}],
            PassiveCostTypeEnum.Owned),

        new Passive("Gene Code G-0",
            PassiveTypeEnum.Support,
            "At the start of the combat phase, the ally with the least HP heals 5 HP.",
            [{ sin: SinEnum.Gloom, amount: 3}],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Gregor/Identities/LCBSinner/11201normal.png',
    PortraitImageDir: './assets/Sinners/Gregor/Identities/LCBSinner/11201normalinfo.png'
}