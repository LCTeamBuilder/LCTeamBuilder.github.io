import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LobotomyEgoMagicBulletOutisSkill3: Skill = {
    Name: "Magic Bullet Fire",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 15,
    Coins: 1,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("Deal +1% damage for every [Burn] on target (Max 30%)<br><br>"+

            "[Before Attack] Gain 1 [Magic Bullet]<br>"+
            "- Lose (([Magic Bullet] -1)x5) SP<br>"+
            "- Atk Weight becomes equal to [Magic Bullet] value<br>"+
            "- At 10 or less SP, 50% chance to attack indiscriminately<br><br>"+

            "[After Attack] If at 7 [Magic Bullet], reset to 0 (Counts as spending the last Ammo)"),
        new SkillDescriptionPart("[On Hit] Inflict [Dark Flame] equal to [Magic Bullet] next turn", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/LobotomyEGOMagicBullet/MagicBulletFire.png"
}