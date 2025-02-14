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

const CavernousWailingSinclairAwakening: Skill = {
    Name: "Cavernous Wailing",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 16,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 1,
    SkillLevel: -2,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] Gain (highest Reson. - 2) Atk Weight (max 2)"),
        new SkillDescriptionPart("[After Attack] Apply 20% of this unit's max HP as Shield to self and (1 + (highest Reason. - 2)) allies with the least current HP, and apply 2 [Blubberbubble] as well<br>"+
            "(max of other allies that gain [Blubberbubble]: 3)<br>"+
            "- If the affected unit already has [Blubberbubble], change the [Blubberbubble] value to 2<br>"+
            "- At 4+ highest Gloom A-Reason., this Skill's above effects change to 'apply 3 [Blubberbubble]' and 'change the [Blubberbubble] value to 3' instead.", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Sinclair/EGO/CavernousWailing/21006awakenprofile.png'
}

const CavernousWailingSinclairCorrosion: Skill = {
    Name: "Cavernous Wailing",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 24,
    Coins: 1,
    CoinValue: -8,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "[Before Attack] Gain (highest Reson. - 2) Atk Weight (max 2)<br>"+
            "[Before Attack] Gain +10 [Aggro] to this Skill Slot next turn"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking] and +3 [Sinking] Count<br>"+
            "[After Attack] Gain (20 + 5(highest Reason.))% of this unit's max HP as Shield to self and gain 2 [Blubberbubble]. (max 40%)<br>"+
            "- If this unit already has [Blubberbubble] , change the [Blubberbubble] value to 2<br>"+
            "- At 4+ highest Gloom A-Reason., this Skill's above effects change to 'apply 3 [Blubberbubble]' and 'change the [Blubberbubble] value to 3' instead.<br>"+
            "- At 4+ Gloom Reason., gain additional Shield equal to 10% of this unit's max HP", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Sinclair/EGO/CavernousWailing/21006erosionprofile.png'
}

export const CavernousWailingSinclair: Ego = {
    Id: 21006,
    Name: "Cavernous Wailing",
    Sinner: SinnerEnum.Sinclair,
    RiskLevel: RiskLevelEnum.ZAYIN,
    AwakeningSkill: CavernousWailingSinclairAwakening,
    AwakeningSanityCost: 15,
    CorrosionSkill: CavernousWailingSinclairCorrosion,
    CorrosionSanityCost: 15,
    Passive: new Passive("Tear Film", PassiveTypeEnum.Ego, "Turn Start: If this unit has Shield, gain 1 [Protection]<br>"+
        "If this unit is under [Blubberbubble]'s effect, gain 1 additional [Protection]"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 2 },
                { sin: SinEnum.Gloom, resistance: 0.75 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Lust, amount: 1 },
            { sin: SinEnum.Sloth, amount: 2 },
            { sin: SinEnum.Gloom, amount: 3 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/Sinclair/EGO/CavernousWailing/21006cg.png'
}