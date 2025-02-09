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

const HexNailFaustAwakening: Skill = {
    Name: "Hex Nail",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 16,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict 3 [Pierce Fragility]<br>"+
            "[On Hit] Inflict 1 [Envy Fragility]<br>"+
            "[Heads Hit] Inflict 3 [Curse]<br>"+
            "[Heads Hit] Inflict 3 [Nails]<br>"+
            "[On Hit] If target has [Curse], +50% Damage", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Faust/EGO/HexNail/20203awakenprofile.png'
}

const HexNailFaustCorrosion: Skill = {
    Name: "Hex Nail",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 20,
    Coins: 1,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Pierce Fragility]<br>"+
            "[On Hit] Inflict 3 [Envy Fragility]<br>"+
            "[On Hit] Inflict 3 [Curse]<br>"+
            "[On Hit] Inflict 3 [Nails]<br>"+
            "[On Hit] If target has [Curse] , +50% Damage", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Faust/EGO/HexNail/20203erosionprofile.png'
}

export const HexNailFaust: Ego = {
    Id: 20203,
    Name: "Hex Nail",
    Sinner: SinnerEnum.Faust,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: HexNailFaustAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: HexNailFaustCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("It Hurts!", PassiveTypeEnum.Ego, "Deal +10% damage for every negative status effect on this unit. (Up to 50%)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 2 },
                { sin: SinEnum.Envy, resistance: 0.5 }],
    Cost: [{ sin: SinEnum.Envy, amount: 6 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/Faust/EGO/HexNail/20203cg.png'
}