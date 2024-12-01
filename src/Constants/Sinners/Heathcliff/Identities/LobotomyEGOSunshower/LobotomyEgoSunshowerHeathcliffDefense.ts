import {
    DefenseTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LobotomyEgoSunshowerHeathcliffDefense: Skill = {
    Name: "Warning",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Wrath,
    BaseValue: 10,
    Coins: 2,
    CoinValue: -5,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain 5 [Sinking]"),
        new SkillDescriptionPart("[Tails Hit] Gain 1 [Paralyze] next turn", 1),
        new SkillDescriptionPart("[On Hit] Inflict 5 [Sinking]<br>"+
            "[On Hit] Inflict 5 [Rupture]", 2)],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Counter,
    SkillImageDir: "assets/Icons/Skills/Sinners/Heathcliff/LobotomyEGOSunshower/Warning.png"
}