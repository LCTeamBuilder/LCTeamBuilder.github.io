import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const WCorpL3CleanupAgentYiSangSkill2: Skill = {
    Name: "Energy Cycle",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gluttony,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +7 [Charge] Count<br>"+
            "At 10+ [Charge] Count, +1 Coin Power"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bind] next turn", 1),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Rupture]<br>"+
            "[On Hit] At 10+ [Charge] Count, inflict 3 [Rupture] and +2 [Rupture] Count", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/YiSang/WCorpL3CleanupAgent/EnergyCycle.png"
}