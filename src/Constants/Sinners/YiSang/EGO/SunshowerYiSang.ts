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

const SunshowerYiSangAwakening: Skill = {
    Name: "Sunshower",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 17,
    Coins: 1,
    CoinValue: +15,
    AttackWeight: 7,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] Give 1 [Sloth Power Up], 2 [Sloth DMG Up], and 3 [Protection] to all allies this turn and next turn"),
        new SkillDescriptionPart("[Heads Hit] Heal 15 SP", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/YiSang/EGO/Sunshower/20105awakenprofile.png'
}

const SunshowerYiSangCorrosion: Skill = {
    Name: "Sunshower",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 35,
    Coins: 1,
    CoinValue: -15,
    AttackWeight: 7,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
        "Targets randomly<br>"+
        "[Before Attack] Gain 2 [Sloth Power Up] and 2 [Sloth DMG Up] this turn and the next 2 turns"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sloth Fragility] and 2 [Pierce Fragility] this turn and next turn", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/YiSang/EGO/Sunshower/20105erosionprofile.png'
}

export const SunshowerYiSang: Ego = {
    Id: 20105,
    Name: "Sunshower",
    Sinner: SinnerEnum.YiSang,
    RiskLevel: RiskLevelEnum.WAW,
    AwakeningSkill: SunshowerYiSangAwakening,
    AwakeningSanityCost: 35,
    CorrosionSkill: SunshowerYiSangCorrosion,
    CorrosionSanityCost: 35,
    Passive: new Passive("Ray of Sun After Rain", PassiveTypeEnum.Ego, "At the start of the turn, all allies heal 3 SP"),   
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                    { sin: SinEnum.Lust, resistance: 2 },
                    { sin: SinEnum.Sloth, resistance: 0.75 },
                    { sin: SinEnum.Gluttony, resistance: 0.5 },
                    { sin: SinEnum.Gloom, resistance: 1 },
                    { sin: SinEnum.Pride, resistance: 1 },
                    { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Sloth, amount: 4},
            { sin: SinEnum.Gluttony, amount: 2 },
            { sin: SinEnum.Gloom, amount: 2 },
            { sin: SinEnum.Pride, amount: 2 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/YiSang/EGO/Sunshower/20105cg.png'
}