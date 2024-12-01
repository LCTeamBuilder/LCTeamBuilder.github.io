import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const EfflorescedEgospicebushYiSangSkill1: Skill = {
    Name: "Sprouting Bud",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 3,
    Coins: 3,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +3 [Tremor] Count"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Sinking] Count next turn", 2),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Sinking] Count next turn", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/YiSang/EfflorescedEGOSpicebush/SproutingBud.png"
}