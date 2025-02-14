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

const BygoneDaysGregorAwakening: Skill = {
    Name: "Bygone Days",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 20,
    Coins: 1,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: -3,
    SkillDescription: 
        [new SkillDescriptionPart("[After Attack] Heal 15 SP to self and 2 other allies with the least SP<br>"+
            "- If the target survives this attack, consume 3 [Sinking] Count on target, then heal additional SP(to self and affected allies) equal to [Sinking] Potency on target (Max SP heal: 20)<br>"+
            "- If the target is defeated, inflict 3 [Sinking] and 1 [Curse] on 3 random enemies (For Focused Encounters, random Parts)")],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Gregor/EGO/BygoneDays/21206awakenprofile.png'
}

const BygoneDaysGregorCorrosion: Skill = {
    Name: "Bygone Days",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 27,
    Coins: 1,
    CoinValue: -8,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly<br>"+
            "If the target has [Curse], deal +50% more damage"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Gloom Fragility]. Inflict 1 additional [Gloom Fragility] for every 2 Gloom Reson. (max 2)<br>"+
            "[On Hit] Inflict +3 [Sinking] Count<br>"+
            "[On Hit] Inflict 3 [Curse]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Gregor/EGO/BygoneDays/21206erosionprofile.png'
}

export const BygoneDaysGregor: Ego = {
    Id: 21206,
    Name: "Bygone Days",
    Sinner: SinnerEnum.Gregor,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: BygoneDaysGregorAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: BygoneDaysGregorCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("If I Could Go Back…", PassiveTypeEnum.Ego, "After Attack: If the target is defeated after this unit's attack, gain 1 E.G.O resource for the least-owned E.G.O resource.<br>"+
        "Gain 1 additional E.G.O resource for every 5 ([Sinking] Potency + Count) (max 3)<br>"+
        '(If there are 2 or more "least-owned E.G.O resource", select 1 of those Affinities at random to gain an E.G.O resource)'),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 0.5 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Lust, amount: 2 },
            { sin: SinEnum.Gloom, amount: 4 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/Gregor/EGO/BygoneDays/21206cg.png'
}