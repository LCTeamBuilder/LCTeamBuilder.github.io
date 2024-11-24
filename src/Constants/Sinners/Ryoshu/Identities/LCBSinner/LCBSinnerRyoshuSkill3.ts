import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LCBSinnerRyoshuSkill3 implements Skill {
readonly Name: string = "Brushstroke";
readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
readonly Affinity: SinEnum = SinEnum.Pride;
readonly BaseValue: number = 5;
readonly Coins: number = 3;
readonly CoinValue: number = +3;
readonly AttackWeight: number = 1;
readonly SkillLevel: number = +2;
readonly SkillDescription: SkillDescriptionPart[] = [new SkillDescriptionPart("[Combat Start] Gain 2 [Slash DMG Up]"),
                                                    new SkillDescriptionPart("[On Hit] Gain 2 [Poise] next turn", 2)];
readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Ryoshu/LCBSinner/Brushstroke.png";
}