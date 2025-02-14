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

const ToPathosMathosOutisAwakening: Skill = {
    Name: "To Páthos Máthos",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 20,
    Coins: 1,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: [new SkillDescriptionPart("If target's HP is below 50%, +30% Damage"),            new SkillDescriptionPart("[On Hit] Inflict 4 [Rupture]<br>"+                "[On Kill] Give 1 [Damage Up] to a random ally", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Outis/EGO/ToPathosMathos/21101awakenprofile.png'
}

export const ToPathosMathosOutis: Ego = {
    Id: 21101,
    Name: "To Páthos Máthos",
    Sinner: SinnerEnum.Outis,
    RiskLevel: RiskLevelEnum.ZAYIN,
    AwakeningSkill: ToPathosMathosOutisAwakening,
    AwakeningSanityCost: 10,
    CorrosionSkill: undefined,
    //CorrosionSanityCost: undefined,
    Passive: new Passive("Tactical Perfection", PassiveTypeEnum.Ego, "If the unit did not get hit at all during a turn, gain 1 [Damage Up] next turn. (Max 3 stacks)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 0.75 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Sloth, amount: 2 },
            { sin: SinEnum.Pride, amount: 2 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/Outis/EGO/ToPathosMathos/21101cg.png'
}