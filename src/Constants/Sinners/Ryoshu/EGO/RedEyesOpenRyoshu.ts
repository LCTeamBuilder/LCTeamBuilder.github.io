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

const RedEyesOpenRyoshuAwakening: Skill = {
    Name: "Red Eyes (Open)",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 22,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 3,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("If main target's Speed is lower than user's by 3 or more, +7 Coin Power"),
        new SkillDescriptionPart("[On Hit] If target has 3+ [Bind] , deal +40% damage<br>"+
            "[On Hit] If this skill staggers or defeats a target, heal user and the ally with the least HP by 10% of Max HP", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Ryoshu/EGO/RedEyesOpen/20404awakenprofile.png'
}

const RedEyesOpenRyoshuCorrosion: Skill = {
    Name: "Red Eyes (Open)",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 33,
    Coins: 1,
    CoinValue: -14,
    AttackWeight: 3,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "If main target's Speed is lower than user's by 3 or more, +10 Final Power"),
        new SkillDescriptionPart("[On Hit] If target has 3+ [Bind] , deal +40% damage<br>"+
            "[On Hit] If this skill staggers or defeats a target, heal user and the ally with the least HP by 10% of Max HP", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Ryoshu/EGO/RedEyesOpen/20404erosionprofile.png'
}

export const RedEyesOpenRyoshu: Ego = {
    Id: 20404,
    Name: "Red Eyes (Open)",
    Sinner: SinnerEnum.Ryoshu,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: RedEyesOpenRyoshuAwakening,
    AwakeningSanityCost: 25,
    CorrosionSkill: RedEyesOpenRyoshuCorrosion,
    CorrosionSanityCost: 25,
    Passive: new Passive("Predator", PassiveTypeEnum.Ego, "If this unit healed more than 10% of its Max HP this turn, gain 1 [Attack Power Up] next turn."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 0.75 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 2 },
                { sin: SinEnum.Envy, resistance: 0.5 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 2 },
            { sin: SinEnum.Lust, amount: 2 },
            { sin: SinEnum.Envy, amount: 3 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/Ryoshu/EGO/RedEyesOpen/20404cg.png'
}