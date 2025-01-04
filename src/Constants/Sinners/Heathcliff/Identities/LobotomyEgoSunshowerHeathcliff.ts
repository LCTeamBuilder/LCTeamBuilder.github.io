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

const LobotomyEgoSunshowerHeathcliffDefense: Skill = {
    Name: "Warning",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Wrath,
    BaseValue: 10,
    Coins: 2,
    CoinValue: -5,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain 5 [Sinking]"),
        new SkillDescriptionPart("[Tails Hit] Gain 1 [Paralyze] next turn", 1),
        new SkillDescriptionPart("[On Hit] Inflict 5 [Sinking]<br>"+
            "[On Hit] Inflict 5 [Rupture]", 2)],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Counter,
    SkillImageDir: "assets/Icons/Skills/Sinners/Heathcliff/LobotomyEGOSunshower/Warning.png"
}

const LobotomyEgoSunshowerHeathcliffSkill1: Skill = {
    Name: "Umbrella Thwack",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Envy,
    BaseValue: 6,
    Coins: 3,
    CoinValue: -2,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +1 [Sinking] Count<br>"+
            "[Clash Lose] Gain 3 [Sinking]"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking]<br>"+
            "[Tails Hit] Inflict +2 [Sinking] Count", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Heathcliff/LobotomyEGOSunshower/UmbrellaThwack.png"
}

const LobotomyEgoSunshowerHeathcliffSkill2: Skill = {
    Name: "Puddle Stomp",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gloom,
    BaseValue: 10,
    Coins: 4,
    CoinValue: -3,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] When below -15 SP, Final Power +3<br>"+
            "[On Use] When below -25 SP, Final Power +2"),
        new SkillDescriptionPart("[Tails Hit] Inflict 3 [Rupture]", 2),
        new SkillDescriptionPart("[Tails Hit] Inflict 3 [Rupture]", 3),
        new SkillDescriptionPart("Spend 5 [Sinking] to deal +20% damage<br>"+
            "[Tails Hit] Trigger [Tremor Burst]", 4)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Heathcliff/LobotomyEGOSunshower/PuddleStomp.png"
}

const LobotomyEgoSunshowerHeathcliffSkill3: Skill = {
    Name: "Spread Out!",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 18,
    Coins: 3,
    CoinValue: -7,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain 6 [Sinking] and +3 [Sinking] Count"),
        new SkillDescriptionPart("[Tails Hit] Inflict 1 [Paralyze] next turn", 1),
        new SkillDescriptionPart("[On Hit] Inflict 5 [Rupture]<br>"+
            "[Tails Hit] Inflict 1 [Fragile] next turn", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Heathcliff/LobotomyEGOSunshower/SpreadOut.png"
}

export const LobotomyEgoSunshowerHeathcliff: Identity = {
    Id: 10705,
    Name: "Lobotomy E.G.O::Sunshower",
    Sinner: SinnerEnum.Heathcliff,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 86,
    HealthPerLevel: 2.96,
    SpeedMin: 3,
    SpeedMax: 5,
    StaggerHpPercentThresholds: [55, 20],
    DefenseLevel: +2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [LobotomyEgoSunshowerHeathcliffSkill1, 
            LobotomyEgoSunshowerHeathcliffSkill2, 
            LobotomyEgoSunshowerHeathcliffSkill3, 
            LobotomyEgoSunshowerHeathcliffDefense],
    Passives: [
        new Passive("Rain of Tears",
            PassiveTypeEnum.Combat,
            "At the start of the combat phase, spend 1 [Sinking] Count and lose SP by the current amount of Sinking.<br>"+
            "Before being hit by an attack, gain [Protection] equal to this unit's [Sinking]. (Up to 5 [Protection] can be gained per turn)<br>"+
            "When hit, gain 1 [Blunt DMG Up] next turn. (3 per turn)",
            [{ sin: SinEnum.Envy, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Ragged Umbrella",
            PassiveTypeEnum.Support,
            "1 ally with the least SP loses 10 SP when hit by an attack and gains 1 [Blunt DMG Up] next turn. (Once per turn)",
            [{ sin: SinEnum.Envy, amount: 3 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Heathcliff/Identities/LobotomyEGOSunshower/10705gacksung.png",
    PortraitImageDir: "./assets/Sinners/Heathcliff/Identities/LobotomyEGOSunshower/10705gacksunginfo.png"
}