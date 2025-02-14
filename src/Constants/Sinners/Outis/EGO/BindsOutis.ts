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

const BindsOutisAwakening: Skill = {
    Name: "Binds",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 20,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 5,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] Gain (highest Pride or Sloth Reson. - 2) +1 Atk Weight (Max. 2)<br>"+
            "Amount of Stagger Threshold raised by [Tremor Burst] increases by 100%<br>"+
            "[After Attack] For the next 3 turns, Lose 8 SP at every Turn End"),
        new SkillDescriptionPart("[On Hit] Inflict 6 [Tremor]<br>"+
            "[On Hit] Trigger [Amplitude Conversion] into [Tremor - Fracture]<br>"+
            "[On Hit] Trigger [Tremor Burst]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Outis/EGO/Binds/21106awakenprofile.png'
}

const BindsOutisCorrosion: Skill = {
    Name: "Binds",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 34,
    Coins: 1,
    CoinValue: -14,
    AttackWeight: 5,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly<br>"+
            "[Before Attack] Gain (highest Pride or Sloth Reson. - 2) +1 Atk Weight (Max. 2)<br>"+
            "Amount of Stagger Threshold raised by [Tremor Burst] increases by 50%"),
        new SkillDescriptionPart("[On Hit] Inflict 6 [Tremor]<br>"+
            "[On Hit] Inflict +3 [Tremor] Count<br>"+
            "[On Hit] Trigger [Amplitude Conversion] into [Tremor - Fracture]<br>"+
            "[Tails Hit] Trigger [Tremor Burst]<br>"+
            "[Tails Hit] Trigger [Tremor Burst]<br>"+
            "[On Hit] Trigger [Tremor Burst]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Outis/EGO/Binds/21106erosionprofile.png'
}

export const BindsOutis: Ego = {
    Id: 21106,
    Name: "Binds",
    Sinner: SinnerEnum.Outis,
    RiskLevel: RiskLevelEnum.WAW,
    AwakeningSkill: BindsOutisAwakening,
    AwakeningSanityCost: 10,
    CorrosionSkill: BindsOutisCorrosion,
    CorrosionSanityCost: 30,
    Passive: new Passive("Grand Welcome", PassiveTypeEnum.Ego, "After Attack from this unit: if the target is Staggered or defeated, gain +1 Pride E.G.O resource and +1 E.G.O resource for 1 other random Affinity (3 times per turn)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 2 },
                { sin: SinEnum.Gloom, resistance: 0.5 },
                { sin: SinEnum.Pride, resistance: 0.5 },
                { sin: SinEnum.Envy, resistance: 0.75 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 1 },
            { sin: SinEnum.Lust, amount: 1 },
            { sin: SinEnum.Sloth, amount: 4 },
            { sin: SinEnum.Pride, amount: 4 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/Outis/EGO/Binds/21106cg.png'
}