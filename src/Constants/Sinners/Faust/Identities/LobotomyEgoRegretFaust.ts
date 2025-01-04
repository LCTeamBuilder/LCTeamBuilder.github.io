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

const LobotomyEgoRegretFaustDefense: Skill = {
    Name: "Gathering Spite",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 9,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +6 [Tremor] Count")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Counter,
    SkillImageDir: "assets/Icons/Skills/Sinners/Faust/LobotomyEGORegret/GatheringSpiteUT4.png"
}

const LobotomyEgoRegretFaustSkill1: Skill = {
    Name: "Contracting Straight-jacket",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +3 [Tremor] Count<br>"+
            "[Clash Lose] Gain +3 [Tremor] Count"),
        new SkillDescriptionPart("[On Hit] Gain +3 [Tremor] Count<br>"+
            "[On Hit] Inflict +3 [Tremor] Count", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Faust/LobotomyEGORegret/ContractingStraightjacket.png"
}

const LobotomyEgoRegretFaustSkill2: Skill = {
    Name: "Metallic Ringing",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] Spend 5 [Tremor] Count and gain +1 Atk Weight for this Skill<br>"+
            "[On Use] Gain +4 [Tremor] Count"),
        new SkillDescriptionPart("[Heads Hit] Gain +1 [Tremor] Count<br>"+
            "[On Hit] Inflict 1 [Offense Level Down] next turn", 1),
        new SkillDescriptionPart("[On Hit] Inflict 5 [Tremor]<br>"+
            "[On Hit] Inflict 1 [Plus Coin Drop] next turn", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Faust/LobotomyEGORegret/MetallicRinging.png"
}

const LobotomyEgoRegretFaustSkill3: Skill = {
    Name: "Unleashed Violence",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 3,
    Coins: 3,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] Spend 5 [Tremor] Count and gain +1 Atk Weight for this Skill (Max +2)<br>"+
            "[Clash Lose] Lose 20 SP<br>"+
            "Deal 6% more Damage for every type of negative effect on target (Max 30%)<br>"+
            "[On Kill] Gain +2 [Tremor] Count"),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst],<br>"+
            "Then deal Wrath Damage by 30% of the final Stagger Threshold Raised by [Tremor Burst]. (Max 20)", 1),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst],<br>"+
            "Then deal Wrath Damage by 30% of the final Stagger Threshold Raised by [Tremor Burst]. (Max 20)", 2),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst],<br>"+
            "Then deal Wrath Damage by 30% of the final Stagger Threshold Raised by [Tremor Burst]. (Max 20)<br>"+
            "Reduce [Tremor] Count by 3", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Faust/LobotomyEGORegret/UnleashedViolence.png"
}

export const LobotomyEgoRegretFaust: Identity = {
    Id: 10207,
    Name: "Lobotomy E.G.O::Regret",
    Sinner: SinnerEnum.Faust,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 82,
    HealthPerLevel: 2.82,
    SpeedMin: 3,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [65, 35],
    DefenseLevel: +1,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [LobotomyEgoRegretFaustSkill1, 
            LobotomyEgoRegretFaustSkill2, 
            LobotomyEgoRegretFaustSkill3, 
            LobotomyEgoRegretFaustDefense],
    Passives: [
        new Passive("Coerced Regret",
            PassiveTypeEnum.Combat,
            "- In a clash, the target has -1 Clash Power for every 3 types of negative effects it has (Max -2 Clash Power)<br>"+
            "- When this unit is alive, enemies affected by [Tremor Burst] gain 2 [Defense Level Down]. (3 times per enemy per turn)<br>"+
            "- Mental Corruption: If at less than -25 SP at Turn End, gain 2 [Bind] and 1 [Blunt Power Up] next turn",
            [{ sin: SinEnum.Wrath, amount: 6 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Repression Work",
            PassiveTypeEnum.Support,
            "In a clash, the target of the slowest ally has -1 Clash Power if they have 3+ types of negative effects",
            [{ sin: SinEnum.Wrath, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Faust/Identities/LobotomyEGORegret/10207gacksung.png",
    PortraitImageDir: "./assets/Sinners/Faust/Identities/LobotomyEGORegret/10207gacksunginfo.png"
}