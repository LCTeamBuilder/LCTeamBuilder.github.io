import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class ThePequodFirstMateYiSangSkill3 implements Skill {
    readonly Name: string = "Ambush";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gluttony;
    readonly BaseValue: number = 4;
    readonly Coins: number = 2;
    readonly CoinValue: number = +6;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = [
        new SkillDescriptionPart("[On Use] Gain 5 [Poise]<br>"+
            "At 7+ [Poise], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Gain +2 [Poise] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 4 [Bleed]<br>"+
            "[On Crit] Inflict +6 [Bleed] Count", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/YiSang/ThePequodFirstMate/Ambush.png";
}