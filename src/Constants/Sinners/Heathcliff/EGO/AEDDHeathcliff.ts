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

const AEDDHeathcliffAwakening: Skill = {
    Name: "AEDD",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 22,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 3,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] Gain +1 [Charge] Count for every 10% of missing HP (Max 7)<br>"+
            "Gain 2 [Haste] next turn"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Paralyze] and 1 [Gloom Fragility]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Heathcliff/EGO/AEDD/20703awakenprofile.png'
}

const AEDDHeathcliffCorrosion: Skill = {
    Name: "AEDD",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 29,
    Coins: 1,
    CoinValue: -7,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "[Before Attack] Gain +1 [Charge] Count for every 10% of missing HP (Max 7)<br>"+
            "Gain 2 [Haste] next turn"),
        new SkillDescriptionPart("[On Hit] Spend all [Charge] Count to deal bonus Gloom damage by ([Charge] Count*2,5)% of damage dealt (Max 50%)<br>"+
            "[After Attack] Spend all [Charge] Count<br>"+
            "[Tails Attack End] Lose HP by 10% of Max HP to gain +10 [Charge] Count", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Heathcliff/EGO/AEDD/20703erosionprofile.png'
}

export const AEDDHeathcliff: Ego = {
    Id: 20703,
    Name: "AEDD",
    Sinner: SinnerEnum.Heathcliff,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: AEDDHeathcliffAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: AEDDHeathcliffCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Temperamental Discharge", PassiveTypeEnum.Ego, "When hit, spend 1 [Charge] Count to heal 2.5% of Max HP<br>"+
        "At less than 40% HP, gain 1 [Charge] Count before activating the healing effect. (Can gain up to 10 [Charge] Count per turn)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 0.5 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Gloom, amount: 3 },
            { sin: SinEnum.Envy, amount: 2 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/Heathcliff/EGO/AEDD/20703cg.png'
}