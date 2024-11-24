import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class DieciAssocSouthSection4DirectorMeursaultSkill3 implements Skill {
    readonly Name: string = "Scorch Knowledge";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gloom;
    readonly BaseValue: number = 5;
    readonly Coins: number = 3;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("Deal +5% more damage for every [Insight] (max 45%)<br>"+
            "[On Use] Coin Power +1 for every 6 [Sinking] on target (max 2)<br>"+
            "[Before Attack] Consume all [Erudition] on self and gain the same value as additional [Insight]<br>"+
            "[After Attack] At 4+ [Insight], reset value to 1 (if this Skill defeats an enemy, reset value to 3 instead)"),
        new SkillDescriptionPart("[On Hit] Inflict [Sinking] Potency/Count equal to [Insight] against the target (how much of that [Sinking] is Potency or Count is randomly determined)", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Meursault/DieciAssocSouthSection4Director/ScorchKnowledge.png";
}