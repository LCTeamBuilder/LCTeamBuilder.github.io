import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class WingbeatIshmaelCorrosion implements Skill{
    readonly Name: string = "Wingbeat";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gluttony;
    readonly BaseValue: number = 39;
    readonly Coins: number = 1;
    readonly CoinValue: number = -24;
    readonly AttackWeight: number = 3;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
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
            "[On Kill] Gain 1 [Attack Power Up] next turn (max 3)", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Ishmael/EGO/Wingbeat/20806erosionprofile.png";
}