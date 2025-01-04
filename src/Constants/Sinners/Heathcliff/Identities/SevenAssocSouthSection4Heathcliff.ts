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

const SevenAssocSouthSection4HeathcliffDefense: Skill = {
    Name: "Guard",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Wrath,
    BaseValue: 8,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: 
        [],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: "assets/Icons/Skills/Sinners/Heathcliff/SevenAssociationSouthSection4/GuardUT4.png"
}

const SevenAssocSouthSection4HeathcliffSkill1: Skill = {
    Name: "Intuition",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Wrath,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 6+ [Rupture], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]<br>"+
            "[Heads Hit] Inflict 1 [Rupture]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]<br>"+
            "[Heads Hit] Inflict 1 [Rupture]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Heathcliff/SevenAssociationSouthSection4/Intuition.png"
}

const SevenAssocSouthSection4HeathcliffSkill2: Skill = {
    Name: "The Wrap—Up",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 6,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[Clash Win] Inflict +1 [Rupture] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Defense Level Down] next turn<br>"+
        "[On Hit] Inflict +2 [Rupture] Count", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Heathcliff/SevenAssociationSouthSection4/TheWrapup.png"
}

const SevenAssocSouthSection4HeathcliffSkill3: Skill = {
    Name: "Forensics",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 6+ [Rupture], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Rupture] Count", 1),
        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Rupture]", 2),
        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Rupture]", 3),
        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Rupture]<br>"+
            "[On Kill] Inflict +2 [Rupture] Count against the enemy with the lowest [Rupture] Count")],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Heathcliff/SevenAssociationSouthSection4/Forensics.png"
}

export const SevenAssocSouthSection4Heathcliff: Identity = {
    Id: 10706,
    Name: "Seven Assoc. South Section 4",
    Sinner: SinnerEnum.Heathcliff,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 76,
    HealthPerLevel: 2.7,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: -1,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [SevenAssocSouthSection4HeathcliffSkill1, 
            SevenAssocSouthSection4HeathcliffSkill2, 
            SevenAssocSouthSection4HeathcliffSkill3, 
            SevenAssocSouthSection4HeathcliffDefense],
    Passives: [
        new Passive("Instinctive Read",
            PassiveTypeEnum.Combat,
            'When attacking a target with a damage type the target is "Fatal" (Resistance>x1.5) to, inflict +1 more [Rupture] with Skill effects<br>'+
            "If 4 or more surviving units, including this unit, are Seven Association Fixers, additional +1 more [Rupture]",
            [{ sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Connect The Dots",
            PassiveTypeEnum.Support,
            '1 ally with the highest Max HP inflicts +1 more [Rupture] with Skill effects when attacking a target with a damage type that the target is "Fatal" (Resistance>x1.5) to<br>'+
            "If the ally is a Seven Association Fixer, additional +1 more [Rupture]",
            [{ sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Heathcliff/Identities/SevenAssociationSouthSection4/10706gacksung.png",
    PortraitImageDir: "./assets/Sinners/Heathcliff/Identities/SevenAssociationSouthSection4/10706gacksunginfo.png"
}