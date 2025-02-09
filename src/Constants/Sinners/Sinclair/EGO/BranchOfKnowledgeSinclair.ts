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

const BranchOfKnowledgeSinclairAwakening: Skill = {
    Name: "Branch of Knowledge",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 14,
    Coins: 1,
    CoinValue: +15,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Heads Hit] Inflict 12 Rupture.pngRupture<br>"+
        "[Heads Hit] Lose 10 SP. Gain 1 [Attack Power Up] next turn<br>"+
        "[Tails Hit] Gain 10 SP. Gain 1 [Protection] next turn", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Sinclair/EGO/BranchOfKnowledge/21001awakenprofile.png'
}

export const BranchOfKnowledgeSinclair: Ego = {
    Id: 21001,
    Name: "Branch of Knowledge",
    Sinner: SinnerEnum.Sinclair,
    RiskLevel: RiskLevelEnum.ZAYIN,
    AwakeningSkill: BranchOfKnowledgeSinclairAwakening,
    AwakeningSanityCost: 10,
    CorrosionSkill: undefined,
    CorrosionSanityCost: undefined,
    Passive: new Passive("Unstable", PassiveTypeEnum.Ego, "If a skill's Coin hits with a different side from the previous Coin in the same skill, lose 5 SP and gain 1 [Damage Up] this turn. (3 times per turn)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 0.75 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 2 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 1 },
            { sin: SinEnum.Gluttony, amount: 3}],
    Keywords: [],
    FullImageDir: './assets/Sinners/Sinclair/EGO/BranchOfKnowledge/21001cg.png'
}