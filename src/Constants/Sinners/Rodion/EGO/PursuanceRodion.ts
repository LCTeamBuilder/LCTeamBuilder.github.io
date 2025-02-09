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

const PursuanceRodionAwakening: Skill = {
    Name: "Pursuance",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 26,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 3,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict 1 [Sloth Fragility] next turn<br>"+
            "[After Attack] Heal 2 other allies with the least HP percentage for 30% of this unit's Max HP<br>"+
            "[Heads Attack End] If target is Staggered or defeated, apply 15% of this unit's Max HP as Shield to allies that this unit healed", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Rodion/EGO/Pursuance/20905awakenprofile.png'
}

const PursuanceRodionCorrosion: Skill = {
    Name: "Pursuance",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 34,
    Coins: 1,
    CoinValue: -12,
    AttackWeight: 3,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "[Before Attack] At 50%- HP +2 Atk Weight"),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]<br>"+
            "[On Hit] Deal 20 SP Damage<br>"+
            "[On Hit] If the target is Staggered or defeated, heal 7 SP on self", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Rodion/EGO/Pursuance/20905erosionprofile.png'
}

export const PursuanceRodion: Ego = {
    Id: 20905,
    Name: "Pursuance",
    Sinner: SinnerEnum.Rodion,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: PursuanceRodionAwakening,
    AwakeningSanityCost: 25,
    CorrosionSkill: PursuanceRodionCorrosion,
    CorrosionSanityCost: 25,
    Passive: new Passive("Sentencing from Above", PassiveTypeEnum.Ego, "Whenever the enemy is Staggered, the ally with the least HP percentage heals 4% of their Max HP"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 0.75 },
                { sin: SinEnum.Gluttony, resistance: 2 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 0.5 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Sloth, amount: 4 },
            { sin: SinEnum.Pride, amount: 3 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/Rodion/EGO/Pursuance/20905cg.png'
}