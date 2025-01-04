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

const RoseateDesireHongLuAwakening: Skill = {
    Name: "Roseate Desire",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 19,
    Coins: 1,
    CoinValue: +9,
    AttackWeight: 3,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict 2 Defense Power Down<br>"+
            "[On Hit] Inflict 5 Defense Level Down", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/HongLu/EGO/RoseataDesire/20602awakenprofile.png"
}

const RoseateDesireHongLuCorrosion: Skill = {
    Name: "Roseate Desire",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 30,
    Coins: 1,
    CoinValue: -15,
    AttackWeight: 3,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets the unit with the highest Speed"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Defense Power Down]<br>"+
            "[On Hit] Inflict 5 [Defense Level Down]<br>"+
            "[On Hit] Inflict 4 [Bind] next turn", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/HongLu/EGO/RoseataDesire/20602erosionprofile.png"
}

export const RoseateDesireHongLu: Ego = {
    Id: 20602,
    Name: "Roseate Desire",
    Sinner: SinnerEnum.HongLu,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: RoseateDesireHongLuAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: RoseateDesireHongLuCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Binding Ribbons", PassiveTypeEnum.Ego, "The target of the leftmost skill on the Dashboard is inflicted with (Lust A-Reson. / 4) [Lust Fragility] next turn."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 0.5 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 2 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Lust, amount: 4 },
            { sin: SinEnum.Envy, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/HongLu/EGO/RoseataDesire/20602cg.png"
}