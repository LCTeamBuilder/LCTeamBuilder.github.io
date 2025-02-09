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

const FluidSacFaustAwakening: Skill = {
    Name: "Fluid Sac",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 16,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 5,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("[After Attack] Heal 15 SP for all allies<br>"+
            "[After Attack] Heal all allies for 15% of Max HP<br>"+
            "[Heads Attack End] Heal 10 SP for all allies", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Faust/EGO/FluidSac/20202awakenprofile.png'
}

const FluidSacFaustCorrosion: Skill = {
    Name: "Fluid Sac",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 29,
    Coins: 1,
    CoinValue: -14,
    AttackWeight: 5,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly"),
        new SkillDescriptionPart("[On Hit] Deal 20 SP damage<br>"+
            "[Tails Hit] Deal 10 SP damage<br>"+
            "[On Hit] Inflict 2 [Attack Power Down] next turn", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Faust/EGO/FluidSac/20202erosionprofile.png'
}

export const FluidSacFaust: Ego = {
    Id: 20202,
    Name: "Fluid Sac",
    Sinner: SinnerEnum.Faust,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: FluidSacFaustAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: FluidSacFaustCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Liquid Veil", PassiveTypeEnum.Ego, "At the start of the turn, apply 2 [Protection] to the ally with the least HP. (Including self.)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 0.75 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 0.5 },
                { sin: SinEnum.Pride, resistance: 2 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Lust, amount: 2 },
            { sin: SinEnum.Gloom, amount: 4 },
            { sin: SinEnum.Envy, amount: 3 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/Faust/EGO/FluidSac/20202cg.png'
}