import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LanternGregorCorrosion implements Skill{
    readonly Name: string = "Lantern";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gluttony;
    readonly BaseValue: number = 19;
    readonly Coins: number = 1;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 5;
    readonly SkillLevel: number = -3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Target the unit with most health"),
        new SkillDescriptionPart("[On Hit] Heal 30% of damage dealt<br>"+
            "[Heads Hit] Inflict 5 [Rupture]", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Gregor/EGO/Lantern/21203erosionprofile.png";
}