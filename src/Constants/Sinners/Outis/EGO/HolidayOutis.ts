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

const HolidayOutisAwakening: Skill = {
    Name: "Holiday",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 20,
    Coins: 1,
    CoinValue: +11,
    AttackWeight: 3,
    SkillLevel: -2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]<br>"+
            "[After Attack] Apply 1 [Damage Up] for the Affinity with the highest Resonance count to 4 allies with the least SP<br>"+
            "[After Attack] Heal 20 SP for 4 allies with the least SP", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Outis/EGO/Holiday/21105awakenprofile.png'
}

const HolidayOutisCorrosion: Skill = {
    Name: "Holiday",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 34,
    Coins: 1,
    CoinValue: -15,
    AttackWeight: 5,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly<br>"+
            "[After Attack] This unit loses 10% HP"),
        new SkillDescriptionPart("[On Hit] Target loses 10 SP<br>"+
            "[On Hit] Trigger [Tremor Burst]<br>"+
            "[On Hit] Inflict 2 Fragility for the Affinity with the highest Resonance count<br>"+
            "[Tails Attack End] Gain 1 'Damage Up' to the Affinity with the highest Resonance count", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Outis/EGO/Holiday/21105erosionprofile.png'
}

export const HolidayOutis: Ego = {
    Id: 21105,
    Name: "Holiday",
    Sinner: SinnerEnum.Outis,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: HolidayOutisAwakening,
    AwakeningSanityCost: 25,
    CorrosionSkill: HolidayOutisCorrosion,
    CorrosionSanityCost: 25,
    Passive: new Passive("Fair Presents", PassiveTypeEnum.Ego, "When applying positive effects to other allies with Skill effects or Coin effects, randomly select one of the following effects:<br>"+
        "[Burn], [Bleed], [Tremor], [Rupture], or [Sinking]. Then, inflict 1 Potency of the selected effect to 1 random enemy. (Activates 5 times per Turn. Can be applied up to 5 times per enemy. For abnormalities, applied to a random Part.)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 0.5 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 0.75 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Lust, amount: 2 },
            { sin: SinEnum.Sloth, amount: 1 },
            { sin: SinEnum.Pride, amount: 3 },
            { sin: SinEnum.Envy, amount: 2 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/Outis/EGO/Holiday/21105cg.png'
}