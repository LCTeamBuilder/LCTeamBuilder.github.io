import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const SunshowerYiSangCorrosion: Skill = {
    Name: "Sunshower",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 35,
    Coins: 1,
    CoinValue: -15,
    AttackWeight: 7,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
        "Targets randomly<br>"+
        "[Before Attack] Gain 2 [Sloth Power Up] and 2 [Sloth DMG Up] this turn and the next 2 turns"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sloth Fragility] and 2 [Pierce Fragility] this turn and next turn", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/YiSang/EGO/Sunshower/20105erosionprofile.png"
}