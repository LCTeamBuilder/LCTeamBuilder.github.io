import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class BladeLineageMentorMeursaultSkill1 implements Skill {
    readonly Name: string = "Draw of the Sword";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill1;
    readonly Affinity: SinEnum = SinEnum.Pride;
    readonly BaseValue: number = 3;
    readonly Coins: number = 2;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("At 5+ [Poise], Coin Power +1<br>"+
            "[Combat Start] Apply 1 [Swordplay of the Homeland - Rending] to (Highest A-Reson.) other Blade Lineage allies in ascending order of Speeds (slowest to fastest, 2 times max)<br>"+
            "- If there are 6 or more allied Blade Lineage Identities in the Encounter, apply 2 instead<br>"+
            "[On Use] Gain +2 [Poise] Count"),
        new SkillDescriptionPart("[On Hit] Gain 1 [Poise]", 1),
        new SkillDescriptionPart("[On Hit] Gain 1 [Poise]", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Meursault/BladeLineageMentor/DrawOfTheSword.png";
}