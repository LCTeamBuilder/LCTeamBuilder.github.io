import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class TheOneWhoGripsFaustSkill3 implements Skill {
    readonly Name: string = "Execution";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Pride;
    readonly BaseValue: number = 6;
    readonly Coins: number = 3;
    readonly CoinValue: number = +2;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +4;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Kill] Heal all allies for 10 SP and apply 1 [Pierce DMG Up] and [Blunt DMG Up]"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Nails]", 1),
        new SkillDescriptionPart("[Heads Hit] Inflict 2 [Nails]", 2),
        new SkillDescriptionPart("+70% damage to targets with 5+ [Nails]", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Faust/TheOneWhoGrips/Execution.png";
}