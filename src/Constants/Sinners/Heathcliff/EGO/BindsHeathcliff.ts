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

const BindsHeathcliffAwakening: Skill = {
    Name: "Binds",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 18,
    Coins: 1,
    CoinValue: +15,
    AttackWeight: 7,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[After Attack] For 3 turns, lose 10 SP at Turn End<br>"+
            "[After Attack] Next turn, gain 20 [Bind], 1 [Before the King in Binds], and 2 [Attack Power Up]"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bind] next turn<br>"+
            "[On Hit] Inflict 4 [Sinking]<br>"+
            "[On Hit] Inflict 4 [Tremor]<br>"+
            "[On Hit] Trigger [Tremor Burst]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Heathcliff/EGO/Binds/20706awakenprofile.png'
}

const BindsHeathcliffCorrosion: Skill = {
    Name: "Binds",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 35,
    Coins: 1,
    CoinValue: -15,
    AttackWeight: 7,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly<br>"+
            "[After Attack] Next turn, gain 20 [Bind], 1 [Before the King], and 3 [Attack Power Up]<br>"+
            "[After Attack] Next turn, apply 20 [Bind], 3 [Attack Power Up] , and 2 [Gloom DMG Up] to 2 other allies in the order of Deployment<br>"+
            "- The number of affected allies grows by (highest Gloom or Pride Reson. - 2) (max 4)"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Bind] next turn<br>"+
            "[On Hit] Inflict 4 [Sinking]<br>"+
            "[On Hit] Inflict 4 [Tremor]<br>"+
            "[On Hit] Trigger [Tremor Burst]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Heathcliff/EGO/Binds/20706erosionprofile.png'
}

export const BindsHeathcliff: Ego = {
    Id: 20706,
    Name: "Binds",
    Sinner: SinnerEnum.Heathcliff,
    RiskLevel: RiskLevelEnum.WAW,
    AwakeningSkill: BindsHeathcliffAwakening,
    AwakeningSanityCost: 10,
    CorrosionSkill: BindsHeathcliffCorrosion,
    CorrosionSanityCost: 35,
    Passive: new Passive("Chains of Binding", PassiveTypeEnum.Ego, "- Combat Start: At 4+ highest Reson. that includes this unit's Skills, apply 3 [Offense Level Up] and 3 [Defense Level Up] to self and all allies who were a part of the Reson.<br>"+
        "- If the said Reson. was an A-Reson., apply 2 additional [Offense Level Up] and [Defense Level Up]"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 2 },
                { sin: SinEnum.Gloom, resistance: 0.5 },
                { sin: SinEnum.Pride, resistance: 0.5 },
                { sin: SinEnum.Envy, resistance: 0.75 }],
    Cost: [{ sin: SinEnum.Lust, amount: 2 },
            { sin: SinEnum.Gloom, amount: 4 },
            { sin: SinEnum.Pride, amount: 2 },
            { sin: SinEnum.Envy, amount: 3 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/Heathcliff/EGO/Binds/20706cg.png'
}