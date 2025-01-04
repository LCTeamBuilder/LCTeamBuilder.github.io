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

const GardenOfThornsGregorAwakening: Skill = {
    Name: "Garden of Thorns",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 20,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 4,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] Gain (Count of highest Reson. - 2) +1 Atk Weight (Max. 3)<br>"+
            "[On Use] Apply 1 '(Corresponding Sin Affinity) Damage Up' and 1 '(Corresponding Sin Affinity) Power Up' to (4+ Count of highest Reson.) allies.<br>"+
            "- At 4+ Corresponding Reson., apply 1 additional '(Corresponding Sin Affinity) Damage up'<br>"+
            "- At 5+ Corresponding Reson., apply 1 additional '(Corresponding Sin Affinity) Power Up'<br>"+
            "- At 6+ Corresponding A-Reson., apply the above effects next turn as well"),
        new SkillDescriptionPart("[After Attack] Heal 4 allies with the lowest HP percentages for 22% of their max HP<br>"+
            "- Heal (highest Count of Reson. - 2) more allies (Max 3)", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Gregor/EGO/GardenOfThorns/21205awakenprofile.png"
}

const GardenOfThornsGregorCorrosion: Skill = {
    Name: "Garden of Thorns",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 30,
    Coins: 1,
    CoinValue: -10,
    AttackWeight: 4,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly<br>"+
            "[Before Attack] Gain (highest Count of Reson. - 2) +1 Atk Weight (Max. 3)"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Damage Down]. Inflict 2 [Bind] next turn<br>"+
            "[On Hit] Inflict 1 'Fragility' and 1 'Power Down' for the Sin Affinity with the highest Resonance count<br>"+
            "- At 4+ Corresponding Reson., inflict 1 additional '(Corresponding Sin Affinity) Fragility'<br>"+
            "- At 5+ Corresponding Reson., inflict 1 additional '(Corresponding Sin Affinity) Power Down'<br>"+
            "- At 6+ Corresponding A-Reson, apply the above effects next turn as well", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Gregor/EGO/GardenOfThorns/21205awakenprofile.png"
}

export const GardenOfThornsGregor: Ego = {
    Id: 21205,
    Name: "Garden of Thorns",
    Sinner: SinnerEnum.Gregor,
    RiskLevel: RiskLevelEnum.WAW,
    AwakeningSkill: GardenOfThornsGregorAwakening,
    AwakeningSanityCost: 30,
    CorrosionSkill: GardenOfThornsGregorCorrosion,
    CorrosionSanityCost: 35,
    Passive: new Passive("Crown of Thorns", PassiveTypeEnum.Ego, "Turn Start: Inflict 2 [Rupture] Potency on a random enemy (In Focused Encounters, all parts)<br>"+
        "When activating Absolute Resonance, inflict 2 [Rupture] Potency on all enemies at Combat Start"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 0.5 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 2 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 0.75 },
                { sin: SinEnum.Envy, resistance: 0.5 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 2 },
            { sin: SinEnum.Lust, amount: 2 },
            { sin: SinEnum.Sloth, amount: 2 },
            { sin: SinEnum.Gluttony, amount: 2 },
            { sin: SinEnum.Gloom, amount: 2 },
            { sin: SinEnum.Pride, amount: 2 },
            { sin: SinEnum.Envy, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Gregor/EGO/GardenOfThorns/21205cg.png"
}