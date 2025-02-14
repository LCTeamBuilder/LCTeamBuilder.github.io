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

const HexNailRodionAwakening: Skill = {
    Name: "Hex Nail",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 8,
    Coins: 2,
    CoinValue: +8,
    AttackWeight: 3,
    SkillLevel: -3,
    SkillDescription: 
        [new SkillDescriptionPart("[After Attack] Heal self and 2 other allies with the least HP percentage for 15% of this unit's max HP<br>"+
            "- Each heal-receiving unit heals +2.5% more HP for every negative effect on themselves (max 10%)<br>"+
            "- At 4+ Envy Reson. including this Skill, heal 1 additional ally"),
        new SkillDescriptionPart(" [On Hit] Inflict 4 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Curse]<br>"+
            "[Heads Hit] Inflict 3 [Nails]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Rodion/EGO/HexNail/20907awakenprofile.png'
}

const HexNailRodionCorrosion: Skill = {
    Name: "Hex Nail",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 28,
    Coins: 2,
    CoinValue: -6,
    AttackWeight: 3,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly<br>"+
            "[After Attack] Heal 3 other allies with the least HP percentage for 20% of this unit's max HP<br>"+
            "- Each heal-receiving unit gains 1 [Offense Level Up] until next turn for every negative effect on themselves (max 3)<br>"+
            "- At 4+ Envy Reson. including this Skill, heal 1 additional ally"),
        new SkillDescriptionPart("[On Hit] Inflict 4 [Bleed]<br>"+
            "[On Hit] Inflict +2 [Bleed] Count", 1),
        new SkillDescriptionPart(" [On Hit] Inflict 3 [Curse]<br>"+
            "[Tails Hit] Inflict 3 [Nails]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Rodion/EGO/HexNail/20907erosionprofile.png'
}

export const HexNailRodion: Ego = {
    Id: 20907,
    Name: "Hex Nail",
    Sinner: SinnerEnum.Rodion,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: HexNailRodionAwakening,
    AwakeningSanityCost: 25,
    CorrosionSkill: HexNailRodionCorrosion,
    CorrosionSanityCost: 30,
    Passive: new Passive("Iron Stake against the Heart", PassiveTypeEnum.Ego, "When inflicting [Bleed] or 'Unique Bleed' against an enemy with Base Attack Skills, inflict 1 [Defense Level Down] (once per turn)<br>"+
        "- If the target has [Bleed] or 'Unique Bleed', inflict additional 2 [Bleed] (once per turn)<br><br>"+

        "If an ally, including this unit, takes direct HP damage from the enemy, inflict 1 [Curse] against the target enemy (2 times per turn)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 0.75 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 2 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 0.5 }],
    Cost: [{ sin: SinEnum.Lust, amount: 2 },
            { sin: SinEnum.Pride, amount: 1 },
            { sin: SinEnum.Envy, amount: 4 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/Rodion/EGO/HexNail/20907cg.png'
}