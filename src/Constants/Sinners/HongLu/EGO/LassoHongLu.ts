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

const LassoHongLuAwakening: Skill = {
    Name: "Lasso",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +2,
    AttackWeight: 2,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("If the sum of this unit and the target's Speed is 6 or greater, Coin Power +1<br>"+
            "Coin Power +1 for every 7 [Rupture] on the target (max 2)<br>"+
            "[Before Attack] Gain 2 [Haste] next turn"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Lasso]", 2),
        new SkillDescriptionPart("On Hit] Inflict 2 [HP Healing Down] next turn<br>"+
            "[On Hit] Inflict +1 [Rupture] Count for every 2 Gluttony Reson. (max 3)", 3),
        new SkillDescriptionPart("[On Hit] Randomly inflict [Bleed] equal to this unit's Speed between the targets (max 7)<br>"+
            "[On Hit] Randomly inflict [Rupture] equal to this unit's Speed between the targets (max 7)", 4)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/HongLu/EGO/Snare/20607awakenprofile.png"
}

const LassoHongLuCorrosion: Skill = {
    Name: "Lasso",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 2,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets the unit with the highest Speed<br>"+
            "If the sum of this unit and the target's Speed is 6 or greater, Coin Power +1<br>"+
            "Coin Power +1 for every 7 [Rupture] on the target (max 2)<br>"+
            "[Before Attack] Gain 2 [Haste] next turn<br>"+
            "[Before Attack] At 4+ Gluttony or Lust Reson., gain +1 Atk Weight"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Lasso]", 1),
        new SkillDescriptionPart("On Hit] Inflict 2 [HP Healing Down] next turn<br>"+
            "[On Hit] Inflict +2 [Bleed] Count<br>"+
            "[On Hit] Inflict +2 [Rupture] Count", 2),
        new SkillDescriptionPart("[On Hit] Deal +1% more damage for every [Bleed] on the target (max 30%)<br>"+
            "[On Hit] Deal +1% more damage for every [Rupture] on the target (max 30%)", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/HongLu/EGO/Snare/20607erosionprofile.png"
}

export const LassoHongLu: Ego = {
    Id: 20607,
    Name: "Lasso",
    Sinner: SinnerEnum.HongLu,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: LassoHongLuAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: LassoHongLuCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Time to Hunt", PassiveTypeEnum.Ego, "If an enemy or an ally is killed due to [Rupture] or [Bleed] damage, inflict 2 [Lasso] against a random enemy, and gain 1 [Haste] next turn (once per turn)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 0.5 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Lust, amount: 1 },
            { sin: SinEnum.Gluttony, amount: 4 },
            { sin: SinEnum.Pride, amount: 1 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/HongLu/EGO/Snare/20607cg.png"
}