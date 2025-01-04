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

const WhatIsCastRodionAwakening: Skill = {
    Name: "What is Cast",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 15,
    Coins: 1,
    CoinValue: +13,
    AttackWeight: 1,
    SkillLevel: +0,
    SkillDescription: 
        [new SkillDescriptionPart("If target's HP is above 50%, +30% Damage"),
        new SkillDescriptionPart("[On Hit] Inflict 4 [Bleed]<br>"+
            "[On Hit] Gain +2 [SP Heal Efficiency] next turn<br>"+
            "[On Hit] Gain -2 [SP Loss Efficiency] next turn", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Rodion/EGO/WhatIsCast/20901awakenprofile.png"
}

export const WhatIsCastRodion: Ego = {
    Id: 20901,
    Name: "What is Cast",
    Sinner: SinnerEnum.Rodion,
    RiskLevel: RiskLevelEnum.ZAYIN,
    AwakeningSkill: WhatIsCastRodionAwakening,
    AwakeningSanityCost: 10,
    CorrosionSkill: undefined,
    CorrosionSanityCost: undefined,
    Passive: new Passive("Severance", PassiveTypeEnum.Ego, "+1 [SP Heal Efficiency], -1 [SP Loss Efficiency]"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 0.75 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Gloom, amount: 1 },
            { sin: SinEnum.Pride, amount: 3}],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Rodion/EGO/WhatIsCast/20901cg.png"
}