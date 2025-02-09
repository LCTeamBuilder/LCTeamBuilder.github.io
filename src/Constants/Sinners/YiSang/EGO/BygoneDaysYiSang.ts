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

const BygoneDaysYiSangAwakening: Skill = {
    Name: "Bygone Days",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 15,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 3,
    SkillLevel: +0,
    SkillDescription: 
        [new SkillDescriptionPart("[After Attack] Randomly inflict (6 + (Gloom Reson. x1.5)) [Sinking] between targets"),
        new SkillDescriptionPart("[On Hit] If the target has 6+ [Sinking], inflict 2 [Bind] next turn", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/YiSang/EGO/BygoneDays/20106awakenprofile.png'
}

const BygoneDaysYiSangCorrosion: Skill = {
    Name: "Bygone Days",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 22,
    Coins: 1,
    CoinValue: -6,
    AttackWeight: 3,
    SkillLevel: +0,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
        "Targets Randomly<br>"+
        "[Before Attack] At 3+ (Gloom Reson.), Atk Weight +1<br>"+
        "[Before Attack] At 5+ (Gloom Reson.), additional Atk Weight +1"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking]. Inflict 2 [Bind] next turn<br>"+
        "[On Hit] If the target has 6+ [Sinking], inflict 2 [Bind] next turn", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/YiSang/EGO/BygoneDays/20106erosionprofile.png'
}

export const BygoneDaysYiSang: Ego = {
    Id: 20106,
    Name: "Bygone Days",
    Sinner: SinnerEnum.YiSang,
    RiskLevel: RiskLevelEnum.ZAYIN,
    AwakeningSkill: BygoneDaysYiSangAwakening,
    AwakeningSanityCost: 15,
    CorrosionSkill: BygoneDaysYiSangCorrosion,
    CorrosionSanityCost: 15,
    Passive: new Passive("Fractured Yesterday", PassiveTypeEnum.Ego, 
                    "If the target has 6+ [Sinking] Potency, Clash Power +1<br>"+
                    "If the target has 4+ [Sinking] Count, Clash Power +1"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 0.75 },
                { sin: SinEnum.Pride, resistance: 2 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Sloth, amount: 3},
            { sin: SinEnum.Gloom, amount: 3}],
    Keywords: [],
    FullImageDir: './assets/Sinners/YiSang/EGO/BygoneDays/20106cg.png'
}