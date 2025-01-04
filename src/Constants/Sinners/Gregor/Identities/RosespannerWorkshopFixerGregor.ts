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

const RosespannerWorkshopFixerGregorDefense: Skill = {
    Name: "Guard",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 8,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 1,
    SkillLevel: -2,
    SkillDescription: 
        [],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/RosespannerWorkshopFixer/GuardUT4.png"
}

const RosespannerWorkshopFixerGregorSkill1: Skill = {
    Name: "Rev Up",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +2 [Charge] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]<br>"+
            "[On Hit] If target has 5+ [Tremor] Count, inflict 3 [Rupture]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/RosespannerWorkshopFixer/RevUp.png"
}

const RosespannerWorkshopFixerGregorSkill2: Skill = {
    Name: "Grease Chains",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +12,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +3 [Charge] Count"),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Tremor] Count<br>"+
            "[On Hit] Inflict +2 [Rupture] Count", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/RosespannerWorkshopFixer/GreaseChains.png"
}

const RosespannerWorkshopFixerGregorSkill3: Skill = {
    Name: "Let's Grind 'Em",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 5+ [Tremor] Count, Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst] then reduce [Tremor] Count by 2,<br>"+
            "Spend up to 4 [Charge] Count to inflict [Rupture] Count equal to [Charge] Count spent", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]<br>"+
            "[On Hit] If target is Staggered, deal +10% damage<br>"+
            "[On Hit] If target has 5+ [Tremor] Count, inflict 3 [Rupture]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]<br>"+
            "[On Hit] If target is Staggered, deal +10% damage<br>"+
            "[On Hit] If target has 5+ [Tremor] Count, inflict 3 [Rupture]", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/RosespannerWorkshopFixer/LetsGrindEm.png"
}

export const RosespannerWorkshopFixerGregor: Identity = {
    Id: 11205,
    Name: "Rosespanner Workshop Fixer",
    Sinner: SinnerEnum.Gregor,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 69,
    HealthPerLevel: 2.29,
    SpeedMin: 4,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: -2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [RosespannerWorkshopFixerGregorSkill1, 
            RosespannerWorkshopFixerGregorSkill2, 
            RosespannerWorkshopFixerGregorSkill3, 
            RosespannerWorkshopFixerGregorDefense],
    Passives: [
        new Passive("Sawblade Fired Up",
            PassiveTypeEnum.Combat,
            "Inflict +1 Rupture to targets with [Tremor]",
            [{ sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Sawblade Maintenance",
            PassiveTypeEnum.Support,
            "1 ally with the lowest Speed inflicts +1 [Rupture] to targets with [Tremor]",
            [{ sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Gregor/Identities/RosespannerWorkshopFixer/11205gacksung.png",
    PortraitImageDir: "./assets/Sinners/Gregor/Identities/RosespannerWorkshopFixer/11205gacksunginfo.png"
}