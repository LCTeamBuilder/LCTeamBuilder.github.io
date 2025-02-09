import {
    DamageTypeEnum,
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum,
    SkillTierEnum,
    SkillTypeEnum
} from '../../../../Enums/Index';
import { Ego, Passive, Skill, SkillDescriptionPart } from '../../../../Models/Index';

const LifetimeStewDonQuixoteAwakening: Skill = {
    Name: "Lifetime Stew",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 21,
    Coins: 1,
    CoinValue: +4,
    AttackWeight: 3,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] Boost damage based on current Lust resources (Up to 50%)"),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Burn] Count", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/DonQuixote/EGO/LifetimeStew/20304awakenprofile.png'
}

const LifetimeStewDonQuixoteCorrosion: Skill = {
    Name: "Lifetime Stew",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 22,
    Coins: 1,
    CoinValue: +5,
    AttackWeight: 3,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
        "Targets the unit with the most HP<br>"+
        "[Before Attack] Boost damage based on current Lust resources (Up to 50%)<br>"+
        "Then spend Lust resources by (Lust Reson.), further boost damage by 10% per resource spent"),
        new SkillDescriptionPart("[On Hit] Inflict +4 [Burn] Count", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/DonQuixote/EGO/LifetimeStew/20304erosionprofile.png'
}

export const LifetimeStewDonQuixote: Ego = {
    Id: 20304,
    Name: "Lifetime Stew",
    Sinner: SinnerEnum.DonQuixote,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: LifetimeStewDonQuixoteAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: LifetimeStewDonQuixoteCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Cauldron of Gorging", PassiveTypeEnum.Ego, "At the start of the turn, convert 2 random non-Lust E.G.O resources into 1 Lust resource."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 0.5 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Lust, amount: 5 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/DonQuixote/EGO/LifetimeStew/20304cg.png'
}