import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const DimensionShredderYiSangAwakening: Skill = {
    Name: "Dimension Shredder",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 20,
    Coins: 1,
    CoinValue: +18,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Targets the rearmost unit (In regular encounters)<br>"+
            "[Before Attack] Spend [Charge] Count to deal more damage (Max 75%)"),
        new SkillDescriptionPart("[On Hit] If [Charge] Count was spent, inflict 5 [Dimensional Rift]<br>"+
            "[On Hit] Deal bonus Pride damage by (Target's [Rupture] x 10)% of the damage dealt, and reduce [Rupture] Count by 5 (Max 100%)", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/YiSang/EGO/DimensionShredder/20104awakenprofile.png"
}