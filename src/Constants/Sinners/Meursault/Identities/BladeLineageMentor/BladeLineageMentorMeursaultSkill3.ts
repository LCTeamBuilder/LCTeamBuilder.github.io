import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class BladeLineageMentorMeursaultSkill3 implements Skill {
    readonly Name: string = "Yield My Flesh";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Wrath;
    readonly BaseValue: number = 20;
    readonly Coins: number = 1;
    readonly CoinValue: number = -8;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] Gain +3 [Aggro] to this Skill Slot next turn<br>"+
            "[On Use] Until this Skill ends, this unit cannot be Staggered from taking damage<br>"+
            "[Clash Win] Gain 5 [Poise]<br>"+
            "[Clash Lose] After getting hit, use 'To Claim Their Bones' Skill<br>"+
            "[On Crit] Deal +3% damage on Critical Hit for every [Poise] Potency on self (Max 75%)<br>"+
            "+30% damage on Critical Hit<br>"+
            "Deal +0,5% more damage per 1% missing HP on self (Max 25%)")];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Meursault/BladeLineageMentor/YieldMyFlesh.png";
}