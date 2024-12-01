import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const EffervescentCorrosionHongLuCorrosion: Skill = {
    Name: "Effervescent Corrosion",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 27,
    Coins: 1,
    CoinValue: -12,
    AttackWeight: 3,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Target the unit with the least HP<br>"+
            "[Before Attack] At 50%- HP, +1 Atk Weight<br>"+
            "At 25%- HP, gain an additiona +1 Atk Weight"),
        new SkillDescriptionPart("[On Hit] Inflict [Rupture] Count by (Gluttony Reson. /3)<br>"+
            "[On Hit] Heal 50% of damage dealt<br>"+
            "[On Hit] Inflict 2 [Bind] next turn", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/HongLu/EGO/EffervescentCorrosion/20605awakenprofile.png"
}