import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const DimensionShredderHongLuCorrosion: Skill = {
    Name: "Dimension Shredder",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 24,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 3,
    SkillLevel: 5,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets the unit with the most HP<br>"+
            "[Before Attack] Gain 3 [Haste] next turn<br>"+
            "Spend 10 Charge to inflict +2 [Fragile] and [Dimensional Rift] with this skill"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Fragile] and 4 [Dimensional Rift]", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/HongLu/EGO/DimensionShredder/20603erosionprofile.png"
}