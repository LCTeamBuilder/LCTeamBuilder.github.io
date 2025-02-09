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

const RegretMeursaultAwakening: Skill = {
    Name: "Regret",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 20,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] Remove 2 random removable negative effects applied to self"),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Tremor] Count, Inflict (Wrath A-Reson. /3) additional [Tremor] Count<br>"+
            "[On Hit] Trigger [Tremor Burst] If the target does not have a Stagger Threshold upon [Tremor Burst], Deal Wrath Damage by (12 + 3x(Wrath A-Reson.))% of the final Stagger Threshold raised.", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Meursault/EGO/Regret/20505awakenprofile.png'
}

const RegretMeursaultCorrosion: Skill = {
    Name: "Regret",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 30,
    Coins: 1,
    CoinValue: -10,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly<br>"+
            "[Before Attack] If this unit has a negative status effect, +2 Atk Weight"),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]<br>"+
            "Amount of Stagger Threshold raised by [Tremor Burst] increases by 50% of [Tremor] on target.<br>"+
            "If the target does not have a Stagger Threshold upon [Tremor Burst],<br>"+
            "Deal Wrath Damage by (12 + 3x(Wrath A-Reson.))% of the final Stagger Threshold raised<br>"+
            "Reduce [Tremor] Count by 1<br>"+
            "[After Attack] Gain 3 [Bind] and 1 [Blunt Power Up] next turn.")],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Meursault/EGO/Regret/20505erosionprofile.png'
}

export const RegretMeursault: Ego = {
    Id: 20505,
    Name: "Regret",
    Sinner: SinnerEnum.Meursault,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: RegretMeursaultAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: RegretMeursaultCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Bound Wrath", PassiveTypeEnum.Ego, "This unit's leftmost skill on the Dashboard loses 1 Base Power and gains 2 Coin Power<br>"+
        "At the start of the turn, if at 4- Speed, gain 1 [Blunt Power Up]"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 0.5 },
                { sin: SinEnum.Pride, resistance: 2 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 3 },
            { sin: SinEnum.Pride, amount: 2 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/Meursault/EGO/Regret/20505cg.png'
}