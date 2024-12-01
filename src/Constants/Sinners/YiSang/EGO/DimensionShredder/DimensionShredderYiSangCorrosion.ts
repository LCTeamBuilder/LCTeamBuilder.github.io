import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const DimensionShredderYiSangCorrosion: Skill = {
    Name: "Dimension Shredder",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 42,
    Coins: 1,
    CoinValue: -24,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "[Before Attack] Spend [Charge] Count to deal more damage (Max 75%)"),
        new SkillDescriptionPart("[On Hit] If [Charge] Count was spent, inflict 5 [Dimensional Rift]<br>"+
            "[On Hit] Inflict 6 [Rupture]<br>"+
            "[On Hit] Deal bonus Pride damage by (Target's [Rupture] x 10)% of the damage dealt, and reduce [Rupture] Count by 5 (Max 100%)", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/YiSang/EGO/DimensionShredder/20104erosionprofile.png"
}