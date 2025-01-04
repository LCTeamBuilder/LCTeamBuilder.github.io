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

const LandOfIllusionHongLuAwakening: Skill = {
    Name: "Land of Illusion",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 15,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 3,
    SkillLevel: +0,
    SkillDescription: 
        [new SkillDescriptionPart("[After Attack] Heal 15 SP"),
        new SkillDescriptionPart("[On Hit] Inflict 5 [Sinking]<br>"+
            "[After Attack] Next turn: -2 [SP Loss Efficiency] to all allies, -2 to amount of SP lost from E.G.O use", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/HongLu/EGO/LandOfIllusion/20601awakenprofile.png"
}

export const LandOfIllusionHongLu: Ego = {
    Id: 20601,
    Name: "Land of Illusion",
    Sinner: SinnerEnum.HongLu,
    RiskLevel: RiskLevelEnum.ZAYIN,
    AwakeningSkill: LandOfIllusionHongLuAwakening,
    AwakeningSanityCost: 15,
    CorrosionSkill: undefined,
    CorrosionSanityCost: undefined,
    Passive: new Passive("Ripple", PassiveTypeEnum.Ego, "At the start of the combat phase, heal SP by the count of your highest A-Reson. value, excluding those in Panic."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 0.75 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Lust, amount: 1 },
            { sin: SinEnum.Gloom, amount: 5 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/HongLu/EGO/LandOfIllusion/20601cg.png"
}