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

const IndicantsTrialRodionAwakening: Skill = {
    Name: "Indicant's Trial",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 8,
    Coins: 2,
    CoinValue: +8,
    AttackWeight: 4,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] Gain (highest Reson. / 2) Atk Weight (max 3; rounded down)<br>" +
            "[After Attack] Heal (1 + highest Reson.) allies with the least HP percentages for 20% of their max HP (max 3 allies)<br>" +
            "[After Attack] For 3 turns, lose 10 SP at Turn End"),
        new SkillDescriptionPart("[On Hit] Inflict 8 [Burn]<br>" +
            "[On Hit] If this hits the main target, inflict (1 + (Wrath Reson. / 3)) [Searing Birdcage] next turn on main target (max 3; rounded down)", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Rodion/EGO/IndicantsTrial/20908awakenprofile.png'
}

const IndicantsTrialRodionCorrosion: Skill = {
    Name: "Indicant's Trial",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 8,
    Coins: 2,
    CoinValue: +8,
    AttackWeight: 4,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>" +
            "Targets Randomly<br>" +
            "[Before Attack] Gain (highest Reson. / 2) Atk Weight (max 3; rounded down)"),
        new SkillDescriptionPart("[Unbreakable Coin]<br>" +
            "[On Hit without Cracking] Inflict 10 [Burn]<br>" +
            "[On Hit without Cracking] Inflict +1 [Burn] Count<br>" +
            "[On Hit without Cracking] If this hits the main target, inflict (1 + Wrath Reson.) [Searing Birdcage] on main target (max 5)", 1),
        new SkillDescriptionPart("[Unbreakable Coin]<br>" +
            "Deal +2% damage on main target for every [Burn] Potency on the main target (max 100%)<br>" +
            "[On Kill] Apply 1 [Wrath Power Up] and 1 [Wrath DMG Up] to (1 + highest Reson.) allies with the least HP percentages (max 6 allies; once per Skill)", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Rodion/EGO/IndicantsTrial/20908erosionprofile.png'
}

export const IndicantsTrialRodion: Ego = {
    Id: 20908,
    Name: "Indicant's Trial",
    Sinner: SinnerEnum.Rodion,
    RiskLevel: RiskLevelEnum.WAW,
    AwakeningSkill: IndicantsTrialRodionAwakening,
    AwakeningSanityCost: 15,
    CorrosionSkill: IndicantsTrialRodionCorrosion,
    CorrosionSanityCost: 40,
    Passive: new Passive("Blazing Amusement", PassiveTypeEnum.Ego, "When a target with 10+ [Burn] Count is defeated, inflict the [Burn] Count on target between all enemies and heal 8 SP on self (in Focused Encounters, between all Parts; 3 max per target, 2 times per turn)<br>" +
        "- At max SP, heal 5 SP for 1 ally with the least SP instead"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 0.5 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 0.75 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 0.5 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 7 },
            { sin: SinEnum.Pride, amount: 3 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/Rodion/EGO/IndicantsTrial/20908cg.png'
}