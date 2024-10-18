import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class WCorpL2CleanupAgentHongLuSkill3 implements Skill {
    readonly Name: string = "Deploy Charge Barrier";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gluttony;
    readonly BaseValue: number = 5;
    readonly Coins: number = 3;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = -1;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] At 10+ [Charge] Count, consume all [Charge] Count to apply (Consumed [Charge] Count /2) [Charge Barrier] (Rounded Down) to 2 allies with the lowest HP%"),
        new SkillDescriptionPart("[On Hit] Inflict 5 [Rupture]<br>"+
            "[On Hit] Gain 2 [Charge Barrier] next turn", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/HongLu/WCorpL2CleanupAgent/DeployChargeBarrier.png";
}