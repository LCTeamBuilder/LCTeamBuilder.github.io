import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const EffervescentCorrosionHongLuAwakening: Skill = {
    Name: "Effervescent Corrosion",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 17,
    Coins: 1,
    CoinValue: +15,
    AttackWeight: 2,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] At 50%- HP, +1 Atk Weight<br>"+
            "At 25%- HP, gain an additiona +1 Atk Weight"),
        new SkillDescriptionPart("[On Hit] Inflict [Rupture] by (Gluttony Reson. /2)<br>"+
            "[On Hit] Inflict 2 [Gluttony Fragility] next turn<br>"+
            "[On Hit] Inflict 2 [Bind] next turn", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/HongLu/EGO/EffervescentCorrosion/20605awakenprofile.png"
}