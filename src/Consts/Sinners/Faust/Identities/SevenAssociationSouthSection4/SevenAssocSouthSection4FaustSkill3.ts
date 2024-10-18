import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class SevenAssocSouthSection4FaustSkill3 implements Skill {
    readonly Name: string = "Profiling";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gluttony;
    readonly BaseValue: number = 5;
    readonly Coins: number = 3;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] Deal +10% damage for every 3 [Rupture] on target (Max 50%)<br>"+
            "[Clash Win] Inflict +2 [Rupture] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Rupture]", 2),
        new SkillDescriptionPart("[After Attack] If target is Staggered or defeated, gain 1 [Haste] and 1 [Slash Power Up] next turn", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Faust/SevenAssociationSouthSection4/Profiling.png";
}