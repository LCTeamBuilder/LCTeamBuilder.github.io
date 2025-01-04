import {
    DamageTypeEnum,
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../Enums/Index";
import { Ego, Passive, Skill, SkillDescriptionPart } from "../../../../Models/Index";

const LassoFaustAwakening: Skill = {
    Name: "Lasso",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("If the sum of this unit and the target's Speed is 6 or greater, Coin Power +1<br>"+
            "Coin Power +1 for ever 7 [Rupture] on the target (max 2)<br>"+
            "[Before Attack] Gain 2 [Haste] next turn<br>"+
            "[Before Attack] At 4+ highest Reson., Atk Weight +1<br>"+
            "- If the said Reson. was a Gluttony Reson., Atk Weight +1"),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Rupture] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]", 3),],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Faust/EGO/Snare/20207awakenprofile.png"
}

const LassoFaustCorrosion: Skill = {
    Name: "Lasso",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 3,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets the unit with the highest Speed<br>"+
            "If the sum of this unit and the target's Speed is 6 or greater, Coin Power +1<br>"+
            "Coin Power +1 for every 7 [Rupture] on the target (max 2)<br>"+
            "[Before Attack] Gain 2 [Haste] next turn<br>"+
            "[After Attack] If the target is Staggered or defeated, gain 1 [Gluttony Power Up] next turn"),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Rupture] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 4 [Rupture]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Lasso]<br>"+
            "[On Hit] Deal +2% more damage for every [Rupture] on the target (max 60%)", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Faust/EGO/Snare/20207erosionprofile.png"
}

export const LassoFaust: Ego = {
    Id: 20207,
    Name: "Lasso",
    Sinner: SinnerEnum.Faust,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: LassoFaustAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: LassoFaustCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Sprawling Lasso", PassiveTypeEnum.Ego, "After Attack, if the target is Staggered or defeated, inflict +1 [Rupture] Count against 2 random enemies (once per turn, cannot stack, in Focused Encounters, against 2 random Parts)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 0.5 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Lust, amount: 1 },
            { sin: SinEnum.Gluttony, amount: 3 },
            { sin: SinEnum.Envy, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Faust/EGO/Snare/20207cg.png"
}