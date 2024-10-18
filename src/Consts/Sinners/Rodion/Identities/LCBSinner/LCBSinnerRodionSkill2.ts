import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LCBSinnerRodionSkill2 implements Skill {
    readonly Name: string = "Axe Combo";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Pride;
    readonly BaseValue: number = 4;
    readonly Coins: number = 2;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +0;
    readonly SkillDescription: SkillDescriptionPart[] = [new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 1),
                                                        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 2),
                                                        new SkillDescriptionPart("[Heads Hit] Inflict +1 [Bleed] Count", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Rodion/LCBSinner/AxeCombo.png";
}