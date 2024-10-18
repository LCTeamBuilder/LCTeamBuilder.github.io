import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class BladeLineageSalsuSinclairSkill3 implements Skill {
    readonly Name: string = "To Claim Their Bones";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Pride;
    readonly BaseValue: number = 8;
    readonly Coins: number = 1;
    readonly CoinValue: number = +18;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("At 10+ [Poise] Count, +150% Critical Damage"),
        new SkillDescriptionPart("[On Hit] Inflict 5 [Paralyze]<br>"+
            "[On Hit] Inflict 3 [Bleed]", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Sinclair/BladeLineageSalsu/ToClaimTheirBones.png";
}