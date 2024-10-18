import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class DieciAssocSouthSection4YiSangSkill1 implements Skill {
    readonly Name: string = "Expend Knowledge";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill1;
    readonly Affinity: SinEnum = SinEnum.Gluttony;
    readonly BaseValue: number = 3;
    readonly Coins: number = 2;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = -1;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("Gain ([Insight] x 3% of Max HP) Shield if this Skill is Discarded<br>"+
            "[On Use] [Discard] 1 Skill of the highest rank in all of this unit's Skill Slots<br>"+
            "[On Use] If target has 5+ [Sinking], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Lower user's Stagger Threshold by [Insight]", 1),
        new SkillDescriptionPart("[On Hit] Lower user's Stagger Threshold by [Insight]", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/YiSang/DieciAssociationSouthSection4/ExpendKnowledge.png";
}