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

const SodaHongLuAwakening: Skill = {
    Name: "Soda",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 20,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 3,
    SkillLevel: -5,
    SkillDescription: 
        [new SkillDescriptionPart("[Heads Attack End] Heal 2 allies with the lowest HP percentages for 15 HP<br>"+
            "[Tails Attack End] Heal 15 SP for 2 allies with the least SP<br>"+
            "[Crit Attack End] Heal the ally with the lowest HP percentage for 8 HP, Heal the ally with the least SP for 8 SP", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/HongLu/EGO/Soda/20604awakenprofile.png"
}

const SodaHongLuCorrosion: Skill = {
    Name: "Soda",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 25,
    Coins: 1,
    CoinValue: -15,
    AttackWeight: 3,
    SkillLevel: -3,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate] Targets the unit with the least HP"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bind] next turn<br>"+
            "[On Hit] Inflict 5 [Tremor]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/HongLu/EGO/Soda/20604erosionprofile.png"
}

export const SodaHongLu: Ego = {
    Id: 20604,
    Name: "Soda",
    Sinner: SinnerEnum.HongLu,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: SodaHongLuAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: SodaHongLuCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Seagull Squawking Of The Distant Seas", PassiveTypeEnum.Ego, "When an enemy is defeated, the ally with the least SP heals 1 SP. Whenever an enemy is defeated, the amount of SP healed increases by 2. (Max 9) The amount is reset at the start of a new wave."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 0.5 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Gluttony, amount: 3 },
            { sin: SinEnum.Gloom, amount: 2 },
            { sin: SinEnum.Envy, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/HongLu/EGO/Soda/20604cg.png"
}