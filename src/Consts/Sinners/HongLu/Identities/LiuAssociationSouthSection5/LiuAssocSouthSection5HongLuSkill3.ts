import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LiuAssocSouthSection5HongLuSkill3 implements Skill {
    readonly Name: string = "Crimson Blaze Fist";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Wrath;
    readonly BaseValue: number = 5;
    readonly Coins: number = 2;
    readonly CoinValue: number = +6;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("If target has 6+ [Burn] Count, Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]; if target already has [Burn], inflict +1 [Burn] Count", 1),
        new SkillDescriptionPart("[Heads Hit] Heal 6 SP<br>"+
            "[On Hit] If target has 6+ [Burn] Count, raise Stagger Threshold by 30% of damage dealt", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/HongLu/LiuAssociationSouthSection5/CrimsonBlazeFist.png";
}