import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const TwinhookPiratesFirstMateGregorSkill1: Skill = {
    Name: "Negotiation Start",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain 3 [Poise]<br>"+
            "If target has 7+ [Bleed], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Gain +1 [Poise] Count<br>"+
            "[On Crit] Inflict 2 [Bleed]", 1),
        new SkillDescriptionPart("[On Crit] Inflict 2 Bleed", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/TwinhookPiratesFirstMate/NegotiationStart.png"
}