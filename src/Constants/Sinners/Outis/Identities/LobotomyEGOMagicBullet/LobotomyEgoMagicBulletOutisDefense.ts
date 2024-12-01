import {
    DefenseTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LobotomyEgoMagicBulletOutisDefense: Skill = {
    Name: "The Price of a Bullet",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 10,
    Coins: 1,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: -3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain 1 [Magic Bullet] (Once per turn)<br>"+
            "[On Use] Gain Final Power equal to ([Magic Bullet] x2)<br>"+
            "[Skill End] Lose SP equal to [Magic Bullet]")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/LobotomyEGOMagicBullet/ThePriceOfABullet.png"
}