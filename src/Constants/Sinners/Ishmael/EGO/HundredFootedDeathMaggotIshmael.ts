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

const HundredFootedDeathMaggotIshmaelAwakening: Skill = {
    Name: "Hundred-Footed Death Maggot [蝍蛆殺]",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 10,
    Coins: 2,
    CoinValue: +5,
    AttackWeight: 3,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[After Attack] Inflict [Centipede Venom] equal to the sum of the types of negative effects on self and the main target (max 10)"), 
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking]", 1), 
        new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]<br>" +
            "[On Hit] At 4+ Gluttony or Gloom Reson., inflict [Centipede Venom] by Reson. (max 5)<br>", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Ishmael/EGO/HundredFootedDeathMaggot/20809awakenprofile.png'
}

const HundredFootedDeathMaggotIshmaelCorrosion: Skill = {
    Name: "Hundred-Footed Death Maggot [蝍蛆殺]",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 16,
    Coins: 2,
    CoinValue: -7,
    AttackWeight: 3,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>" +
            "Targets randomly<br>" +
            "[After Attack] Inflict [Centipede Venom] equal to the sum of the types of negative effects on self and the main target (max 10)<br>"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]<br>" +
            "[On Hit] At 4+ Gluttony or Gloom Reson., inflict [Centipede Venom] by Reson. (max 5)<br>", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Ishmael/EGO/HundredFootedDeathMaggot/20809erosionprofile.png'
}

export const HundredFootedDeathMaggotIshmael: Ego = {
    Id: 20809,
    Name: "Hundred-Footed Death Maggot [蝍蛆殺]",
    Sinner: SinnerEnum.Ishmael,
    RiskLevel: RiskLevelEnum.ZAYIN,
    AwakeningSkill: HundredFootedDeathMaggotIshmaelAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: HundredFootedDeathMaggotIshmaelCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Reversal Death by Gu Poison", PassiveTypeEnum.Ego, "Whenever this unit inflicts [Sinking] Potency, [Sinking] Count, or 'Unique Sinking' using its Attack Skills, gain 1 [Offense Level Up] next turn (max 2)<br>" +
        "- At 3+ Reson., with the same conditionals, gain 1 [Offense Level Up] next turn instead (max 3)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 0.75 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Sloth, amount: 2 },
            { sin: SinEnum.Pride, amount: 2 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/Ishmael/EGO/HundredFootedDeathMaggot/20809cg.png'
}