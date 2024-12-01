import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const WCorpL3CleanupAgentRyoshuSkill1: Skill = {
    Name: "E.C.",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 3,
    Coins: 3,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("At 10+ [Charge] Count, deal +10% damage<br>"+
            "At 15+ [Charge] Count, deal additional +10% damage"), 
        new SkillDescriptionPart("[On Hit] Gain +2 [Charge] Count", 1),
        new SkillDescriptionPart("[On Hit] Gain +2 [Charge] Count", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/WCorpL3CleanupAgent/EC.png"
}