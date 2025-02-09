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

const SanguineDesireRodionAwakening: Skill = {
    Name: "Sanguine Desire",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 21,
    Coins: 1,
    CoinValue: +12,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 2 [Bleed] on target (max 13)<br>"+
            "[Combat Start] The main target for this Skill does not lose [Bleed] Count for this turn.<br>"+
            "[After Attack] For 3 turns, lose 10 SP at Turn End."),
        new SkillDescriptionPart("[On Hit] Inflict Lust Affinity damage equal to ([Bleed] Potency on target x 1.5)<br>"+
            "- At 4+ Lust Reson., inflict Lust Affinity damage equal to ([Bleed] Potency on target x 1.8).<br>"+
            "- At 4+ Lust A-Reson., inflict Lust Affinity damage equal to ([Bleed] Potency on target x 2).<br>"+
            "([Bleed] Potency up to only 99 will be used to calculate for this Skill.)<br>"+
            "[On Kill] If this Skill or its Coin effects dealt damage that exceeds the target's(In Focused Encounters, the Core's) remaining HP, deal the excess damage as fixed damage between all enemies.", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Rodion/EGO/SanguineDesire/20906awakenprofile.png'
}

const SanguineDesireRodionCorrosion: Skill = {
    Name: "Sanguine Desire",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 30,
    Coins: 1,
    CoinValue: -11,
    AttackWeight: 5,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly<br>"+
            "[Before Attack] Gain +1 Atk Weight (Max. 2) for every (highest Reson.) above 2"),
        new SkillDescriptionPart("[On Hit] Inflict (4 + (Lust Reson.)) [Bleed] (Maximum Lust Reson. taken into account: 6)<br>"+
            "[On Hit] Inflict +3 [Bleed] Count", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Rodion/EGO/SanguineDesire/20906erosionprofile.png'
}

export const SanguineDesireRodion: Ego = {
    Id: 20906,
    Name: "Sanguine Desire",
    Sinner: SinnerEnum.Rodion,
    RiskLevel: RiskLevelEnum.WAW,
    AwakeningSkill: SanguineDesireRodionAwakening,
    AwakeningSanityCost: 15,
    CorrosionSkill: SanguineDesireRodionCorrosion,
    CorrosionSanityCost: 30,
    Passive: new Passive("Obsession", PassiveTypeEnum.Ego, "This unit's leftmost Skill on the Dashboard inflicts double the [Bleed] Potency (once per turn)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 0.75 },
                { sin: SinEnum.Lust, resistance: 0.5 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 0.5 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 1 },
            { sin: SinEnum.Lust, amount: 3 },
            { sin: SinEnum.Pride, amount: 3 },
            { sin: SinEnum.Envy, amount: 3 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/Rodion/EGO/SanguineDesire/20906cg.png'
}