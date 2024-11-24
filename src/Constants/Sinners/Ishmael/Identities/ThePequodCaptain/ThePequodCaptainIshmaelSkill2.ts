import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class ThePequodCaptainIshmaelSkill2 implements Skill {
    readonly Name: string = "Pursue Them to the End";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Pride;
    readonly BaseValue: number = 4;
    readonly Coins: number = 3;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Combat Start] Apply 3 [Offense Level Up] to 2 allies adjacent to this unit on the Dashboard<br>"+
            "[On Use] Every Reson. of the highest Reson. adds 20% chance that this unit orders the ally on its immediate right (on the Dashboard) to use [Assist Attack] this turn.<br>"+
            "- At 4+ highest A-Reson., apply 2 [Damage Up] to the ally<br>"+
            "- At 4+ Pride A-Reson., apply 2 additional [Pride Power Up]"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Ishmael/ThePequodCaptain/PursueThemToTheEnd.png";
}