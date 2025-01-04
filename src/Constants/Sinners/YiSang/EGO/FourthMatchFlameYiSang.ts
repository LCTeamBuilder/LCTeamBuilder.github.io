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

const FourthMatchFlameYiSangAwakening: Skill = {
    Name: "4th Match Flame",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 12,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 5,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict 4 [Burn]<br>"+
            "[Heads Hit] Inflict 6 [Burn]", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/YiSang/EGO/4thMatchFlame/20102awakenprofile.png"
}

const FourthMatchFlameYiSangCorrosion: Skill = {
    Name: "4th Match Flame",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 24,
    Coins: 1,
    CoinValue: -12,
    AttackWeight: 5,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly"),
        new SkillDescriptionPart("[On Hit] Inflict 4 [Burn]<br>"+
            "[Heads Hit] Inflict 6 [Burn]", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/YiSang/EGO/4thMatchFlame/20102erosionprofile.png"
}

export const FourthMatchFlameYiSang: Ego = {
    Id: 20102,
    Name: "4th Match Flame",
    Sinner: SinnerEnum.YiSang,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: FourthMatchFlameYiSangAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: FourthMatchFlameYiSangCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Ember", PassiveTypeEnum.Ego, "On clash win, inflict [Burn] by (Wrath A-Reson. / 2). (Once per skill.)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 0.5 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 5 },
            { sin: SinEnum.Sloth, amount: 1 },
            { sin: SinEnum.Gluttony, amount: 1 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/YiSang/EGO/4thMatchFlame/20102cg.png"
}