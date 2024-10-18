import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LobotomyEgoMagicBulletOutisSkill3 implements Skill {
    readonly Name: string = "Magic Bullet Fire";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Pride;
    readonly BaseValue: number = 15;
    readonly Coins: number = 1;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +5;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("Deal +1% damage for every [Burn] on target (Max 30%)<br><br>"+

            "[Before Attack] Gain 1 [Magic Bullet]<br>"+
            "- Lose (([Magic Bullet] -1)x5) SP<br>"+
            "- Atk Weight becomes equal to [Magic Bullet] value<br>"+
            "- At 10 or less SP, 50% chance to attack indiscriminately<br><br>"+

            "[After Attack] If at 7 [Magic Bullet], reset to 0 (Counts as spending the last Ammo)"),
        new SkillDescriptionPart("[On Hit] Inflict [Dark Flame] equal to [Magic Bullet] next turn", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Outis/LobotomyEGOMagicBullet/MagicBulletFire.png";
}