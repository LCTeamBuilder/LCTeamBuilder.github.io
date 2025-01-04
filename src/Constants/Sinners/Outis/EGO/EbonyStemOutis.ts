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

const EbonyStemOutisAwakening: Skill = {
    Name: "Ebony Stem",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 22,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 7,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict 2 Rupture<br>"+
            "[Heads Hit] Inflict 2 Bleed<br>"+
            "[On Hit] Inflict 2 Glut Fragility", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Outis/EGO/EbonyStem/21102awakenprofile.png"
}

const EbonyStemOutisCorrosion: Skill = {
    Name: "Ebony Stem",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 29,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 7,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly"),
        new SkillDescriptionPart("[On Hit] Inflict 5 [Rupture]<br>"+
            "[On Hit] Inflict 5 [Bleed]<br>"+
            "[On Hit] Inflict 3 [Gluttony Fragility]", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Outis/EGO/EbonyStem/21102erosionprofile.png"
}

export const EbonyStemOutis: Ego = {
    Id: 21102,
    Name: "Ebony Stem",
    Sinner: SinnerEnum.Outis,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: EbonyStemOutisAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: EbonyStemOutisCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Stem of Distrust", PassiveTypeEnum.Ego, "At the start of the turn, gain 1 [Pierce DMG Up]. On hit with a Heads coin, inflict 1 [Bind] and +1 [Rupture] Count next turn."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 0.5 },
                { sin: SinEnum.Gloom, resistance: 0.75 },
                { sin: SinEnum.Pride, resistance: 2 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Lust, amount: 2 },
            { sin: SinEnum.Gluttony, amount: 3 },
            { sin: SinEnum.Gloom, amount: 1 },
            { sin: SinEnum.Pride, amount: 4 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Outis/EGO/EbonyStem/21102cg.png"
}