import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class RedEyesRyoshuAwakening implements Skill{
    readonly Name: string = "Red Eyes";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 18;
    readonly Coins: number = 1;
    readonly CoinValue: number = +6;
    readonly AttackWeight: number = 3;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Hit] Inflict 3 [Bind] next turn<br>"+
            "[On Hit] If target has 3+ [Bind] , inflict 1 [Plus Coin Drop] next turn<br>"+
            "[On Hit] If target's Speed is lower than user's, inflict 2 [Slash Fragility] next turn", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Ryoshu/EGO/RedEyes/20403awakenprofile.png";
}