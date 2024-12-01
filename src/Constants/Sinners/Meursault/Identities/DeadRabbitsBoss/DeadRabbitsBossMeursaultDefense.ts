import {
    DefenseTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const DeadRabbitsBossMeursaultDefense: Skill = {
    Name: "Counter",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 7,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +24,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Counter,
    SkillImageDir: "assets/Icons/Skills/Sinners/Meursault/DeadRabbitsBoss/Counter.png"
}