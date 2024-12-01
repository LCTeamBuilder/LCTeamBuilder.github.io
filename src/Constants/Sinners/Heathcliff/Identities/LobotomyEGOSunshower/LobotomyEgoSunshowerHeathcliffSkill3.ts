import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LobotomyEgoSunshowerHeathcliffSkill3: Skill = {
    Name: "Spread Out!",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 18,
    Coins: 3,
    CoinValue: -7,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain 6 [Sinking] and +3 [Sinking] Count"),
        new SkillDescriptionPart("[Tails Hit] Inflict 1 [Paralyze] next turn", 1),
        new SkillDescriptionPart("[On Hit] Inflict 5 [Rupture]<br>"+
            "[Tails Hit] Inflict 1 [Fragile] next turn", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Heathcliff/LobotomyEGOSunshower/SpreadOut.png"
}