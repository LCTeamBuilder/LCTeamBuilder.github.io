import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LobotomyEgoSunshowerHeathcliffSkill1: Skill = {
    Name: "Umbrella Thwack",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Envy,
    BaseValue: 6,
    Coins: 3,
    CoinValue: -2,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +1 [Sinking] Count<br>"+
            "[Clash Lose] Gain 3 [Sinking]"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking]<br>"+
            "[Tails Hit] Inflict +2 [Sinking] Count", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Heathcliff/LobotomyEGOSunshower/UmbrellaThwack.png"
}