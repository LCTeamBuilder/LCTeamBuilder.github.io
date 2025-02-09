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

const YaSunyataTadRupamHeathcliffAwakening: Skill = {
    Name: "Ya Śūnyatā Tad Rūpam",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 18,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 3,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] At 15+ SP, +2 Atk Weight"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Attack Power Down] next turn<br>"+
            "[After Attack] Heal 25 SP for 4 other allies with the least SP", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Heathcliff/EGO/YaSunyataTadRupam/20704awakenprofile.png'
}

const YaSunyataTadRupamHeathcliffCorrosion: Skill = {
    Name: "Ya Śūnyatā Tad Rūpam",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 33,
    Coins: 1,
    CoinValue: -15,
    AttackWeight: 3,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly"),
        new SkillDescriptionPart("[Before Attack] At -15 or lower SP, +2 Atk Weight<br>"+
            "[On Hit] Inflict 3 [Defense Level Down] to 1 random other ally<br>"+
            "[On Hit] Gain 2 [Defense Power Up] next turn.<br>"+
            "[On Hit] Gain 1 [Damage Up] next turn.<br>"+
            "[Tails Hit] Heal 4 SP on self<br>"+
            "[Tails Hit] Inflict 1 [Fragile]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Heathcliff/EGO/YaSunyataTadRupam/20704erosionprofile.png'
}

export const YaSunyataTadRupamHeathcliff: Ego = {
    Id: 20704,
    Name: "Ya Śūnyatā Tad Rūpam",
    Sinner: SinnerEnum.Heathcliff,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: YaSunyataTadRupamHeathcliffAwakening,
    AwakeningSanityCost: 25,
    CorrosionSkill: YaSunyataTadRupamHeathcliffCorrosion,
    CorrosionSanityCost: 25,
    Passive: new Passive("Dhyāna", PassiveTypeEnum.Ego, "Raise Max HP by 15% of this Identity's base Max HP when recovering from Staggered state.<br>"+
        "Then, heal by 15% of current Max HP. If at less than 30% of current Max HP, heal by 25% instead.<br>"+
        "(3 times per encounter. At Encounter End, revert to base Max HP. Current HP value will be adjusted to reflect the HP percentage at the time of Encounter End.)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 0.5 },
                { sin: SinEnum.Sloth, resistance: 0.75 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 2 },
            { sin: SinEnum.Lust, amount: 2 },
            { sin: SinEnum.Sloth, amount: 2 },
            { sin: SinEnum.Gloom, amount: 2 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/Heathcliff/EGO/YaSunyataTadRupam/20704cg.png'
}