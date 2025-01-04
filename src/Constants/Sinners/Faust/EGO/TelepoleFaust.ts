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

const TelepoleFaustAwakening: Skill = {
    Name: "Telepole",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 22,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 3,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict 3 [Paralyze]<br>"+
            "[After Attack] Gain +7 [Charge] Count<br>"+
            "[Heads Attack End] Apply 1 [Envy Power Up] and 1 [Haste] to 2 random allies next turn, and this unit gains +3 [Charge] Count", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Faust/EGO/Telepole/20204awakenprofile.png"
}

const TelepoleFaustCorrosion: Skill = {
    Name: "Telepole",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 24,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 3,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly"),
        new SkillDescriptionPart("[On Hit] Inflict 5 [Paralyze]<br>"+
            "[After Attack] Gain +10 [Charge] Count<br>"+
            "[Tails Attack End] Inflict 2 [Paralyze] and 2 [Bind] on 2 random units next turn, gain +3 [Charge] Count", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Faust/EGO/Telepole/20204erosionprofile.png"
}

export const TelepoleFaust: Ego = {
    Id: 20204,
    Name: "Telepole",
    Sinner: SinnerEnum.Faust,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: TelepoleFaustAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: TelepoleFaustCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Adaptive Release", PassiveTypeEnum.Ego, "While this unit has [Charge], deal +2% damage per [Charge] Count.<br>"+
        "Skills spend -2 [Charge] Count."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 2 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 0.75 },
                { sin: SinEnum.Envy, resistance: 0.5 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 1 },
            { sin: SinEnum.Lust, amount: 3 },
            { sin: SinEnum.Envy, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Faust/EGO/Telepole/20204cg.png"
}