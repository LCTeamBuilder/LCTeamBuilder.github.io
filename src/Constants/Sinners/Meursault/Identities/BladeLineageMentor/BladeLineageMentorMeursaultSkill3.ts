import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const BladeLineageMentorMeursaultSkill3: Skill = {
    Name: "Yield My Flesh",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 20,
    Coins: 1,
    CoinValue: -8,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +3 [Aggro] to this Skill Slot next turn<br>"+
            "[On Use] Until this Skill ends, this unit cannot be Staggered from taking damage<br>"+
            "[Clash Win] Gain 5 [Poise]<br>"+
            "[Clash Lose] After getting hit, use 'To Claim Their Bones' Skill<br>"+
            "[On Crit] Deal +3% damage on Critical Hit for every [Poise] Potency on self (Max 75%)<br>"+
            "+30% damage on Critical Hit<br>"+
            "Deal +0,5% more damage per 1% missing HP on self (Max 25%)")],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Meursault/BladeLineageMentor/YieldMyFlesh.png"
}