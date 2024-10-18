import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class CinqAssocsouthSection4DirectorSinclairSkill1 implements Skill {
    readonly Name: string = "Remise";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill1;
    readonly Affinity: SinEnum = SinEnum.Gluttony;
    readonly BaseValue: number = 3;
    readonly Coins: number = 2;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("If this unit's Speed is faster than the target's by 2 or more, Coin Power +1<br>"+
            "[On Use] Gain +2 [Poise] Count"),
        new SkillDescriptionPart("[On Hit] Gain 1 [Haste] next turn", 1),
        new SkillDescriptionPart("[On Hit] Gain 1 [Haste] next turn", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Sinclair/CinqAssociationSouthSection4Director/Remise.png";
}