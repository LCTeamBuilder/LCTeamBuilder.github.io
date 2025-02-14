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

const RosespannerWorkshopFixerMeursaultDefense: Skill = {
    Name: "Guard",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 8,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Meursault/RosespannerWorkshopFixer/GuardUT4.png'
}

const RosespannerWorkshopFixerMeursaultSkill1: Skill = {
    Name: "Saddled Tasks",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 5+ [Tremor] Count, Coin Power +2"),
        new SkillDescriptionPart("[Heads Hit] Inflict 2 [Tremor]<br>"+
            "[On Hit] Inflict 2 [Tremor]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Meursault/RosespannerWorkshopFixer/SaddledTasks.png'
}

const RosespannerWorkshopFixerMeursaultSkill2: Skill = {
    Name: "Forced Break",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Pride,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 7+ [Tremor] Count, Final Power +1"),
        new SkillDescriptionPart("[Heads Hit] Inflict 2 [Tremor]<br>"+
            "[On Hit] Inflict 3 [Tremor]", 1),
        new SkillDescriptionPart("[On Hit] If target has 5+ [Tremor], inflict 1 [Attack Power Down] next turn", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Meursault/RosespannerWorkshopFixer/ForcedBreak.png'
}

const RosespannerWorkshopFixerMeursaultSkill3: Skill = {
    Name: "Finishing Runup",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 10+ [Tremor] Count, Coin Power +1"),
        new SkillDescriptionPart("[Heads Hit] Gain +1 [Charge] Count<br>"+
            "[On Hit] Inflict 1 [Tremor]", 1),
        new SkillDescriptionPart("[Heads Hit] Gain +2 [Charge] Count<br>"+
            "[On Hit] Inflict 2 [Tremor]", 2),
        new SkillDescriptionPart("[Heads Hit] Gain +2 [Charge] Count<br>"+
            "[On Hit] Inflict 3 [Tremor]", 3),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]<br>"+
            "When triggering [Tremor Burst] reduce [Tremor] Count by 3, then spend all [Charge] Count to further raise Stagger Threshold by ([Charge] Count x5)% (Max 50%)", 4)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Meursault/RosespannerWorkshopFixer/FinishingRunup.png'
}

export const RosespannerWorkshopFixerMeursault: Identity = {
    Id: 10505,
    Name: "Rosespanner Workshop Fixer",
    Sinner: SinnerEnum.Meursault,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 76,
    HealthPerLevel: 2.7,
    SpeedMin: 3,
    SpeedMax: 8,
    StaggerHpPercentThresholds: [65, 35],
    DefenseLevel: 0,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [RosespannerWorkshopFixerMeursaultSkill1, 
            RosespannerWorkshopFixerMeursaultSkill2, 
            RosespannerWorkshopFixerMeursaultSkill3, 
            RosespannerWorkshopFixerMeursaultDefense],
    Passives: [
        new Passive("Chronic Fatigue",
            PassiveTypeEnum.Combat,
            "In a clash, the opponent has -1 Clash Power if they have 5+ [Tremor].<br>"+
            "When recovering from Stagger, heal 5% of Max HP.",
            [{ sin: SinEnum.Gloom, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Leave by Suggestion",
            PassiveTypeEnum.Support,
            "1 ally with the highest Speed lowers the Clash Power of opponents with [Tremor] by 1.",
            [{ sin: SinEnum.Gloom, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Meursault/Identities/RosespannerWorkshopFixer/10505gacksung.png',
    PortraitImageDir: './assets/Sinners/Meursault/Identities/RosespannerWorkshopFixer/10505gacksunginfo.png'
}