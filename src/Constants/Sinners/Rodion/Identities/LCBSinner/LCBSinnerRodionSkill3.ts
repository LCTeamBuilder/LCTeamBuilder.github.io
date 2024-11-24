import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LCBSinnerRodionSkill3 implements Skill {
    readonly Name: string = "Slay";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Wrath;
    readonly BaseValue: number = 4;
    readonly Coins: number = 4;
    readonly CoinValue: number = +2;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +0;
    readonly SkillDescription: SkillDescriptionPart[] = [new SkillDescriptionPart("Skill Power +1 when below 0 SP"),
                                                        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Bleed]", 1),
                                                        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Bleed]", 2),
                                                        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Bleed]", 3),
                                                        new SkillDescriptionPart("[On Hit] If target has +6 [Bleed], deal +20% damage", 4)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Rodion/LCBSinner/Slay.png";
}