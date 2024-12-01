import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const TwinhookPiratesFirstMateGregorSkill3: Skill = {
    Name: "Foregone Conclusion",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain 1 [Poise] for every 3 [Bleed] on target (Max 10)<br>"+
            "Gain Coin Power +1 for every 7 [Poise] on self (Max 3)"),
        new SkillDescriptionPart("[On Crit] Inflict 2 [Bleed] Count", 1),
        new SkillDescriptionPart("Spend 1 [Ammo]<br>"+
            "+100% Damage on Critical Hit<br>"+
            "[On Kill] Gain 1 [Plus Coin Boost] next turn", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/TwinhookPiratesFirstMate/ForegoneConclusion.png"
}