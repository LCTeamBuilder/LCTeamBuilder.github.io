import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const WCorpL2CleanupAgentFaustSkill2: Skill = {
    Name: "Leap",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gloom,
    BaseValue: 6,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +3 [Charge] Count"),
        new SkillDescriptionPart("[On Hit] Gain +3 [Charge] Count", 1),
        new SkillDescriptionPart("[On Hit] Spend 3 [Charge] Count to inflict 4 [Bind] next turn", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Faust/WCorpL2CleanupAgent/Leap.png"
}