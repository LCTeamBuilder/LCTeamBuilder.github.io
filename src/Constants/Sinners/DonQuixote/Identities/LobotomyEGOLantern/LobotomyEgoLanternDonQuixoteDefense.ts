import {
    DefenseTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LobotomyEgoLanternDonQuixoteDefense: Skill = {
    Name: "Chattering Teeth",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 12,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] If target has 6+ [Rupture], Final Power +3<br>"+
            "[Turn End] Heal HP equal to remaining Shield HP (Once per turn. Max Heal amount: 10% of Max HP)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/LobotomyEGOLantern/ChatteringTeethUT4.png"
}