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

const RedEyesRyoshuAwakening: Skill = {
    Name: "Red Eyes",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 18,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 3,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict 3 [Bind] next turn<br>"+
            "[On Hit] If target has 3+ [Bind] , inflict 1 [Plus Coin Drop] next turn<br>"+
            "[On Hit] If target's Speed is lower than user's, inflict 2 [Slash Fragility] next turn", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Ryoshu/EGO/RedEyes/20403awakenprofile.png'
}

const RedEyesRyoshuCorrosion: Skill = {
    Name: "Red Eyes",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 26,
    Coins: 1,
    CoinValue: -8,
    AttackWeight: 3,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Bind] next turn<br>"+
            "[On Hit] If target has 3+ [Bind] , inflict 2 [Plus Coin Drop] next turn<br>"+
            "[On Hit] If target's Speed is lower than user's, inflict 1-3 [Slash Fragility] next turn", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Ryoshu/EGO/RedEyes/20403erosionprofile.png'
}

export const RedEyesRyoshu: Ego = {
    Id: 20403,
    Name: "Red Eyes",
    Sinner: SinnerEnum.Ryoshu,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: RedEyesRyoshuAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: RedEyesRyoshuCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Spider's Webs", PassiveTypeEnum.Ego, "On clash win, inflict 1 [Bind] next turn. (3 times per turn)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 0.75 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 2 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 2 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Lust, amount: 2 },
            { sin: SinEnum.Gluttony, amount: 2 },
            { sin: SinEnum.Envy, amount: 1 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/Ryoshu/EGO/RedEyes/20403cg.png'
}