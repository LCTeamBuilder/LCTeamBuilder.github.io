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

const LifetimeStewSinclairAwakening: Skill = {
    Name: "Lifetime Stew",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 18,
    Coins: 1,
    CoinValue: -8,
    AttackWeight: 7,
    SkillLevel: -2,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets the unit with the least HP<br>"+
            "If the target is an ally, this deals 0 damage"),
        new SkillDescriptionPart("[Heads Hit] If the target is an ally, heal them for 10% of user's Max HP<br>"+
            "[Tails Hit] Inflict 7 [Burn], if target is an ally, give 2 [Haste] and 1 [E.G.O Resourse Amp] next turn", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Sinclair/EGO/LifetimeStew/21003awakenprofile.png'
}

const LifetimeStewSinclairCorrosion: Skill = {
    Name: "Lifetime Stew",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 24,
    Coins: 1,
    CoinValue: -12,
    AttackWeight: 3,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets the unit with the least HP<br>"+
            "[Before Attack] Spend 3 random E.G.O resources to boost damage by 30%"),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Burn] Count", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Sinclair/EGO/LifetimeStew/21003erosionprofile.png'
}

export const LifetimeStewSinclair: Ego = {
    Id: 21003,
    Name: "Lifetime Stew",
    Sinner: SinnerEnum.Sinclair,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: LifetimeStewSinclairAwakening,
    AwakeningSanityCost: 15,
    CorrosionSkill: LifetimeStewSinclairCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Stew Spewage", PassiveTypeEnum.Ego, "Tails Coins inflict 1 [Burn] if hitting an enemy."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 0.5 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 3 },
            { sin: SinEnum.Lust, amount: 2 },
            { sin: SinEnum.Gluttony, amount: 1 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/Sinclair/EGO/LifetimeStew/21003cg.png'
}