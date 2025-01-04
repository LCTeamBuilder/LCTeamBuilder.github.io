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

const EffervescentCorrosionHongLuAwakening: Skill = {
    Name: "Effervescent Corrosion",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 17,
    Coins: 1,
    CoinValue: +15,
    AttackWeight: 2,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] At 50%- HP, +1 Atk Weight<br>"+
            "At 25%- HP, gain an additiona +1 Atk Weight"),
        new SkillDescriptionPart("[On Hit] Inflict [Rupture] by (Gluttony Reson. /2)<br>"+
            "[On Hit] Inflict 2 [Gluttony Fragility] next turn<br>"+
            "[On Hit] Inflict 2 [Bind] next turn", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/HongLu/EGO/EffervescentCorrosion/20605awakenprofile.png"
}

const EffervescentCorrosionHongLuCorrosion: Skill = {
    Name: "Effervescent Corrosion",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 27,
    Coins: 1,
    CoinValue: -12,
    AttackWeight: 3,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Target the unit with the least HP<br>"+
            "[Before Attack] At 50%- HP, +1 Atk Weight<br>"+
            "At 25%- HP, gain an additiona +1 Atk Weight"),
        new SkillDescriptionPart("[On Hit] Inflict [Rupture] Count by (Gluttony Reson. /3)<br>"+
            "[On Hit] Heal 50% of damage dealt<br>"+
            "[On Hit] Inflict 2 [Bind] next turn", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/HongLu/EGO/EffervescentCorrosion/20605awakenprofile.png"
}

export const EffervescentCorrosionHongLu: Ego = {
    Id: 20605,
    Name: "Effervescent Corrosion",
    Sinner: SinnerEnum.HongLu,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: EffervescentCorrosionHongLuAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: EffervescentCorrosionHongLuCorrosion,
    CorrosionSanityCost: 25,
    Passive: new Passive("Green Slime", PassiveTypeEnum.Ego, "If struck at less than 50% HP, inflict 1 [Rupture] on the attacker. (Activates (Highest Gluttony A-Reson) times per turn)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 0.5 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 0.75 }],
    Cost: [{ sin: SinEnum.Gluttony, amount: 6 },
            { sin: SinEnum.Gloom, amount: 1 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/HongLu/EGO/EffervescentCorrosion/20605cg.png"
}