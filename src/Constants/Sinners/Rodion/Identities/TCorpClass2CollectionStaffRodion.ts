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

const TCorpClass2CollectionStaffRodionDefense: Skill = {
    Name: "Borrow Time",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 15,
    Coins: 1,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] If this unit is not in a [Borrowed Time] state, gain 3 [Borrowed Time] at Turn End (once per turn)<br>"+
            "[On Use] For this turn: when hit by an enemy, inflict 2 [Tremor] on target next turn (6 times per turn)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/TCorpClass2CollectionStaff/BorrowTimeUT4.png"
}

const TCorpClass2CollectionStaffRodionSkill1: Skill = {
    Name: "Prepare To Collect",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Envy,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +2 [Tremor] Count<br>"+
            "[On Use] Clash Power +1 for every 6 [Tremor] on target (max 2)"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Tremor]", 1),
        new SkillDescriptionPart("[On Hit] Gain +1 [Tremor] Count<br>"+
            "[Hit After Clash Win] Inflict +1 [Tremor] Count", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/TCorpClass2CollectionStaff/PrepareToCollect.png"
}

const TCorpClass2CollectionStaffRodionSkill2: Skill = {
    Name: "T Corp. Martial Suppression",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("Deal +5% more damage for every [Bind] on target (max 15%)<br>"+
            "[On Use] Gain +2 [Tremor] Count<br>"+
            "[On Use] Clash Power +1 for every 6 [Tremor] on target (max 2)"),
        new SkillDescriptionPart("[On Hit] Gain +2 [Tremor] Count<br>"+
            "[Hit After Clash Win] Inflict +3 [Tremor] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bind] next turn<br>"+
            "[On Hit] If the target has 6+ [Tremor], inflict 1 [Bind] next turn", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/TCorpClass2CollectionStaff/TCorpMartialSuppression.png"
}

const TCorpClass2CollectionStaffRodionSkill3: Skill = {
    Name: "Execute Collections",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 2,
    Coins: 4,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("Deal +5% more damage for every [Bind] on target (max 20%)<br>"+
            "[On Use] If the target has 8+ [Tremor], Clash Power +2<br>"+
            "[On Use] Consume 8 [Tremor] Count on self to gain Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Tremor] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Tremor]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Tremor]", 3),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bind] next turn<br>"+
            "[On Hit] If this unit consumed [Tremor] Count with Skill use, inflict 2 [Bind] next turn<br>"+
            "[On Hit] If this unit is in a [Borrowed Time] state, inflict 2 [Time Moratorium]<br>"+
            "[On Hit] Trigger [Tremor Burst], then, reduce target's [Tremor] Count by 1", 4)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/TCorpClass2CollectionStaff/ExecuteCollections.png"
}

export const TCorpClass2CollectionStaffRodion: Identity = {
    Id: 10909,
    Name: "T Corp. Class 2 Collection Staff",
    Sinner: SinnerEnum.Rodion,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 86,
    HealthPerLevel: 2.96,
    SpeedMin: 4,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: -1,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [TCorpClass2CollectionStaffRodionSkill1, 
            TCorpClass2CollectionStaffRodionSkill2, 
            TCorpClass2CollectionStaffRodionSkill3, 
            TCorpClass2CollectionStaffRodionDefense],
    Passives: [
        new Passive("Golden Time - Standoff",
            PassiveTypeEnum.Combat,
            "Turn End: If this unit's HP is between 16% - 20%, instantly heal up to 60% of Max HP, and recover from Stagger. (once per Encounter)<br>"+
            "When Clashing against targets with [Time Moratorium], Clash Power +2<br>"+
            "Take -10% less damage from targets with [Time Moratorium]",
            [{ sin: SinEnum.Sloth, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("T Corp. Martial Arts",
            PassiveTypeEnum.Support,
            "To 1 ally with the fastest Speed: +1 Clash Power when Clashing against targets with 5+ Tremor",
            [{ sin: SinEnum.Sloth, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Rodion/Identities/TCorpClass2CollectionStaff/10909gacksung.png",
    PortraitImageDir: "./assets/Sinners/Rodion/Identities/TCorpClass2CollectionStaff/10909gacksunginfo.png"
}