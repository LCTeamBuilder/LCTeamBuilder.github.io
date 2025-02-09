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

const FourthMatchFlameRyoshuAwakening: Skill = {
    Name: "4th Match Flame",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 21,
    Coins: 1,
    CoinValue: +16,
    AttackWeight: 3,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Skill power +2 against units with [Burn]<br>"+
            "Deal +5% damage per 1 [Burn] on target (Max 100%)<br>"+
            "[On Kill] Gain +2 [Attack Power Up] next turn"),
        new SkillDescriptionPart("[On Hit] Inflict 4 [Burn]", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Ryoshu/EGO/4thMatchFlame/20402awakenprofile.png'
}

const FourthMatchFlameRyoshuCorrosion: Skill = {
    Name: "4th Match Flame",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 42,
    Coins: 1,
    CoinValue: -22,
    AttackWeight: 3,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "Skill Power +4 against units with [Burn]<br>"+
            "Deal +5% damage per 1 [Burn] on target (Max 100%)<br>"+
            "[On Kill] Gain +3 [Attack Power Up] next turn<br>"+
            "[Failed Kill] Gain +3 [Attack Power Up] and 10 [Burn] next turn"),
        new SkillDescriptionPart("[On Hit] Inflict 4 [Burn]", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Ryoshu/EGO/4thMatchFlame/20402erosionprofile.png'
}

export const FourthMatchFlameRyoshu: Ego = {
    Id: 20402,
    Name: "4th Match Flame",
    Sinner: SinnerEnum.Ryoshu,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: FourthMatchFlameRyoshuAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: FourthMatchFlameRyoshuCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("4th Match Flame", PassiveTypeEnum.Ego, "Every 4th skill used gains +4 Final Power and inflicts 4 [Burn] with each of its attacks."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 0.5 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 0.75 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 4 },
            { sin: SinEnum.Pride, amount: 2 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/Ryoshu/EGO/4thMatchFlame/20402cg.png'
}