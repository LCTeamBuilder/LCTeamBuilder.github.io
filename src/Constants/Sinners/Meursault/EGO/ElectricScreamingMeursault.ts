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

const ElectricScreamingMeursaultAwakening: Skill = {
    Name: "Electric Screaming",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 22,
    Coins: 1,
    CoinValue: +4,
    AttackWeight: 2,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] Gain +12 [Charge] Count<br>"+
            "[After Attack] Apply +8 [Charge] Count to 1 other ally with the least [Charge] Count<br>"+
            "- Number of affected allies grows by (highest Envy Reson. - 2) (max 5)<br>"+
            "- At 4+ (highest Envy Reson.), apply 1 [Envy DMG Up] to self and all affected allies<br>"+
            "- At 6+ (highest Envy Reson.), apply 1 [Envy DMG Up] to self and all affected allies"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Rupture]", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Meursault/EGO/ElectricScreaming/20506awakenprofile.png'
}

const ElectricScreamingMeursaultCorrosion: Skill = {
    Name: "Electric Screaming",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 28,
    Coins: 1,
    CoinValue: -12,
    AttackWeight: 2,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly<br>"+
            "[Before Attack] Gain +1 Atk Weight (Max. 3) equal to (highest Envy Reson. - 2)<br>"+
            "[Before Attack] At 10+ [Charge] Count, apply the effects applied from 'On Hit' twice<br>"+
            "[Before Attack] If this unit has 10+ [Charge] Count, spend up to 20 [Charge] Count, deal 3% more damage for every [Charge] Count consumed (max 60%)"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Paralyze]<br>"+
            "[On Hit] Inflict 3 [Rupture]", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Meursault/EGO/ElectricScreaming/20506erosionprofile.png'
}

export const ElectricScreamingMeursault: Ego = {
    Id: 20506,
    Name: "Electric Screaming",
    Sinner: SinnerEnum.Meursault,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: ElectricScreamingMeursaultAwakening,
    AwakeningSanityCost: 25,
    CorrosionSkill: ElectricScreamingMeursaultCorrosion,
    CorrosionSanityCost: 25,
    Passive: new Passive("Overloading Cables", PassiveTypeEnum.Ego, "Combat Start: At 4+ Reson., gain 2 [Offense Level Up] and 2 [Defense Level Up]<br>"+
        "If the Reson. was an Envy Reson., apply the above effects to 2 units adjacent to this unit on the Dashboard as well"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 2 },
                { sin: SinEnum.Envy, resistance: 0.5 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 1 },
            { sin: SinEnum.Envy, amount: 4 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/Meursault/EGO/ElectricScreaming/20506cg.png'
}