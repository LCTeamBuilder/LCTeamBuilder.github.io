import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LanternSinclairAwakening: Skill = {
    Name: "Lantern",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 18,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 3,
    SkillLevel: -2,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] At 50%- HP, +2 Atk Weight"),
        new SkillDescriptionPart("[On Hit] Inflict 3 Rupture [On Hit] Heal 2 allies with the lowest HP by 15% of Max HP.", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Sinclair/EGO/Lantern/21004awakenprofile.png"
}