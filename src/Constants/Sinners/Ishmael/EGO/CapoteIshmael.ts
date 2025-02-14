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

const CapoteIshmaelAwakening: Skill = {
    Name: "Capote",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 20,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 2,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[After Attack] Apply 1 [Wrath DMG Up] to all allies next turn"), 
        new SkillDescriptionPart("[On Hit] Inflict 4 [Burn]<br>"+
            "[On Hit] Target loses 15 SP", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Ishmael/EGO/Capote/20804awakenprofile.png'
}

const CapoteIshmaelCorrosion: Skill = {
    Name: "Capote",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 27,
    Coins: 1,
    CoinValue: -7,
    AttackWeight: 4,
    SkillLevel: 3,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "[After Attack] Give 1 [Wrath Fragility] and [Wrath DMG Up] to all units next turn"),
        new SkillDescriptionPart("[On Hit] Inflict 5 [Burn]<br>"+
            "[On Hit] Target loses 15 SP<br>"+
            "[On Hit] Trigger [Tremor Burst], then reduce [Tremor] Count by 2, if the burst Staggered the target, inflict 2 [Burn] on 3 random units", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Ishmael/EGO/Capote/20804erosionprofile.png'
}

export const CapoteIshmael: Ego = {
    Id: 20804,
    Name: "Capote",
    Sinner: SinnerEnum.Ishmael,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: CapoteIshmaelAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: CapoteIshmaelCorrosion,
    CorrosionSanityCost: 25,
    Passive: new Passive("Slaying Amid Cheers", PassiveTypeEnum.Ego, "When attacking a target with less than 30% HP, Wrath skills deal +20% damage."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 0.5 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 2 },
            { sin: SinEnum.Lust, amount: 2 },
            { sin: SinEnum.Sloth, amount: 1 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/Ishmael/EGO/Capote/20804cg.png'
}