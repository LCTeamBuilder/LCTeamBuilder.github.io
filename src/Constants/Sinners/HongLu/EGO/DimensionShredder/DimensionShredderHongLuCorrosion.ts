import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class DimensionShredderHongLuCorrosion implements Skill{
    readonly Name: string = "Dimension Shredder";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Pride;
    readonly BaseValue: number = 24;
    readonly Coins: number = 1;
    readonly CoinValue: number = +10;
    readonly AttackWeight: number = 3;
    readonly SkillLevel: number = 5;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets the unit with the most HP<br>"+
            "[Before Attack] Gain 3 [Haste] next turn<br>"+
            "Spend 10 Charge to inflict +2 [Fragile] and [Dimensional Rift] with this skill"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Fragile] and 4 [Dimensional Rift]", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/HongLu/EGO/DimensionShredder/20603erosionprofile.png";
}