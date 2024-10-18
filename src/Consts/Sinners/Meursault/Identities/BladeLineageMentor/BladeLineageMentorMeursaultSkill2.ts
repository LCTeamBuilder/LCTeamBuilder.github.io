import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class BladeLineageMentorMeursaultSkill2 implements Skill {
    readonly Name: string = "Acupuncture";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Pride;
    readonly BaseValue: number = 3;
    readonly Coins: number = 3;
    readonly CoinValue: number = +5;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("At 7+ [Poise], Coin Power +1<br>"+
            "[Combat Start] Apply 1 [Swordplay of the Homeland - Penetrating] to (Highest A-Reson.) other Blade Lineage allies in ascending order of Speeds (slowest to fastest, 2 times max)<br>"+
            "- If there are 6 or more allied Blade Lineage Identities in the Encounter, apply 2 instead<br>"+
            "[On Use] Gain +3 [Poise] Count<br>"+
            "[Clash Win] Gain 1 [Slash Power Up] next turn"),
        new SkillDescriptionPart("[On Hit] Gain 3 [Poise]", 1),
        new SkillDescriptionPart("+60% Damage on Critical Hit", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Meursault/BladeLineageMentor/Acupuncture.png";
}