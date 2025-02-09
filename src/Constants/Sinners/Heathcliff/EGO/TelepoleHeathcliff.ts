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

const TelepoleHeathcliffAwakening: Skill = {
    Name: "Telepole",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 33,
    Coins: 1,
    CoinValue: -12,
    AttackWeight: 3,
    SkillLevel: 3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain [Charge] Count by Envy Reson.<br>"+
            "Spend 5 [Charge] Count Count to gain +3 Base Power (Max 12)"),
        new SkillDescriptionPart("[Tails Hit] Gain +5 [Charge] Count", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Heathcliff/EGO/Telepole/20702awakenprofile.png'
}

const TelepoleHeathcliffCorrosion: Skill = {
    Name: "Telepole",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 39,
    Coins: 1,
    CoinValue: -21,
    AttackWeight: 3,
    SkillLevel: 3,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate] Targets randomly<br>"+
            "[On Use] Gain [Charge] Count by Envy Reson.<br>"+
            "Spend all [Charge] Count to gain +15 Base Power"),
        new SkillDescriptionPart("[Heads Hit] Gain 3 [Fragile] next turn", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Heathcliff/EGO/Telepole/20702erosionprofile.png'
}

export const TelepoleHeathcliff: Ego = {
    Id: 20702,
    Name: "Telepole",
    Sinner: SinnerEnum.Heathcliff,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: TelepoleHeathcliffAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: TelepoleHeathcliffCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Roar", PassiveTypeEnum.Ego, "After defeating an enemy, gain [Charge] by half that turn's Envy A-Reson.<br>(Envy A-Reson. / 2)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 2 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 0.75 },
                { sin: SinEnum.Envy, resistance: 0.5 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 3 },
            { sin: SinEnum.Lust, amount: 2 },
            { sin: SinEnum.Envy, amount: 3 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/Heathcliff/EGO/Telepole/20702cg.png'
}