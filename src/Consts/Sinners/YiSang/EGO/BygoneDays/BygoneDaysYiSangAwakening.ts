import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class BygoneDaysYiSangAwakening implements Skill{
    readonly Name: string = "Bygone Days";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gloom;
    readonly BaseValue: number = 15;
    readonly Coins: number = 1;
    readonly CoinValue: number = +8;
    readonly AttackWeight: number = 3;
    readonly SkillLevel: number = +0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[After Attack] Randomly inflict (6 + (Gloom Reson. x1.5)) [Sinking] between targets"),
        new SkillDescriptionPart("[On Hit] If the target has 6+ [Sinking], inflict 2 [Bind] next turn", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/YiSang/EGO/BygoneDays/20106awakenprofile.png";
}