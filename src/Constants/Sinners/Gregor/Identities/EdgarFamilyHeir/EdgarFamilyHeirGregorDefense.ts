import {
    DefenseTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const EdgarFamilyHeirGregorDefense: Skill = {
    Name: "Do You Wish to Weep?",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: -4,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use]Coin Power +1 for every 3 [Sinking] on target (max 3)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Evade,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/EdgarFamilyHeir/DoYouWishToWeepUT4.png"
}