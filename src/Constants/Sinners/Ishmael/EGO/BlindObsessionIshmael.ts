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

const BlindObsessionIshmaelAwakening: Skill = {
    Name: "Blind Obsession",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 20,
    Coins: 1,
    CoinValue: +15,
    AttackWeight: 7,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[After Attack] Heal 25 SP for 4 allies with the least SP"),
        new SkillDescriptionPart("[On Hit] Gain +6 [Charge] Count<br>"+
            "[On Hit] Give +2 [Poise] count to 1 random ally<br>"+
            "[After Attack] Apply 2 [Pierce Power Up] and 2 [Damage Up] to 4 allies with the highest SP", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Ishmael/EGO/BlindObsession/20805awakenprofile.png'
}

const BlindObsessionIshmaelCorrosion: Skill = {
    Name: "Blind Obsession",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 35,
    Coins: 1,
    CoinValue: -10,
    AttackWeight: 7,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly"),
        new SkillDescriptionPart("[On Hit] Heal 3% of Max HP on self<br>"+
            "[On Hit] Gain 1 [Poise] and +1 [Poise] Count<br>"+
            "[On Hit] Inflict 3 [Pride Fragility] this turn and next turn<br>"+
            "[After Attack] Apply 2 [Damage Up] this turn and next turn to 4 allies with the least SP", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Ishmael/EGO/BlindObsession/20805erosionprofile.png'
}

export const BlindObsessionIshmael: Ego = {
    Id: 20805,
    Name: "Blind Obsession",
    Sinner: SinnerEnum.Ishmael,
    RiskLevel: RiskLevelEnum.WAW,
    AwakeningSkill: BlindObsessionIshmaelAwakening,
    AwakeningSanityCost: 35,
    CorrosionSkill: BlindObsessionIshmaelCorrosion,
    CorrosionSanityCost: 35,
    Passive: new Passive("Temeritous Voyage", PassiveTypeEnum.Ego, "At the end of the turn, inflict 5 [Sinking] to 1 other ally with the lowest HP, Apply 1 [Haste] and 3 [Offense Level Up] next turn"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 0.75 },
                { sin: SinEnum.Gluttony, resistance: 2 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 0.5 },
                { sin: SinEnum.Envy, resistance: 0.5 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 2 },
            { sin: SinEnum.Gloom, amount: 3 },
            { sin: SinEnum.Pride, amount: 3 },
            { sin: SinEnum.Envy, amount: 3 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/Ishmael/EGO/BlindObsession/20805cg.png'
}