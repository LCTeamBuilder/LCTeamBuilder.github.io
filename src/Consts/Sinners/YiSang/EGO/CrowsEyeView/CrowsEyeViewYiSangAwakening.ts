import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class CrowsEyeViewYisangAwakening implements Skill{
    readonly Name: string = "Crow's Eye View";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Sloth;
    readonly BaseValue: number = 18;
    readonly Coins: number = 1;
    readonly CoinValue: number = +8;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = -4;
    readonly SkillDescription: SkillDescriptionPart[] = [new SkillDescriptionPart("[On Hit] Inflict 2 [Attack Power Down]<br>[On Hit] Apply 3 [Haste] to all allies next turn<br>[On Hit] Inflict 2 [Bind] next turn")];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/YiSang/EGO/CrowsEyeView/20101awakenprofile.png";
}