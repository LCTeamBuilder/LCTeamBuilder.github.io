import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const DimensionShredderHongLuAwakening: Skill = {
    Name: "Dimension Shredder",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 22,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 3,
    SkillLevel: 1,
    SkillDescription: 
        [new SkillDescriptionPart("Targets the rearmost unit (In regular encounters)<br>"+
            "[Before Attack] Gain +5 [Charge] Count, Gain 2 [Haste] next turn"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Fragile] and 4 [Dimensional Rift]", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/HongLu/EGO/DimensionShredder/20603awakenprofile.png"
}