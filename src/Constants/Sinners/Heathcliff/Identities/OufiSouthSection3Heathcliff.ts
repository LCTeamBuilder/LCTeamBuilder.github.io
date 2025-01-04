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

const OufiSouthSection3HeathcliffDefense: Skill = {
    Name: "Do Not Obstruct",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 10,
    Coins: 1,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("When attacked while this unit has Shield, inflict +1 [Tremor] Count on the attacker (this Skill's effect does not stack with multiple uses)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: "assets/Icons/Skills/Sinners/Heathcliff/OufiAssocSouthSection3/DoNotObstructUT4.png"
}

const OufiSouthSection3HeathcliffSkill1: Skill = {
    Name: "Execution Advised",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Envy,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 3 [Tremor] on target (Max 2)"),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Tremor] Count", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Heathcliff/OufiAssocSouthSection3/ExecutionAdvised.png"
}

const OufiSouthSection3HeathcliffSkill2: Skill = {
    Name: "Final Warning",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 6 [Tremor] on target (Max 2)"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Tremor]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Tremor]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Heathcliff/OufiAssocSouthSection3/FinalWarning.png"
}

const OufiSouthSection3HeathcliffSkill3: Skill = {
    Name: "Execution Sentencing",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 6 [Tremor] on target (Max 2)"),
            new SkillDescriptionPart("[On Hit] Inflict 1 [Tremor]", 1),
            new SkillDescriptionPart("[On Hit] Inflict 1 [Tremor]", 2),
            new SkillDescriptionPart("[On Hit] If the sum of the target's [Tremor] Potency + Count is 20 or higher, trigger [Amplitude Conversion] on target, converting [Tremor] to [Tremor - Decay]", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Heathcliff/OufiAssocSouthSection3/ExecutionSentencing.png"
}

export const OufiSouthSection3Heathcliff: Identity = {
    Id: 10708,
    Name: "Öufi South Section 3",
    Sinner: SinnerEnum.Heathcliff,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 79,
    HealthPerLevel: 2.73,
    SpeedMin: 4,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [65, 35],
    DefenseLevel: -2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [OufiSouthSection3HeathcliffSkill1, 
            OufiSouthSection3HeathcliffSkill2, 
            OufiSouthSection3HeathcliffSkill3, 
            OufiSouthSection3HeathcliffDefense],
    Passives: [
        new Passive("Grave Attendance",
            PassiveTypeEnum.Combat,
            "Deal +10% more damage for every 6 [Tremor] Potency on target (Max 30%)<br>"+
            "When converting [Tremor] into [Tremor - Decay] with this unit's Skill effects, trigger [Tremor Burst] on target",
            [{ sin: SinEnum.Pride, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Verify Obligation Fulfillment",
            PassiveTypeEnum.Support,
            "To 1 ally with the fastest Speed: +1 Clash Power to Skills that apply [Tremor] Potency or Count",
            [{ sin: SinEnum.Pride, amount: 6 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Heathcliff/Identities/OufiAssociationSouthSection3/10708gacksung.png",
    PortraitImageDir: "./assets/Sinners/Heathcliff/Identities/OufiAssociationSouthSection3/10708gacksunginfo.png"
}