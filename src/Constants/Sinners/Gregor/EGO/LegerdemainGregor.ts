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

const LegerdemainGregorAwakening: Skill = {
    Name: "Legerdemain",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 18,
    Coins: 1,
    CoinValue: +5,
    AttackWeight: 3,
    SkillLevel: -2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]<br>"+
            "[On Hit] Inflict 6 [Tremor]<br>"+
            "[On Hit] Inflict 4 [Paralyze]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Gregor/EGO/Legerdemain/21202awakenprofile.png"
}

const LegerdemainGregorCorrosion: Skill = {
    Name: "Legerdemain",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 28,
    Coins: 1,
    CoinValue: -14,
    AttackWeight: 3,
    SkillLevel: -2,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly"),
        new SkillDescriptionPart("[On Hit] Inflict 4 [Bleed]<br>"+
            "[On Hit] Inflict 4 [Paralyze]<br>"+
            "[On Hit] Inflict 6 [Maggots]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Gregor/EGO/Legerdemain/21202erosionprofile.png"
}

export const LegerdemainGregor: Ego = {
    Id: 21202,
    Name: "Legerdemain",
    Sinner: SinnerEnum.Gregor,
    RiskLevel: RiskLevelEnum.ZAYIN,
    AwakeningSkill: LegerdemainGregorAwakening,
    AwakeningSanityCost: 10,
    CorrosionSkill: LegerdemainGregorCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Maggots", PassiveTypeEnum.Ego, "On hit, inflict 5 [Maggots] at a (Gluttony A-Reson. x8)% chance."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 0.75 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Sloth, amount: 1 },
            { sin: SinEnum.Gluttony, amount: 3 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Gregor/EGO/Legerdemain/21202cg.png"
}