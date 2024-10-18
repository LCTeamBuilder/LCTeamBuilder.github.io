import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LCBSinnerRyoshuSkill1 implements Skill {
    readonly Name: string = "Paint";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill1;
    readonly Affinity: SinEnum = SinEnum.Gluttony;
    readonly BaseValue: number = 4;
    readonly Coins: number = 1;
    readonly CoinValue: number = +7;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = [new SkillDescriptionPart("[On Hit] Gain 2 [Poise] next turn", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Ryoshu/LCBSinner/Paint.png";
}