import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class DieciAssocSouthSection4HongLuSkill3 implements Skill {
    readonly Name: string = "Cyclical Knowledge";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Sloth;
    readonly BaseValue: number = 5;
    readonly Coins: number = 3;
    readonly CoinValue: number = +3;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +4;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] At 2+ [Insight], gain Coin Power equal to [Insight]<br>"+
            "[On Use] Deal +3% more damage per [Sinking] on target (Max 30%)"),
        new SkillDescriptionPart("[On Hit] Inflict +4 [Sinking] Count<br>"+
            "[After Attack] If target is Staggered or defeated, heal 10 SP", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/HongLu/DieciAssociationSouthSection4/CyclicalKnowledge.png";
}