import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class RbChefDeCuisineRyoshuSkill2 implements Skill {
    readonly Name: string = "I.H.";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Envy;
    readonly BaseValue: number = 3;
    readonly Coins: number = 3;
    readonly CoinValue: number = +5;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] Gain 1 [Appetite]"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bind] next turn", 1),
        new SkillDescriptionPart("[Heads Hit] Inflict 3 [Bleed]", 2),
        new SkillDescriptionPart("[On Hit] If target has [Bleed] or [Paralyze], inflict 4 [HP Healing Down] next turn", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Ryoshu/RBChefDeCuisine/IH.png";
}