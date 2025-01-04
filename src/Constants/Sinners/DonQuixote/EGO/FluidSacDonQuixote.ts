import {
    DamageTypeEnum,
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../Enums/Index";
import { Ego, Passive, Skill, SkillDescriptionPart } from "../../../../Models/Index";

const FluidSacDonQuixoteAwakening: Skill = {
    Name: "Fluid Sac",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 20,
    Coins: 1,
    CoinValue: +18,
    AttackWeight: 3,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]<br>"+
            "[On Hit] Deal 25 SP damage<br>"+
            "If target is Staggered, in Low Morale, or in Panic, deal 30% of damage dealt as bonus damage<br>"+
            "[On Hit] Inflict 2 [Sinking]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/DonQuixote/EGO/FluidSac/20302awakenprofile.png"
}

const FluidSacDonQuixoteCorrosion: Skill = {
    Name: "Fluid Sac",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 42,
    Coins: 1,
    CoinValue: -25,
    AttackWeight: 3,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
        "Targets randomly"),
        new SkillDescriptionPart("[On Hit] Inflict 10 [Tremor]<br>"+
        "[On Hit] Inflict 10 [Sinking]<br>"+
        "If target is NOT Staggered, in Low Morale, nor in Panic, deal 50% of damage dealt as bonus damage", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/DonQuixote/EGO/FluidSac/20302erosionprofile.png"
}

export const FluidSacDonQuixote: Ego = {
    Id: 20302,
    Name: "Fluid Sac",
    Sinner: SinnerEnum.DonQuixote,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: FluidSacDonQuixoteAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: FluidSacDonQuixoteCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Wave of Depression", PassiveTypeEnum.Ego, 
                "The target of the rightmost skill on the Dashboard loses SP by (2x Gloom A-Reson.) after the attack.<br>"+
                "(Targets without SP values take Gloom damage instead.)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 0.75 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 0.5 },
                { sin: SinEnum.Pride, resistance: 2 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Lust, amount: 1 },
            { sin: SinEnum.Gloom, amount: 4 },
            { sin: SinEnum.Pride, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/DonQuixote/EGO/FluidSac/20302cg.png"
}