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

const RoseateDesireIshmaelAwakening: Skill = {
    Name: "Roseate Desire",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 29,
    Coins: 1,
    CoinValue: -13,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("Targets the rearmost unit (In regular encounters)"),
        new SkillDescriptionPart("[On Hit] Inflict 10 [Offense Level Down]<br>"+
            "[On Hit] Inflict 3 [Paralyze] <br>"+
            "[On Hit] Inflict 3 [Bind] next turn", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Ishmael/EGO/RoseataDesire/20802awakenprofile.png"
}

const RoseateDesireIshmaelCorrosion: Skill = {
    Name: "Roseate Desire",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 19,
    Coins: 1,
    CoinValue: +9,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets the unit with the highest Speed"),
        new SkillDescriptionPart("[On Hit] Inflict 10 [Offense Level Down]<br>"+
            "[On Hit] Inflict 5 [Paralyze]<br>"+
            "[On Hit] Inflict 5 [Bind] next turn", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Ishmael/EGO/RoseataDesire/20802erosionprofile.png"
}

export const RoseateDesireIshmael: Ego = {
    Id: 20802,
    Name: "Roseate Desire",
    Sinner: SinnerEnum.Ishmael,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: RoseateDesireIshmaelAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: RoseateDesireIshmaelCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Pink Ribbons", PassiveTypeEnum.Ego, "On clash win, inflict 1 [Pink Ribbons]"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 0.5 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 2 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 1 },
            { sin: SinEnum.Lust, amount: 4 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Ishmael/EGO/RoseataDesire/20802cg.png"
}