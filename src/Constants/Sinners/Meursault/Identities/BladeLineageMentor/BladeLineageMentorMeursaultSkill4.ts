import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class BladeLineageMentorMeursaultSkill4 implements Skill {
    readonly Name: string = "To Claim Their Bones";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Pride;
    readonly BaseValue: number = 4;
    readonly Coins: number = 4;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +5;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Before Attack] For every 7 [Poise] on self, +1 Atk Weight (Max. 2)<br>"+
            "[On Use] Until this Skill ends, this unit cannot be Staggered from taking damage<br>"+
            "[On Use] Deal +2% damage on Critical Hit for every [Poise] Potency on self (Max 50%)<br>"+
            "+30% damage on Critical Hit<br>"+
            "Deal +0,5% more damage per 1% missing HP on self (Max 25%)<br>"+
            "If this Skill targets only a single enemy, deal +100% more damage (In Focused Encounters, a single Part)"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Bleed]<br>"+
            "[On Hit] Inflict 5 [Paralyze] next turn", 4)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Meursault/BladeLineageMentor/ToClaimTheirBones.png";
}