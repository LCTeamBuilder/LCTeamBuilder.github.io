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

const LobotomyEgoSloshingIshmaelDefense: Skill = {
    Name: "Guard",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 15,
    Coins: 1,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +4 [Aggro] to this Skill Slot next turn")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ishmael/LobotomyEGOSloshing/GuardUT4.png'
}

const LobotomyEgoSloshingIshmaelSkill1: Skill = {
    Name: "It's Heavy...!",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +4 [Aggro] to this Skill Slot next turn<br>"+
            "[Clash Lose] Inflict 2 [Tremor] and 2 [Rupture]"),
        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Tremor]<br>"+
            "[On Hit] Inflict +1 [Tremor] Count", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ishmael/LobotomyEGOSloshing/ItsHeavy.png'
}

const LobotomyEgoSloshingIshmaelSkill2: Skill = {
    Name: "It's Churning...!",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Wrath,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +4 [Aggro] to this Skill Slot next turn<br>"+
            "[Clash Lose] Inflict 3 [Tremor] and 3 [Rupture]"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Tremor]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Tremor]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ishmael/LobotomyEGOSloshing/ItsChurning.png'
}

const LobotomyEgoSloshingIshmaelSkill3: Skill = {
    Name: "Corrosive Splash",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 6,
    Coins: 1,
    CoinValue: +16,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +4 [Aggro] to this Skill Slot next turn<br>"+
            "[Clash Lose] Inflict 5 [Tremor] and 5 [Rupture]"),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]<br>"+
            "After bursting [Tremor], reduce [Tremor] Count by 4. Inflict 5 [Rupture]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ishmael/LobotomyEGOSloshing/CorrosiveSplash.png'
}

export const LobotomyEgoSloshingIshmael: Identity = {
    Id: 10805,
    Name: "Lobotomy E.G.O::Sloshing",
    Sinner: SinnerEnum.Ishmael,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 90,
    HealthPerLevel: 3.1,
    SpeedMin: 2,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [50, 20],
    DefenseLevel: 0,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [LobotomyEgoSloshingIshmaelSkill1, 
            LobotomyEgoSloshingIshmaelSkill2, 
            LobotomyEgoSloshingIshmaelSkill3, 
            LobotomyEgoSloshingIshmaelDefense],
    Passives: [
        new Passive("Filling Fluid",
            PassiveTypeEnum.Combat,
            "If this unit fails to deal HP damage using attack Skills in a turn, gain a Shield equal to 10% of Max HP next turn. (Max 30)",
            [{ sin: SinEnum.Gloom, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Corrosive Slime",
            PassiveTypeEnum.Support,
            "When 1 ally with the highest Speed triggers [Tremor Burst], they inflict 2 [Rupture].",
            [{ sin: SinEnum.Gloom, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Ishmael/Identities/LobotomyEGOSloshing/10805gacksung.png',
    PortraitImageDir: './assets/Sinners/Ishmael/Identities/LobotomyEGOSloshing/10805gacksunginfo.png'
}