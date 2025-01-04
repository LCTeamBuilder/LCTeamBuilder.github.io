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

const WCorpL2CleanupAgentFaustDefense: Skill = {
    Name: "Guard",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Envy,
    BaseValue: 10,
    Coins: 1,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: "assets/Icons/Skills/Sinners/Faust/WCorpL2CleanupAgent/GuardUT4.png"
}

const WCorpL2CleanupAgentFaustSkill1: Skill = {
    Name: "Energy Cycle",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Envy,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +2 [Charge] Count"),
        new SkillDescriptionPart("[On Hit] Gain +2 [Charge] Count", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Faust/WCorpL2CleanupAgent/EnergyCycle.png"
}

const WCorpL2CleanupAgentFaustSkill2: Skill = {
    Name: "Leap",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gloom,
    BaseValue: 6,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +3 [Charge] Count"),
        new SkillDescriptionPart("[On Hit] Gain +3 [Charge] Count", 1),
        new SkillDescriptionPart("[On Hit] Spend 3 [Charge] Count to inflict 4 [Bind] next turn", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Faust/WCorpL2CleanupAgent/Leap.png"
}

const WCorpL2CleanupAgentFaustSkill3: Skill = {
    Name: "Overcharge",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 6,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("At 5+ [Charge] Count, Clash Power +2"),
        new SkillDescriptionPart("[On Hit] Spend 5 [Charge] Count to inflict 2 [Attack Power Down] and 3 [Paralyze] next turn")],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Faust/WCorpL2CleanupAgent/Overcharge.png"
}

export const WCorpL2CleanupAgentFaust: Identity = {
    Id: 10202,
    Name: "W Corp. L2 Cleanup Agent",
    Sinner: SinnerEnum.Faust,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 88,
    HealthPerLevel: 3.05,
    SpeedMin: 2,
    SpeedMax: 4,
    StaggerHpPercentThresholds: [60, 30],
    DefenseLevel: +3,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [WCorpL2CleanupAgentFaustSkill1, 
            WCorpL2CleanupAgentFaustSkill2, 
            WCorpL2CleanupAgentFaustSkill3, 
            WCorpL2CleanupAgentFaustDefense],
    Passives: [
        new Passive("Self-charging",
            PassiveTypeEnum.Combat,
            "Gain +1 [Charge] Count after an attack.<br>"+
            "A random ally gains +1 [Charge] Count after an attack.",
            [{ sin: SinEnum.Envy, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Radio Comms",
            PassiveTypeEnum.Support,
            "1 ally with the lowest Max HP gains +1 [Charge] Count.",
            [{ sin: SinEnum.Envy, amount: 3 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Faust/Identities/WCorpL2CleanupAgent/10202gacksung.png",
    PortraitImageDir: "./assets/Sinners/Faust/Identities/WCorpL2CleanupAgent/10202gacksunginfo.png"
}