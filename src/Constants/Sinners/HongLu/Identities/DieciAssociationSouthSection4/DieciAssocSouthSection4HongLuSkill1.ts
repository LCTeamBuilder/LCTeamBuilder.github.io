import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const DieciAssocSouthSection4HongLuSkill1: Skill = {
    Name: "Expend Knowledge",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Wrath,
    BaseValue: 5,
    Coins: 1,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] [Discard] 1 Skill of the highest rank in all of this unit's Skill Slots<br>"+
            "[On Use] Clash Power +([Insight] - 1)"),
        new SkillDescriptionPart("[Heads Hit] Inflict +1 [Sinking] Count<br>"+
            "[On Hit] Reuse Coin ([Insight] - 1) times", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/HongLu/DieciAssociationSouthSection4/ExpendKnowledge.png"
}