import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class RedEyesRyoshuCorrosion implements Skill{
    readonly Name: string = "Red Eyes";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 26;
    readonly Coins: number = 1;
    readonly CoinValue: number = -8;
    readonly AttackWeight: number = 3;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Bind] next turn<br>"+
            "[On Hit] If target has 3+ [Bind] , inflict 2 [Plus Coin Drop] next turn<br>"+
            "[On Hit] If target's Speed is lower than user's, inflict 1-3 [Slash Fragility] next turn", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Ryoshu/EGO/RedEyes/20403erosionprofile.png";
}