import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const WingbeatIshmaelCorrosion: Skill = {
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