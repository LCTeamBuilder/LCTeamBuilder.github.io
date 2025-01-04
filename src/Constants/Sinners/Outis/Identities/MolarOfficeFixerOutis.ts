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

const MolarOfficeFixerOutisDefense: Skill = {
    Name: "Hangover Cure",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 12,
    Coins: 1,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: -3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] [Discard] the Skill of lowest rank in all of this unit's Skill Slots")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/MolarOfficeFixer/HangoverCureUT4.png"
}

const MolarOfficeFixerOutisSkill1: Skill = {
    Name: "Wait Up!",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("If this Skill is Discarded, gain +4 [Tremor] Count<br>"+
            "[On Use] Gain +2 [Tremor] Count<br>"+
            "At 6+ [Tremor] Count, gain +2 Final Power"),
        new SkillDescriptionPart("[On Hit] Lower user's Stagger Threshold for every [Tremor] Count on self (Max 10)", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/MolarOfficeFixer/WaitUp.png"
}

const MolarOfficeFixerOutisSkill2: Skill = {
    Name: "Slice",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Lust,
    BaseValue: 3,
    Coins: 3,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("If this Skill is Discarded, gain 1 [Offense Level Up]<br>"+
            "[On Use] [Discard] the Skill of lowest rank in all of this unit's Skill Slots"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Tremor]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Tremor]", 2),
        new SkillDescriptionPart("[On Hit] At 6+ [Tremor] Count, Trigger [Tremor Burst]. Reduce target's [Tremor] Count by 1", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/MolarOfficeFixer/Slice.png"
}

const MolarOfficeFixerOutisSkill3: Skill = {
    Name: "Daring Decision",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] [Discard] this unit's Skills in descending order of ranks from all of its Skill Slots<br>"+
            "Spend 10 [Tremor] Count to gain Coin Power +2"),
        new SkillDescriptionPart("[On Hit] Inflict 4 [Tremor]<br>"+
            "[On Hit] If the Skill spent [Tremor] Count, inflict +3 [Tremor] Count", 1),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst], After [Tremor Burst], reduce target's [Tremor] Count by 1", 2),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst], After [Tremor Burst], reduce target's [Tremor] Count by 1", 3),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst], After [Tremor Burst], reduce target's [Tremor] Count by 1", 4)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/MolarOfficeFixer/DaringDecision.png"
}

export const MolarOfficeFixerOutis: Identity = {
    Id: 11105,
    Name: "Molar Office Fixer",
    Sinner: SinnerEnum.Outis,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 68,
    HealthPerLevel: 2.39,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: -3,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [MolarOfficeFixerOutisSkill1, 
            MolarOfficeFixerOutisSkill2, 
            MolarOfficeFixerOutisSkill3, 
            MolarOfficeFixerOutisDefense],
    Passives: [
        new Passive("Drinking Boast",
            PassiveTypeEnum.Combat,
            "Upon triggering [Tremor Burst] on an enemy, inflict 30% of Raised Stagger Threshold as Sloth damage (Max 20, rounded down)",
            [{ sin: SinEnum.Sloth, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Carrot & Stick",
            PassiveTypeEnum.Support,
            "1 ally with the most [Tremor] Count gains +1 more [Tremor] Count from Skill effects",
            [{ sin: SinEnum.Sloth, amount: 3 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Outis/Identities/MolarOfficeFixer/11105gacksung.png",
    PortraitImageDir: "./assets/Sinners/Outis/Identities/MolarOfficeFixer/11105gacksunginfo.png"
}