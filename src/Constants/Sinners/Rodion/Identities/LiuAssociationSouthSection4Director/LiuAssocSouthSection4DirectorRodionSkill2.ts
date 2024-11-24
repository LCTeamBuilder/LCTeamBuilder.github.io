import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LiuAssocSouthSection4DirectorRodionSkill2 implements Skill {
    readonly Name: string = "Fiery Knifehand-Combust";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Wrath;
    readonly BaseValue: number = 4;
    readonly Coins: number = 3;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("Coin Power +1 for every 6 [Burn] on target (Max 2)"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Burn] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Burn] Count", 2),
        new SkillDescriptionPart("[Heads Hit] Inflict +1 [Burn] Count<br>"+
            "[On Hit] If the target has 6+ [Burn] Count, apply 3 [Burn] for 2 targets with no [Burn] or with the least [Burn] Count", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Rodion/LiuAssociationSouthSection4Director/FieryKnifehandCombust.png";
}