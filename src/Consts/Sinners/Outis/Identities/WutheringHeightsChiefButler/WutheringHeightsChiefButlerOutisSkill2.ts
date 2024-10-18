import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class WutheringHeightsChiefButlerOutisSkill2 implements Skill {
    readonly Name: string = "Dusting";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Gloom;
    readonly BaseValue: number = 4;
    readonly Coins: number = 3;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] If target has 5+ [Sinking], Coin Power +1<br>"+
            "[Clash Win] Inflict +2 [Sinking] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Sinking]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking]", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Outis/WutheringHeightsChiefButler/Dusting.png";
}