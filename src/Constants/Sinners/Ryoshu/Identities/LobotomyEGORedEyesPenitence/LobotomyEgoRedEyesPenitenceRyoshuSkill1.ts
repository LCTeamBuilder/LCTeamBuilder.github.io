import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LobotomyEgoRedEyesPenitenceRyoshuSkill1: Skill = {
    Name: "Both of You, Shut Up",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Envy,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("At 7+ [Red Eyes], Coin Power +1<br>"+
            "At 7+ [Penitence], Clash Power +1"),
        new SkillDescriptionPart("[On Hit] Gain 3 [Penitence]<br>"+
            "[Heads Hit] Gain 1 [Penitence]", 1),
        new SkillDescriptionPart("[On Hit] Gain 2 [Red Eyes]<br>"+
            "[On Hit] Inflict 1 [Bleed]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/LobotomyEGORedEyesPenitence/1041001.png"
}