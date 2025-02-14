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

const RCorp4thPackRhinoMeursaultDefense: Skill = {
    Name: "Bioelectricity Induction",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Envy,
    BaseValue: 15,
    Coins: 1,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] If attacked while shielded, gain +2 [Charge] Count (Max 10 per turn)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Meursault/RCorp4thPackRhino/BioelectricityInduction.png'
}

const RCorp4thPackRhinoMeursaultSkill1: Skill = {
    Name: "Weighty Bash",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Envy,
    BaseValue: 5,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("At 10+ [Charge] Count, Final Power +1<br>"+
            "At 7+ Speed, deal +25% Damage<br>"+
            "[On Use] Gain +2 [Charge] Count"),
        new SkillDescriptionPart("[On Hit] Gain +2 [Charge] Count", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Meursault/RCorp4thPackRhino/WeightyBash.png'
}

const RCorp4thPackRhinoMeursaultSkill2: Skill = {
    Name: "Demolish",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gloom,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("At 7+ Speed, inflict +1 [Bleed] Count with this Skill<br>"+
            "[On Use] Gain +4 [Charge] Count"),
        new SkillDescriptionPart("[On Hit] Gain +4 [Charge] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Bleed] Count", 2),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Bleed] Count", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Meursault/RCorp4thPackRhino/Demolish.png'
}

const RCorp4thPackRhinoMeursaultSkill3: Skill = {
    Name: "Rhino Ram",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 6,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] At 10+ [Charge] Count, Coin Power +2"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Bleed] Count<br>"+
            "[On Hit] Spend 2 [Charge] Count, Inflict +1 [Bleed] Count<br>"+
            "[On Hit] Spend 3 [Charge] Count, Inflict +1 [Bleed] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Bleed] Count<br>"+
            "[On Hit] Spend 2 [Charge] Count, Inflict +1 [Bleed] Count<br>"+
            "[On Hit] Spend 3 [Charge] Count, Inflict +1 [Bleed] Count", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Meursault/RCorp4thPackRhino/RhinoRam.png'
}

export const RCorp4thPackRhinoMeursault: Identity = {
    Id: 10506,
    Name: "R Corp. 4th Pack Rhino",
    Sinner: SinnerEnum.Meursault,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 95,
    HealthPerLevel: 3,
    SpeedMin: 3,
    SpeedMax: 5,
    StaggerHpPercentThresholds: [40],
    DefenseLevel: +5,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [RCorp4thPackRhinoMeursaultSkill1, 
            RCorp4thPackRhinoMeursaultSkill2, 
            RCorp4thPackRhinoMeursaultSkill3, 
            RCorp4thPackRhinoMeursaultDefense],
    Passives: [
        new Passive("Activate rrR-#4 Suit Pressurization",
            PassiveTypeEnum.Combat,
            "At the end of the turn, gain +2 Max Speed per 5 [Charge] Count next turn. (Max 6)<br>"+
            "At the start of the turn, if at 5+ [Charge] Count, gain 3 [Aggro] to this unit's rightmost slot.",
            [{ sin: SinEnum.Envy, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Maneuver Training",
            PassiveTypeEnum.Support,
            "At the end of the turn, 1 ally with the highest [Charge] Count gains Max Speed +1 (Capped at 3) per 5 [Charge] Count next turn.",
            [{ sin: SinEnum.Envy, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Meursault/Identities/RCorp4thPackRhino/10506gacksung.png',
    PortraitImageDir: './assets/Sinners/Meursault/Identities/RCorp4thPackRhino/10506gacksunginfo.png'
}