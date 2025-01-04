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

const FourthMatchFlameRodionAwakening: Skill = {
    Name: "4th Match Flame",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 38,
    Coins: 1,
    CoinValue: -18,
    AttackWeight: 3,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict 6 [Burn]<br>"+
        "[On Hit] Inflict 3 [Wrath Fragility] next turn", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Rodion/EGO/4thMatchFlame/20902awakenprofile.png"
}

const FourthMatchFlameRodionCorrosion: Skill = {
    Name: "4th Match Flame",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 33,
    Coins: 1,
    CoinValue: -18,
    AttackWeight: 5,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly"),
        new SkillDescriptionPart("[On Hit] Inflict 6 [Burn]<br>"+
            "[On Hit] Inflict 3 [Wrath Fragility] next turn", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Rodion/EGO/4thMatchFlame/20902erosionprofile.png"
}

export const FourthMatchFlameRodion: Ego = {
    Id: 20902,
    Name: "4th Match Flame",
    Sinner: SinnerEnum.Rodion,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: FourthMatchFlameRodionAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: FourthMatchFlameRodionCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Spark of Flame", PassiveTypeEnum.Ego, "After defeating an enemy that has [Burn], heal HP by (Wrath A-Reson.)% of Max HP."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 0.5 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 0.75 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 3 },
            { sin: SinEnum.Pride, amount: 2 },
            { sin: SinEnum.Envy, amount: 1 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Rodion/EGO/4thMatchFlame/20902cg.png"
}