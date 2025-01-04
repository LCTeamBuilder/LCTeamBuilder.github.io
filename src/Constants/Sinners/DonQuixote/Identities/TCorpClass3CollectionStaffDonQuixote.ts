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
import { Identity } from "../../../../Models/Identity";
import { Passive } from "../../../../Models/Passive";
import { Skill } from "../../../../Models/Skill";
import { SkillDescriptionPart } from "../../../../Models/SkillDescriptionPart";

const TCorpClass3CollectionStaffDonQuixoteDefense: Skill = {
    Name: "I Shall Summon the Time",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 15,
    Coins: 1,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] If this unit is not in a [Borrowed Time] state, gain 4 [Borrowed Time] at Turn End (once per turn)<br>"+
            "[On Use] For this turn: when hit by an enemy, inflict 3 [Tremor] on target next turn (6 times per turn)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/TCorpClass3CollectionStaff/IShallSummonTheTimeUT4.png"
}

const TCorpClass3CollectionStaffDonQuixoteSkill1: Skill = {
    Name: "Let Us Prepare To Collect",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +2 [Tremor] Count<br>"+
            "[On Use] Gain Clash Power +1 for every 6 [Tremor] on target (max 2)<br>"+
            "[On Use] Gain +3 [Aggro] to this Skill Slot next turn"),
        new SkillDescriptionPart("[On Hit] Gain +4 [Aggro] to this Skill Slot next turn", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Tremor]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/TCorpClass3CollectionStaff/LetUsPrepareToCollect.png"
}

const TCorpClass3CollectionStaffDonQuixoteSkill2: Skill = {
    Name: "T Corp. Accelerated Amputator",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +3 [Tremor] Count<br>"+
            "[On Use] Clash Power +1 for every 6 [Tremor] on target (max 2)"),
        new SkillDescriptionPart("[On Hit] Consume up to 3 [Tremor] on target, and gain double the amount consumed as [Tremor] Count on self<br>"+
            "Inflict ([Tremor] - 1) [Bind] next turn", 1),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Tremor]", 2),
        new SkillDescriptionPart("[On Hit] If this Skill's Coin effects consumed [Tremor] on target, trigger [Tremor Burst], then, reduce target's [Tremor] Count by 1", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/TCorpClass3CollectionStaff/TCorpAcceleratedAmputator.png"
}

const TCorpClass3CollectionStaffDonQuixoteSkill3: Skill = {
    Name: "I Command Thee, Halt!",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] +1 Clash Power for every 6 [Tremor] on target (max 2)<br>"+
            "[On Use] If the target has [Bind], gain Clash Power +1<br>"+
            "[On Use] Consume 10 [Tremor] Count on self to gain Coin Power +2"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Tremor]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Tremor]", 2),
        new SkillDescriptionPart("[On Hit] If the target has 10+ [Tremor] , consume 10 [Tremor] on target and inflict 2 [Time Moratorium]<br>"+
            "[On Hit] If this unit is in a [Borrowed Time] state, this effect does not consume the target's [Tremor]<br>"+
            "[On Hit] Trigger [Tremor Burst], then, reduce target's [Tremor] Count by 1<br>"+
            "[On Hit] If the target's Speed is slower than this unit's, trigger [Amplitude Conversion] into [Tremor - Chain]", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/TCorpClass3CollectionStaff/ICommandTheeHalt.png"
}

export const TCorpClass3CollectionStaffDonQuixote: Identity = {
    Id: 10309,
    Name: "T Corp. Class 3 Collection Staff",
    Sinner: SinnerEnum.DonQuixote,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 95,
    HealthPerLevel: 3.26,
    SpeedMin: 4,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [50],
    DefenseLevel: +4,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [TCorpClass3CollectionStaffDonQuixoteSkill1, 
            TCorpClass3CollectionStaffDonQuixoteSkill2, 
            TCorpClass3CollectionStaffDonQuixoteSkill3, 
            TCorpClass3CollectionStaffDonQuixoteDefense],
    Passives: [
        new Passive("Golden Time - Extracting",
            PassiveTypeEnum.Combat,
            "Turn End: If this unit's HP is between 10% - 20%, instantly heal 80% of this unit's max HP, and recover from Stagger. (once per Encounter)<br><br>"+

            "When this unit loses [Borrowed Time], gain +8 [Aggro] to one of this unit's Skill Slots next turn",
            [{ sin: SinEnum.Sloth, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("T Corp. Physics Distortion Field",
            PassiveTypeEnum.Support,
            "When 1 ally with the slowest Speed takes damage from enemies with [Tremor] , take -10% less damage",
            [{ sin: SinEnum.Sloth, amount: 3 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/DonQuixote/Identities/TCorpClass3CollectionStaff/10309gacksung.png",
    PortraitImageDir: "./assets/Sinners/DonQuixote/Identities/TCorpClass3CollectionStaff/10309gacksunginfo.png"
}