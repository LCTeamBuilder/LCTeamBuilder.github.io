import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class HexNailRodionCorrosion implements Skill{
    readonly Name: string = "Hex Nail";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Envy;
    readonly BaseValue: number = 28;
    readonly Coins: number = 2;
    readonly CoinValue: number = -6;
    readonly AttackWeight: number = 3;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly<br>"+
            "[After Attack] Heal 3 other allies with the least HP percentage for 20% of this unit's max HP<br>"+
            "- Each heal-receiving unit gains 1 [Offense Level Up] until next turn for every negative effect on themselves (max 3)<br>"+
            "- At 4+ Envy Reson. including this Skill, heal 1 additional ally"),
        new SkillDescriptionPart("[On Hit] Inflict 4 [Bleed]<br>"+
            "[On Hit] Inflict +2 [Bleed] Count", 1),
        new SkillDescriptionPart(" [On Hit] Inflict 3 [Curse]<br>"+
            "[Tails Hit] Inflict 3 [Nails]", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Rodion/EGO/HexNail/20907erosionprofile.png";
}