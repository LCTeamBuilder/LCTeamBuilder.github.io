import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class KurokumoClanCaptainGregorSkill3 implements Skill {
    readonly Name: string = "Shadowcloud Shattercleave";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gloom;
    readonly BaseValue: number = 4;
    readonly Coins: number = 3;
    readonly CoinValue: number = +3;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] If the target has 7+ [Bleed], Clash Power +1<br>"+
            "[On Use] If the target has 10+ [Bleed], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Offense Level Down]<br>"+
            "[On Hit] If the target has 7+ [Bleed], inflict 1 [Offense Level Down] next turn", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Offense Level Down]<br>"+
            "[On Hit] If the target has 7+ [Bleed], inflict 1 [Offense Level Down] next turn", 2),
        new SkillDescriptionPart("[Heads Hit] Inflict 3 [Bleed]<br>"+
            "[On Hit] If the target has 7+ [Bleed], inflict 1 [Plus Coin Drop] next turn", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Gregor/KurokumoClanCaptain/ShadowcloudShattercleave.png";
}