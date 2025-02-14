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

const ImpendingDaySinclairAwakening: Skill = {
    Name: "Impending Day",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 28,
    Coins: 1,
    CoinValue: -8,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("If target's HP is below 25%, +40% Damage"),
        new SkillDescriptionPart("[On Kill] Gain 1 [Attack Power Up] next turn<br>"+
            "[On Kill] Heal all allies for 15% of their Max HP", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Sinclair/EGO/ImpendingDay/21002awakenprofile.png'
}

const ImpendingDaySinclairCorrosion: Skill = {
    Name: "Impending Day",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 28,
    Coins: 1,
    CoinValue: -8,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "If target's HP is below 25%, +50% Damage"),
        new SkillDescriptionPart("[Failed Kill] Gain 10 [Bleed] next turn<br>"+
            "[Failed Kill] Gain 3 [Attack Power Up] next turn", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Sinclair/EGO/ImpendingDay/21002erosionprofile.png'
}

export const ImpendingDaySinclair: Ego = {
    Id: 21002,
    Name: "Impending Day",
    Sinner: SinnerEnum.Sinclair,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: ImpendingDaySinclairAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: ImpendingDaySinclairCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Live Offering", PassiveTypeEnum.Ego, "After defeating an enemy with an attack or counter skill, gain 5 E.G.O resources of that skill's Affinity."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 0.5 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 3 },
            { sin: SinEnum.Lust, amount: 2 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/Sinclair/EGO/ImpendingDay/21002cg.png'
}