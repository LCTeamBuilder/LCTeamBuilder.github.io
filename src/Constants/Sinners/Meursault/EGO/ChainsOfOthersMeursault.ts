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

const ChainsOfOthersMeursaultAwakening: Skill = {
    Name: "Chains of Others",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 19,
    Coins: 1,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: -3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict 5 [Bind] next turn<br>"+
        "[On Hit] Gain 3 [Bind] next turn<br>"+
        "[On Hit] Inflict 4 [Attack Power Down] next turn<br>"+
        "[On Hit] Gain 3 [Attack Power Down] next turn<br>"+
        "[On Hit] Gain 2 [Protection] next turn", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Meursault/EGO/ChainsOfOthers/20501awakenprofile.png"
}

export const ChainsOfOthersMeursault: Ego = {
    Id: 20501,
    Name: "Chains of Others",
    Sinner: SinnerEnum.Meursault,
    RiskLevel: RiskLevelEnum.ZAYIN,
    AwakeningSkill: ChainsOfOthersMeursaultAwakening,
    AwakeningSanityCost: 10,
    CorrosionSkill: undefined,
    CorrosionSanityCost: undefined,
    Passive: new Passive("Refusal to Judge", PassiveTypeEnum.Ego, "At the start of the combat phase, gain 3 [Protection] if the unit is targeted by 3 or more skills."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 2 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 0.75 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Sloth, amount: 1 },
            { sin: SinEnum.Gloom, amount: 1 },
            { sin: SinEnum.Envy, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Meursault/EGO/ChainsOfOthers/20501cg.png"
}