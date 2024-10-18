import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class RosespannerWorkshopFixerGregorSkill1 implements Skill {
    readonly Name: string = "Rev Up";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill1;
    readonly Affinity: SinEnum = SinEnum.Gluttony;
    readonly BaseValue: number = 3;
    readonly Coins: number = 2;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +1;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] Gain +2 [Charge] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]<br>"+
            "[On Hit] If target has 5+ [Tremor] Count, inflict 3 [Rupture]", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Gregor/RosespannerWorkshopFixer/RevUp.png";
}