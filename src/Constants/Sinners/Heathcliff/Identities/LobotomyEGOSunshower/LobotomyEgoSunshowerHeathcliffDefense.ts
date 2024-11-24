import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LobotomyEgoSunshowerHeathcliffDefense implements Skill {
    readonly Name: string = "Warning";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Defense;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill1;
    readonly Affinity: SinEnum = SinEnum.Wrath;
    readonly BaseValue: number = 10;
    readonly Coins: number = 2;
    readonly CoinValue: number = -5;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +5;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] Gain 5 [Sinking]"),
        new SkillDescriptionPart("[Tails Hit] Gain 1 [Paralyze] next turn", 1),
        new SkillDescriptionPart("[On Hit] Inflict 5 [Sinking]<br>"+
            "[On Hit] Inflict 5 [Rupture]", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = undefined;
    readonly DefenseType?: DefenseTypeEnum | undefined = DefenseTypeEnum.Counter;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Heathcliff/LobotomyEGOSunshower/Warning.png";
}