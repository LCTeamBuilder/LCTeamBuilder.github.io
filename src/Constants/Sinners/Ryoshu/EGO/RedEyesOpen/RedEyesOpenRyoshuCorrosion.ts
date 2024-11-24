import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class RedEyesOpenRyoshuCorrosion implements Skill{
    readonly Name: string = "Red Eyes (Open)";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Envy;
    readonly BaseValue: number = 33;
    readonly Coins: number = 1;
    readonly CoinValue: number = -14;
    readonly AttackWeight: number = 3;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "If main target's Speed is lower than user's by 3 or more, +10 Final Power"),
        new SkillDescriptionPart("[On Hit] If target has 3+ [Bind] , deal +40% damage<br>"+
            "[On Hit] If this skill staggers or defeats a target, heal user and the ally with the least HP by 10% of Max HP", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Ryoshu/EGO/RedEyesOpen/20404erosionprofile.png";
}