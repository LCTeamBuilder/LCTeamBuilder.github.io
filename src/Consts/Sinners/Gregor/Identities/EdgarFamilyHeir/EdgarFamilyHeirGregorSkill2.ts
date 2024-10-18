import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class EdgarFamilyHeirGregorSkill2 implements Skill {
    readonly Name: string = "Remise";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Gloom;
    readonly BaseValue: number = 4;
    readonly Coins: number = 2;
    readonly CoinValue: number = +6;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +5;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] If that target has 6+ [Sinking], Coin Power +1<br>"+
            "[On Use] Clash Power +1 for every 3 [Sinking] Count on target (max 2)<br>"+
            "[Clash Win] Inflict +2 [Sinking] Count"),
        new SkillDescriptionPart("[On Hit] If the target has 5+ [Sinking], gain 1 [Haste] next turn", 1),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Sinking] Count", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Gregor/EdgarFamilyHeir/Remise.png";
}