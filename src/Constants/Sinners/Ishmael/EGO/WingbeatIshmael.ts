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

const WingbeatIshmaelAwakening: Skill = {
    Name: "Wingbeat",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +7,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("If this Skill's healing exceeds this unit's max HP, redirect the excess healing to 1 ally with the least HP percentage instead"),
        new SkillDescriptionPart("[On Hit] Heal 20% of Max HP on self", 1),
        new SkillDescriptionPart("[Heads Hit] Lose 1~2 SP<br>"+
            "[Heads Hit] Reuse this Coin (5 times per Skill)<br>"+
            "[On Hit] Heal self by 8~12% of damage dealt<br>"+
            "[On Hit] Inflict 1 [Gluttony Fragility]<br>"+
            "[On Hit] Inflict 1~4 [Bleed]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Ishmael/EGO/Wingbeat/20806awakenprofile.png"
}

const WingbeatIshmaelCorrosion: Skill = {
    Name: "Wingbeat",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 39,
    Coins: 1,
    CoinValue: -24,
    AttackWeight: 3,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets the unit with the least Core HP<br>"+
            "[Before Attack] Gain (of highest Reson. - 2) +1 Atk Weight (Max. 2)<br>"+
            "[Before Attack] Deal 5% HP damage to at most 5 random other allies<br>"+
            "- Heal HP on self equal to the damage dealt to allies.<br>"+
            "If this unit dealt damage to an ally, gain 2 [Attack Power Up] this turn, and gain 2 [Haste] next turn.<br>"+
            "(Once per turn. The 'dealt damage' includes damage dealt to Shield HP. This effect can kill allies.)<br>"+
            "[After Attack] If this Skill's healing exceeds this unit's max HP, gain (excess heal/max HP) x 10 [Offense Level Up] next turn. (max 6 per turn)"),
        new SkillDescriptionPart("[Tails Hit] Heal self by 20% of damage dealt<br>"+
            "[Tails Hit] Inflict 3~6 [Bleed]<br>"+
            "[On Kill] Gain 1 [Attack Power Up] next turn (max 3)", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Ishmael/EGO/Wingbeat/20806erosionprofile.png"
}

export const WingbeatIshmael: Ego = {
    Id: 20806,
    Name: "Wingbeat",
    Sinner: SinnerEnum.Ishmael,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: WingbeatIshmaelAwakening,
    AwakeningSanityCost: 25,
    CorrosionSkill: WingbeatIshmaelCorrosion,
    CorrosionSanityCost: 25,
    Passive: new Passive("Gluttony", PassiveTypeEnum.Ego, "If the main target took HP damage this turn and isn't at max HP at Skill Use:<br>"+
        "On Hit,<br>"+
        "- When this unit is at max HP, deal +5~+10% more damage.<br>"+
        "- When this unit isn't at max HP, heal 2~5 HP.<br>"+
        "(7 times per turn)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 0.75 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 0.5 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 2 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Lust, amount: 1 },
            { sin: SinEnum.Gluttony, amount: 3 },
            { sin: SinEnum.Pride, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Ishmael/EGO/Wingbeat/20806cg.png"
}