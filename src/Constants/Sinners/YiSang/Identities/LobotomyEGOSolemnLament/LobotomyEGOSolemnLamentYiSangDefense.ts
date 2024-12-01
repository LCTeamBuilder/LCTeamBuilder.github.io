import {
    DefenseTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LobotomyEGOSolemnLamentYiSangDefense: Skill = {
    Name: "FromTheCoffinAButterflyTakesFlight",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 10,
    Coins: 1,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] [Reload] (once per turn)<br>"+
        "[Combat Start] Gain Shield equal to (the sum of both [Butterfly] on the selected target)% HP. (max 20% per turn)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: "assets/Icons/Skills/Sinners/YiSang/LobotomyEGOSolemnLament/10110044.png"
}