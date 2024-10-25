import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class HexNailRodionAwakening implements Skill{
    readonly Name: string = "Hex Nail";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Envy;
    readonly BaseValue: number = 8;
    readonly Coins: number = 2;
    readonly CoinValue: number = +8;
    readonly AttackWeight: number = 3;
    readonly SkillLevel: number = -3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[After Attack] Heal self and 2 other allies with the least HP percentage for 15% of this unit's max HP<br>"+
            "- Each heal-receiving unit heals +2.5% more HP for every negative effect on themselves (max 10%)<br>"+
            "- At 4+ Envy Reson. including this Skill, heal 1 additional ally"),
        new SkillDescriptionPart(" [On Hit] Inflict 4 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Curse]<br>"+
            "[Heads Hit] Inflict 3 [Nails]", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Rodion/EGO/HexNail/20907awakenprofile.png";
}