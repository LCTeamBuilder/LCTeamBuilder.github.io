import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class RCorp4thPackRabbitHeathcliffSkill3 implements Skill {
    readonly Name: string = "Quick Suppression";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Envy;
    readonly BaseValue: number = 3;
    readonly Coins: number = 5;
    readonly CoinValue: number = +2;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +5;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("Coin Power +2 at 6+ Speed"),
        new SkillDescriptionPart("Spend 1 [Ammo]<br>"+
            "[On Hit] Inflict 2 [Fragile]", 1),
        new SkillDescriptionPart("Spend 1 [Ammo]<br>"+
            "[On Hit] Inflict 2 [Fragile]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]", 3),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]", 4),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Rupture]", 5)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Heathcliff/RCorp4thPackRabbit/QuickSuppression.png";
}