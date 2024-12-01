import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const WCorpL2CleanupAgentHongLuSkill2: Skill = {
    Name: "Cleanup Support",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Wrath,
    BaseValue: 6,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +3 [Charge] Count<br>"+
            "Clash Power +2 when Shielded"),
        new SkillDescriptionPart("[On Hit] Gain +3 [Charge] Count", 1),
        new SkillDescriptionPart("[On Hit] At 5+ [Charge] Count, gain 1 [Charge] Barrier for every 5 [Charge] Count next turn (Max 4)", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/HongLu/WCorpL2CleanupAgent/CleanupSupport.png"
}