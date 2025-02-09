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

const SunshowerOutisAwakening: Skill = {
    Name: "Sunshower",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 26,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 2,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] Gain +7 [Poise] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 6 [Sinking]<br>"+
            "[On Hit] Inflict 3 [Bind] next turn<br>"+
            "[On Crit] Trigger [Tremor Burst], Inflict +3 [Sinking] Count", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Outis/EGO/Sunshower/21104awakenprofile.png'
}

const SunshowerOutisCorrosion: Skill = {
    Name: "Sunshower",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 29,
    Coins: 1,
    CoinValue: -7,
    AttackWeight: 2,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets the unit with the least HP<br>"+
            "[Before Attack] Gain +7 [Poise] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 6 [Sinking]<br>"+
            "[On Hit] Inflict 6 [Rupture]<br>"+
            "[On Hit] Inflict 3 [Bind] next turn<br>"+
            "[On Crit] Trigger [Tremor Burst], Inflict +3 [Sinking] Count and [Rupture] Count", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Outis/EGO/Sunshower/21104erosionprofile.png'
}

export const SunshowerOutis: Ego = {
    Id: 21104,
    Name: "Sunshower",
    Sinner: SinnerEnum.Outis,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: SunshowerOutisAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: SunshowerOutisCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Breath of the Hunt", PassiveTypeEnum.Ego, "After a clash, gain 2 [Poise]<br>"+
        "When staggered, gain 2 [Protection], when recovering from stagger, gain 5 [Poise]"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 0.5 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Sloth, amount: 2 },
            { sin: SinEnum.Gluttony, amount: 2 },
            { sin: SinEnum.Gloom, amount: 1 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/Outis/EGO/Sunshower/21104cg.png'
}