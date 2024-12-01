import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const BladeLineageMentorMeursaultSkill4: Skill = {
    Name: "To Claim Their Bones",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] For every 7 [Poise] on self, +1 Atk Weight (Max. 2)<br>"+
            "[On Use] Until this Skill ends, this unit cannot be Staggered from taking damage<br>"+
            "[On Use] Deal +2% damage on Critical Hit for every [Poise] Potency on self (Max 50%)<br>"+
            "+30% damage on Critical Hit<br>"+
            "Deal +0,5% more damage per 1% missing HP on self (Max 25%)<br>"+
            "If this Skill targets only a single enemy, deal +100% more damage (In Focused Encounters, a single Part)"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Bleed]<br>"+
            "[On Hit] Inflict 5 [Paralyze] next turn", 4)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Meursault/BladeLineageMentor/ToClaimTheirBones.png"
}