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

const LanternGregorAwakening: Skill = {
    Name: "Lantern",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 16,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 3,
    SkillLevel: -3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Heal 60% of damage dealt", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Gregor/EGO/Lantern/21203awakenprofile.png'
}

const LanternGregorCorrosion: Skill = {
    Name: "Lantern",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 19,
    Coins: 1,
    CoinValue: +4,
    AttackWeight: 5,
    SkillLevel: -3,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Target the unit with most health"),
        new SkillDescriptionPart("[On Hit] Heal 30% of damage dealt<br>"+
            "[Heads Hit] Inflict 5 [Rupture]", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Gregor/EGO/Lantern/21203erosionprofile.png'
}

export const LanternGregor: Ego = {
    Id: 21203,
    Name: "Lantern",
    Sinner: SinnerEnum.Gregor,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: LanternGregorAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: LanternGregorCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Nutrient Absorption", PassiveTypeEnum.Ego, "After defeating an enemy that has [Rupture], heal HP by (Gluttony A-Reson.)% of Max HP."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 0.5 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 2 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Sloth, amount: 1 },
            { sin: SinEnum.Gluttony, amount: 4 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/Gregor/EGO/Lantern/21203cg.png'
}