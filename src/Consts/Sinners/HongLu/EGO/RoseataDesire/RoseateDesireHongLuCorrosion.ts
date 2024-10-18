import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class RoseateDesireHongLuCorrosion implements Skill{
    readonly Name: string = "Roseate Desire";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 30;
    readonly Coins: number = 1;
    readonly CoinValue: number = -15;
    readonly AttackWeight: number = 3;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets the unit with the highest Speed"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Defense Power Down]<br>"+
            "[On Hit] Inflict 5 [Defense Level Down]<br>"+
            "[On Hit] Inflict 4 [Bind] next turn", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/HongLu/EGO/RoseataDesire/20602erosionprofile.png";
}