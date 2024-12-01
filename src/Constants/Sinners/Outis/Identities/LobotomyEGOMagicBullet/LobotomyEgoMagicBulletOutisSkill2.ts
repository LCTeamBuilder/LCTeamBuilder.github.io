import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LobotomyEgoMagicBulletOutisSkill2: Skill = {
    Name: "Detonate Magic Bullet",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 6 [Burn] on target (Max 3)"),
        new SkillDescriptionPart("[On Hit] At less than 4 [Magic Bullet], gain 1 [Magic Bullet], then, inflict [Dark Flame] equal to [Magic Bullet] next turn", 1),
        new SkillDescriptionPart("[On Hit] Inflict [Burn] equal to [Dark Flame] on target", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/LobotomyEGOMagicBullet/DetonateMagicBullet.png"
}