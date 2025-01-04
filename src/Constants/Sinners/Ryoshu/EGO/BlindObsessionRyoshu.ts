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

const BlindObsessionRyoshuAwakening: Skill = {
    Name: "Blind Obsession",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 18,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 3,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] Gain 4 [Poise]<br>"+
            "[After Attack] Gain 2 [Poise] for every unit defeated by this Skill"),
        new SkillDescriptionPart("[On Hit] Gain +2 [Charge] count<br>"+
            "[On Crit] Gain +2 [Charge] count", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Ryoshu/EGO/BlindObsession/20406awakenprofile.png"
}

const BlindObsessionRyoshuCorrosion: Skill = {
    Name: "Blind Obsession",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 30,
    Coins: 1,
    CoinValue: -12,
    AttackWeight: 3,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly<br>"+
            "[Before Attack] Gain 4 [Poise]. Consume 2 [Charge] Count to gain 1 Poise (Max 10)<br>"+
            "[After Attack] Gain +4 [Charge] Count for every unit defeated by this Skill"),
        new SkillDescriptionPart("[On Hit] Gain +1 [Poise] Count<br>"+
            "[On Crit] At 10+ [Poise], gain +30% Critical Damage", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Ryoshu/EGO/BlindObsession/20406erosionprofile.png"
}

export const BlindObsessionRyoshu: Ego = {
    Id: 20406,
    Name: "Blind Obsession",
    Sinner: SinnerEnum.Ryoshu,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: BlindObsessionRyoshuAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: BlindObsessionRyoshuCorrosion,
    CorrosionSanityCost: 25,
    Passive: new Passive("Dream Devouring", PassiveTypeEnum.Ego, "On Crit with a Pride affinity Skill, gain 1 [Poise] Count (3 times per turn)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 0.5 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Gloom, amount: 2 },
            { sin: SinEnum.Pride, amount: 2 },
            { sin: SinEnum.Envy, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Ryoshu/EGO/BlindObsession/20406cg.png"
}