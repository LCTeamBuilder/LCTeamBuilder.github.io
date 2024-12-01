import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const DimensionShredderOutisAwakening: Skill = {
    Name: "Dimension Shredder",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 21,
    Coins: 1,
    CoinValue: +9,
    AttackWeight: 4,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] Gain +1 Atk Weight (Max. 2) for every Reson. above 2<br>"+
            "[Before Attack] At less than 10 [Charge] Count, consume 10% HP to gain +10 [Charge] Count (this damage does not reduce this unit's HP to 0, rounded down)<br>"+
            "[Before Attack] Consume up to 40 [Charge] Count and deal +1% more damage for every [Charge] Count consumed (max 30%)"),
        new SkillDescriptionPart("[On Hit] Inflict ([Charge] - 1) [Dimensional Rift] (max 2)<br>"+
            "[On Hit] Gain 1 [Haste] and 1 [Load] next turn for every [Charge] (max 3 of each per Skill)<br>"+
            "[On Kill] Gain +2 [Charge] Count", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Outis/EGO/DimensionShredder/21107awakenprofile.png"
}