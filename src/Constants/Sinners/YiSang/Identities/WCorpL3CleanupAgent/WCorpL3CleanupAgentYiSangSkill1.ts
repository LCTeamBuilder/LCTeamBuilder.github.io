import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const WCorpL3CleanupAgentYiSangSkill1: Skill = {
    Name: "Dimensional Slit",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 5,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +2 [Charge] Count<br>"+
            "At 10+ [Charge] Count, Coin Power +2"),
        new SkillDescriptionPart("[On Hit] Gain +2 [Charge] Count<br>"+
            "[On Hit] Inflict 2 [Rupture]", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/YiSang/WCorpL3CleanupAgent/DimensionalSlit.png"
}