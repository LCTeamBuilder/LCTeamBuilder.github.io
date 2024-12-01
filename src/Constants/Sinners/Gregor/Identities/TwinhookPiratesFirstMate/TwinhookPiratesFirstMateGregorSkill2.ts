import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const TwinhookPiratesFirstMateGregorSkill2: Skill = {
    Name: "Unilateral Business",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 7 [Bleed] on target (Max 2)<br>"+
            "[On Use] Gain +3 [Poise] Count"),
        new SkillDescriptionPart("[On Hit] Gain 4 [Poise]<br>"+
            "[On Crit] Inflict 2 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Bleed]<br>"+
            "[On Crit] Inflict 2 [Bleed]<br>"+
            "+50% Damage on Critical Hit", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/TwinhookPiratesFirstMate/UnilateralBusiness.png"
}