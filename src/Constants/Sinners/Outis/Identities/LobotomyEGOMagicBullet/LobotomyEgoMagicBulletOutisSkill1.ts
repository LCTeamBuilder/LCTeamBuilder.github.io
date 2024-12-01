import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LobotomyEgoMagicBulletOutisSkill1: Skill = {
    Name: "Ignition",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Wrath,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 3 [Burn] on target (Max 3)"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Dark Flame] next turn", 1),
        new SkillDescriptionPart("[On Hit] Inflict [Burn] equal to [Dark Flame] on target", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/LobotomyEGOMagicBullet/Ignition.png"
}