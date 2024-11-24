import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class DimensionShredderHongLuAwakening implements Skill{
    readonly Name: string = "Dimension Shredder";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Pride;
    readonly BaseValue: number = 22;
    readonly Coins: number = 1;
    readonly CoinValue: number = +6;
    readonly AttackWeight: number = 3;
    readonly SkillLevel: number = 1;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("Targets the rearmost unit (In regular encounters)<br>"+
            "[Before Attack] Gain +5 [Charge] Count; Gain 2 [Haste] next turn"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Fragile] and 4 [Dimensional Rift]", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/HongLu/EGO/DimensionShredder/20603awakenprofile.png";
}