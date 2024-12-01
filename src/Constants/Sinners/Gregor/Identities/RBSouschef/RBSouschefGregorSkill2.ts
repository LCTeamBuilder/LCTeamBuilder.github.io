import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const RBSouschefGregorSkill2: Skill = {
    Name: "You Fresh Enough?",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gluttony,
    BaseValue: 6,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("If user's speed is higher than target's by 3+, Coin Power +3"),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Bleed] Count, Inflict 2 [Bind] next turn", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/RBSouschef/YouFreshEnough.png"
}