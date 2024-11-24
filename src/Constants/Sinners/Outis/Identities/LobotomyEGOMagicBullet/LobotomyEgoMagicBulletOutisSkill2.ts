import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LobotomyEgoMagicBulletOutisSkill2 implements Skill {
    readonly Name: string = "Detonate Magic Bullet";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Pride;
    readonly BaseValue: number = 4;
    readonly Coins: number = 2;
    readonly CoinValue: number = +6;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("Coin Power +1 for every 6 [Burn] on target (Max 3)"),
        new SkillDescriptionPart("[On Hit] At less than 4 [Magic Bullet], gain 1 [Magic Bullet]; then, inflict [Dark Flame] equal to [Magic Bullet] next turn", 1),
        new SkillDescriptionPart("[On Hit] Inflict [Burn] equal to [Dark Flame] on target", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Outis/LobotomyEGOMagicBullet/DetonateMagicBullet.png";
}