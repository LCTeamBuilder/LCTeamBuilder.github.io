import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class CinqAssocsouthSection4OutisSkill2 implements Skill {
    readonly Name: string = "Punition";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Gloom;
    readonly BaseValue: number = 4;
    readonly Coins: number = 2;
    readonly CoinValue: number = +5;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = -1;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("If this unit's Speed is higher than the target's, Coin Power +2<br>"+
            "[On Use] Gain +2 [Poise] Count<br>"+
            "[On Use] This Skill Slot gains 4 [Aggro] next turn"),
        new SkillDescriptionPart("[On Hit] Gain 2 [Poise]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bind] next turn", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Outis/CinqAssociationSouthSection4/Punition.png";
}