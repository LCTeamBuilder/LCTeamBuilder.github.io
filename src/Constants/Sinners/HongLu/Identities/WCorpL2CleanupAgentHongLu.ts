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

const WCorpL2CleanupAgentHongLuDefense: Skill = {
    Name: "Guard",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 12,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain 3 [Charge Barrier] (3 times per turn)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: "assets/Icons/Skills/Sinners/HongLu/WCorpL2CleanupAgent/GuardUT4.png"
}

const WCorpL2CleanupAgentHongLuSkill1: Skill = {
    Name: "Energy Cycle",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +4 [Charge] Count"),
        new SkillDescriptionPart("[On Hit] Gain +1 [Charge] Count", 1),
        new SkillDescriptionPart("[On Hit] Gain +1 [Charge] Count", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/HongLu/WCorpL2CleanupAgent/EnergyCycle.png"
}

const WCorpL2CleanupAgentHongLuSkill2: Skill = {
    Name: "Cleanup Support",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Wrath,
    BaseValue: 6,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +3 [Charge] Count<br>"+
            "Clash Power +2 when Shielded"),
        new SkillDescriptionPart("[On Hit] Gain +3 [Charge] Count", 1),
        new SkillDescriptionPart("[On Hit] At 5+ [Charge] Count, gain 1 [Charge] Barrier for every 5 [Charge] Count next turn (Max 4)", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/HongLu/WCorpL2CleanupAgent/CleanupSupport.png"
}

const WCorpL2CleanupAgentHongLuSkill3: Skill = {
    Name: "Deploy Charge Barrier",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] At 10+ [Charge] Count, consume all [Charge] Count to apply (Consumed [Charge] Count /2) [Charge Barrier] (Rounded Down) to 2 allies with the lowest HP%"),
        new SkillDescriptionPart("[On Hit] Inflict 5 [Rupture]<br>"+
            "[On Hit] Gain 2 [Charge Barrier] next turn", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/HongLu/WCorpL2CleanupAgent/DeployChargeBarrier.png"
}

export const WCorpL2CleanupAgentHongLu: Identity = {
    Id: 10606,
    Name: "W Corp. L2 Cleanup Agent",
    Sinner: SinnerEnum.HongLu,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 82,
    HealthPerLevel: 2.82,
    SpeedMin: 4,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [55, 20],
    DefenseLevel: -3,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [WCorpL2CleanupAgentHongLuSkill1, 
            WCorpL2CleanupAgentHongLuSkill2, 
            WCorpL2CleanupAgentHongLuSkill3, 
            WCorpL2CleanupAgentHongLuDefense],
    Passives: [
        new Passive("Cleanup Mastery",
            PassiveTypeEnum.Combat,
            "If at 5+ [Charge] Count at the start of the combat phase, gain 2 [Haste].<br>"+
            "At 10+ [Charge] Count, gain 1 additional [Haste].",
            [{ sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Train Cleanup Manual",
            PassiveTypeEnum.Support,
            "An ally with the lowest Speed gains 2 Haste next turn if at 5+ [Charge] Count at the start of the combat phase",
            [{ sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/HongLu/Identities/WCorpL2CleanupAgent/10606gacksung.png",
    PortraitImageDir: "./assets/Sinners/HongLu/Identities/WCorpL2CleanupAgent/10606gacksunginfo.png"
}