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

const EffervescentCorrosionRodionAwakening: Skill = {
    Name: "Effervescent Corrosion",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 20,
    Coins: 1,
    CoinValue: +5,
    AttackWeight: 2,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] If main target has 50%+ hp, +1 Atk Weight,<br>"+
            "If main target has 75%+ hp, additional +1 Atk Weight"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Tremor] and +7 [Tremor] Count<br>"+
            "[Heads Hit] Inflict 2 [Bind] next turn<br>"+
            "[On Hit] Trigger [Tremor Burst]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Rodion/EGO/EffervescentCorrosion/20904awakenprofile.png"
}

const EffervescentCorrosionRodionCorrosion: Skill = {
    Name: "Effervescent Corrosion",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 27,
    Coins: 1,
    CoinValue: -10,
    AttackWeight: 2,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly<br>"+
            "[Before Attack] if main target has 50%+ hp, +1 Atk Weight,<br>"+
            "If main target has 75%+ hp, additional +1 Atk Weight"),
        new SkillDescriptionPart("[On Hit] Heal 30% of damage dealt<br>"+
            "[On Hit] Inflict 5 [Defense Level Down]<br>"+
            "[On Hit] Trigger [Tremor Burst]", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Rodion/EGO/EffervescentCorrosion/20904erosionprofile.png"
}

export const EffervescentCorrosionRodion: Ego = {
    Id: 20904,
    Name: "Effervescent Corrosion",
    Sinner: SinnerEnum.Rodion,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: EffervescentCorrosionRodionAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: EffervescentCorrosionRodionCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Sticky Filth", PassiveTypeEnum.Ego, "On Heads Hit with a Pierce Skill, inflict 1 [Bind] (2 times per turn)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 0.5 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Sloth, amount: 2 },
            { sin: SinEnum.Gloom, amount: 2 },
            { sin: SinEnum.Pride, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Rodion/EGO/EffervescentCorrosion/20904cg.png"
}