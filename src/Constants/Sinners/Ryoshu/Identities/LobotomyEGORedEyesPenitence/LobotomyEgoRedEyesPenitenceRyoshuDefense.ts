import {
    DefenseTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LobotomyEgoRedEyesPenitenceRyoshuDefense: Skill = {
    Name: "Mealtime, Bedtime",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Gain 2 [Red Eyes] (once per turn)<br>"+
            "- At less than 7 [Red Eyes], gain +1 additional [Red Eyes]", 1),
        new SkillDescriptionPart("[On Hit] Gain 2 [Penitence] (once per turn)<br>"+
            "- At less than 7 [Penitence], gain +1 additional [Penitence]", 2)],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Counter,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/LobotomyEGORedEyesPenitence/1041004.png"
}