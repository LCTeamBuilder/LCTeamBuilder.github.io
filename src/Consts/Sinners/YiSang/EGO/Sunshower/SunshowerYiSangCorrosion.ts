import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class SunshowerYiSangCorrosion implements Skill{
    readonly Name: string = "Sunshower";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Sloth;
    readonly BaseValue: number = 35;
    readonly Coins: number = 1;
    readonly CoinValue: number = -15;
    readonly AttackWeight: number = 7;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
                                "Targets randomly<br>"+
                                "[Before Attack] Gain 2 [Sloth Power Up] and 2 [Sloth DMG Up] this turn and the next 2 turns"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sloth Fragility] and 2 [Pierce Fragility] this turn and next turn", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/YiSang/EGO/Sunshower/20105erosionprofile.png";
}