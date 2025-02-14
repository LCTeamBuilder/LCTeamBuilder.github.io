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

const RCorp4thPackReindeerIshmaelDefense: Skill = {
    Name: "Evade",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Evade] Gain+ 1 [Charge] Count")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Evade,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ishmael/RCorp4thPackReindeer/Evade.png'
}

const RCorp4thPackReindeerIshmaelSkill1: Skill = {
    Name: "Mind Strike",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +2 [Charge] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Sinking]<br>"+
            "[On Hit] Gain +2 [Charge] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Sinking]<br>"+
            "[On Hit] Gain +2 [Charge] Count", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ishmael/RCorp4thPackReindeer/MindStrike.png'
}

const RCorp4thPackReindeerIshmaelSkill2: Skill = {
    Name: "Flaying Surge",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 6,
    Coins: 1,
    CoinValue: +12,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +7 [Charge] Count"),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Sinking] Count", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ishmael/RCorp4thPackReindeer/FlayingSurge.png'
}

const RCorp4thPackReindeerIshmaelSkill3: Skill = {
    Name: "Mind Whip",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 2,
    Coins: 4,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("Spend 8 [Charge] Count<br>"+
        "If at less than 8 [Charge] Count at Combat Start, target a random unit for an unopposed attack"),
    new SkillDescriptionPart("[On Hit] Inflict 1 [Sinking]<br>"+
        "[On Hit] Raise Stagger Threshold by 40% of damage dealt", 1),
    new SkillDescriptionPart("[On Hit] Inflict 1 [Sinking]<br>"+
        "[On Hit] Raise Stagger Threshold by 30% of damage dealt", 2),
    new SkillDescriptionPart("[On Hit] Inflict 1 [Sinking]<br>"+
        "[On Hit] Raise Stagger Threshold by 20% of damage dealt", 3),
    new SkillDescriptionPart("[On Hit] Inflict 1 [Sinking]<br>"+
        "[On Hit] Raise Stagger Threshold by 10% of damage dealt", 4)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ishmael/RCorp4thPackReindeer/MindWhip.png'
}

export const RCorp4thPackReindeerIshmael: Identity = {
    Id: 10802,
    Name: "R Corp. 4th Pack Reindeer",
    Sinner: SinnerEnum.Ishmael,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 79,
    HealthPerLevel: 2.69,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 30],
    DefenseLevel: +3,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [RCorp4thPackReindeerIshmaelSkill1, 
            RCorp4thPackReindeerIshmaelSkill2, 
            RCorp4thPackReindeerIshmaelSkill3, 
            RCorp4thPackReindeerIshmaelDefense],
    Passives: [
        new Passive("Brainwave Focus",
            PassiveTypeEnum.Combat,
            "At the start of the combat phase, gain (Gloom Reson. / 3) [Attack Power Up].<br>"+
            "If this unit fails to deal damage this turn, lose 15 SP at the end of the turn.",
            [{ sin: SinEnum.Gloom, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Tenacity",
            PassiveTypeEnum.Support,
            "1 ally with the least SP deals +10% Blunt damage.",
            [{ sin: SinEnum.Gloom, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Ishmael/Identities/RCorp4thPackReindeer/10802gacksung.png',
    PortraitImageDir: './assets/Sinners/Ishmael/Identities/RCorp4thPackReindeer/10802gacksunginfo.png'
}