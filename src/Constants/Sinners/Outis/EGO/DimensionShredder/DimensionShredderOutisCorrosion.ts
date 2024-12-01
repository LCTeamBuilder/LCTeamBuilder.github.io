import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const DimensionShredderOutisCorrosion: Skill = {
    Name: "Dimension Shredder",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 32,
    Coins: 1,
    CoinValue: -13,
    AttackWeight: 4,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "[Before Attack] Gain +1 Atk Weight (Max. 2) for every Reson. above 2<br>"+
            "[Before Attack] At less than maximum [Charge] Count, consume (missing [Charge] Count)% HP to gain up to max [Charge] Count (max [Charge] Count obtainable from this effect: 30. This damage does not reduce this unit's HP to 0, rounded down)<br>"+
            "[Before Attack] Consume up to 40 [Charge] Count and deal +2% more damage for every [Charge] Count consumed (max 60%)"),
        new SkillDescriptionPart("[On Hit] Inflict ([Charge] - 1) [Dimensional Rift] (max 4)<br>"+
            "[On Hit] Gain 1 [Haste] and 1 [Load] next turn for every [Charge] (max 3 of each per Skill)<br>"+
            "[On Kill] Gain +2 [Charge] Count", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Outis/EGO/DimensionShredder/21107erosionprofile.png"
}