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

const TheOneWhoShallGripSinclairDefense: Skill = {
    Name: "Enough...",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 17,
    Coins: 1,
    CoinValue: -7,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] Heal 5-10 SP")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Sinclair/TheOneWhoShallGrip/Guard.png'
}

const TheOneWhoShallGripSinclairSkill1: Skill = {
    Name: "Coerced Judgement",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 8,
    Coins: 2,
    CoinValue: -2,
    AttackWeight: 1,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Lose 7 SP"),
        new SkillDescriptionPart("[Tails Hit] Gain 1 [Fanatic] next turn<br>"+
            "[On Hit] Inflict 3 [Burn]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Sinclair/TheOneWhoShallGrip/CoercedJudgement.png'
}

const TheOneWhoShallGripSinclairSkill2: Skill = {
    Name: "Amoral Enacment",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Lust,
    BaseValue: 16,
    Coins: 4,
    CoinValue: -4,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Lose 10 SP<br>"+
            "If this unit is [Fanatic], deal +10% damage"),
        new SkillDescriptionPart("[Tails Hit] Inflict 2 [Burn]<br>"+
            "[On Hit] Inflict 1 [Burn]", 2),
        new SkillDescriptionPart("[Tails Hit] Inflict 2 [Burn]<br>"+
            "[On Hit] Inflict 1 [Burn]", 3),
        new SkillDescriptionPart("[Tails Hit] Inflict +1 [Burn] Count<br>"+
            "[On Hit] Inflict 2 [Bleed]", 4)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Sinclair/TheOneWhoShallGrip/AmoralEnactment.png'
}

const TheOneWhoShallGripSinclairSkill3: Skill = {
    Name: "Self-destructive Purge",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 30,
    Coins: 3,
    CoinValue: -12,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Lose 15 SP<br>"+
            "If this unit is [Fanatic] , deal +15% damage<br>"+
            'If target is a &ltMechanical Amalgam&gt, deal +10% damage'),
        new SkillDescriptionPart("[On Hit] Raise Stagger Threshold by 50% of damage dealt", 2),
        new SkillDescriptionPart("[On Hit] If target has 5+ [Bleed], inflict 7 [Burn]<br>"+
            "[On Kill] Gain 1 [Blunt Power Up] next turn", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Sinclair/TheOneWhoShallGrip/SelfdestructivePurge.png'
}

export const TheOneWhoShallGripSinclair: Identity = {
    Id: 11005,
    Name: "The One Who Shall Grip",
    Sinner: SinnerEnum.Sinclair,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 79,
    HealthPerLevel: 2.73,
    SpeedMin: 3,
    SpeedMax: 8,
    StaggerHpPercentThresholds: [70, 30],
    DefenseLevel: -4,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [TheOneWhoShallGripSinclairSkill1, 
            TheOneWhoShallGripSinclairSkill2, 
            TheOneWhoShallGripSinclairSkill3, 
            TheOneWhoShallGripSinclairDefense],
    Passives: [
        new Passive("Mad Flame",
            PassiveTypeEnum.Combat,
            "Heal 50% less SP from winning a clash or defeating an enemy.<br>"+
            "If 5 or more surviving units, including this unit, are 'N Corp. Fanatic', they deal +10% damage.",
            [{ sin: SinEnum.Wrath, amount: 2 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Conering",
            PassiveTypeEnum.Support,
            "1 ally with the least SP deals +10% Blunt damage.<br>"+
            "If said ally is below 0 SP, further boost their Blunt damage the lower their SP is. (Max 10%)",
            [{ sin: SinEnum.Wrath, amount: 6 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Sinclair/Identities/TheOneWhoShallGrip/11005gacksung.png',
    PortraitImageDir: './assets/Sinners/Sinclair/Identities/TheOneWhoShallGrip/11005gacksunginfo.png'
}