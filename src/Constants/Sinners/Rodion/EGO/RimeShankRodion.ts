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

const RimeShankRodionAwakening: Skill = {
    Name: "Rime Shank",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 15,
    Coins: 1,
    CoinValue: +15,
    AttackWeight: 3,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("If target's HP is above 50%, deal +30% damage"),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]<br>"+
            "[On Hit] Inflict 5 [Sinking]<br>"+
            "[On Hit] Inflict +5 [Sinking] Count", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Rodion/EGO/RimeShank/20903awakenprofile.png"
}

const RimeShankRodionCorrosion: Skill = {
    Name: "Rime Shank",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 21,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 3,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets the unit with the most HP<br>"+
            "If target's HP is above 50%, deal +30% damage"),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]<br>"+
            "[On Hit] Inflict 10 [Sinking]<br>"+
            "[On Hit] Inflict +8 [Sinking] Count", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Rodion/EGO/RimeShank/20903erosionprofile.png"
}

export const RimeShankRodion: Ego = {
    Id: 20903,
    Name: "Rime Shank",
    Sinner: SinnerEnum.Rodion,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: RimeShankRodionAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: RimeShankRodionCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Coldness", PassiveTypeEnum.Ego, "On hit, if the target has 5+ [Sinking], inflict 1 [Bind] and [Attack Power Down]. (3 times per unit.)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 0.5 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Gloom, amount: 5 },
            { sin: SinEnum.Envy, amount: 3 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Rodion/EGO/RimeShank/20903cg.png"
}