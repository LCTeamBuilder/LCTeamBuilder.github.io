import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class DimensionShredderYiSangAwakening implements Skill{
    readonly Name: string = "Dimension Shredder";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Pride;
    readonly BaseValue: number = 20;
    readonly Coins: number = 1;
    readonly CoinValue: number = +18;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("Targets the rearmost unit (In regular encounters)<br>"+
            "[Before Attack] Spend [Charge] Count to deal more damage (Max 75%)"),
        new SkillDescriptionPart("[On Hit] If [Charge] Count was spent, inflict 5 [Dimensional Rift]<br>"+
            "[On Hit] Deal bonus Pride damage by (Target's [Rupture] x 10)% of the damage dealt, and reduce [Rupture] Count by 5 (Max 100%)", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/YiSang/EGO/DimensionShredder/20104awakenprofile.png";
}