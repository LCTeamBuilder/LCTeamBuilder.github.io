import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LobotomyEgoRedEyesPenitenceRyoshuDefense implements Skill {
    readonly Name: string = "Mealtime, Bedtime";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Defense;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill1;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 5;
    readonly Coins: number = 2;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +1;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Hit] Gain 2 [Red Eyes] (once per turn)<br>"+
            "- At less than 7 [Red Eyes], gain +1 additional [Red Eyes]", 1),
        new SkillDescriptionPart("[On Hit] Gain 2 [Penitence] (once per turn)<br>"+
            "- At less than 7 [Penitence], gain +1 additional [Penitence]", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = undefined;
    readonly DefenseType?: DefenseTypeEnum | undefined = DefenseTypeEnum.Counter;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Ryoshu/LobotomyEGORedEyesPenitence/1041004.png";
}