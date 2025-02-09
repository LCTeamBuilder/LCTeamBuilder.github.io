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

const SodaRyoshuAwakening: Skill = {
    Name: "Soda",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 15,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 2,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict 6 [Sinking]<br>"+
            "[On Kill] Gain 3 E.G.O resources of a random Affinity currently owned, All allies heal 3 SP", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Ryoshu/EGO/Soda/20405awakenprofile.png'
}

const SodaRyoshuCorrosion: Skill = {
    Name: "Soda",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 26,
    Coins: 1,
    CoinValue: -12,
    AttackWeight: 2,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly"),
        new SkillDescriptionPart("[On Hit] Inflict 6 [Sinking]<br>"+
            "[After Attack] All allies gain +1 [E.G.O Resource Amp], apply 1 Haste next turn", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Ryoshu/EGO/Soda/20405erosionprofile.png'
}

export const SodaRyoshu: Ego = {
    Id: 20405,
    Name: "Soda",
    Sinner: SinnerEnum.Ryoshu,
    RiskLevel: RiskLevelEnum.ZAYIN,
    AwakeningSkill: SodaRyoshuAwakening,
    AwakeningSanityCost: 15,
    CorrosionSkill: SodaRyoshuCorrosion,
    CorrosionSanityCost: 15,
    Passive: new Passive("Opened Can", PassiveTypeEnum.Ego, "On hit, if the target has 5+ [Sinking], inflict 1 [Defense Power Down]. (5 times per turn)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 0.75 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Gluttony, amount: 2 },
            { sin: SinEnum.Pride, amount: 2 },
            { sin: SinEnum.Envy, amount: 2 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/Ryoshu/EGO/Soda/20405cg.png'
}