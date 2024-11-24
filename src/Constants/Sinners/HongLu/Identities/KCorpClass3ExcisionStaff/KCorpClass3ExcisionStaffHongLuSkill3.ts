import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class KCorpClass3ExcisionStaffHongLuSkill3 implements Skill {
    readonly Name: string = "Excise Target";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Sloth;
    readonly BaseValue: number = 8;
    readonly Coins: number = 2;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("At 80% or more HP, Coin Power +2"),
        new SkillDescriptionPart("[On Hit] Inflict 4 [Rupture]", 1),
        new SkillDescriptionPart("[On Hit] Inflict [Rupture] Count by the amount of [K Corp Ampule]; Deal +5% damage per [K Corp Ampule]", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/HongLu/KCorpClass3ExcisionStaff/ExciseTarget.png";
}