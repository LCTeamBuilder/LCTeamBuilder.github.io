import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const WCorpL3CleanupAgentRyoshuSkill2: Skill = {
    Name: "Leap",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Pride,
    BaseValue: 2,
    Coins: 3,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +7 [Charge] Count<br>"+
            "At 10+ [Charge] Count, gain +1 Coin Power<br>"+
            "At 15+ [Charge] Count, gain additional +1 Coin Power"),
        new SkillDescriptionPart("[On Hit] At 10+ [Charge] Count, inflict 2 [Slash Fragility]", 1),
        new SkillDescriptionPart("[On Hit] If target's HP is below 30%, deal +30% damage<br>"+
            "[On Kill] Gain 3 [Haste] next turn", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/WCorpL3CleanupAgent/Leap.png"
}