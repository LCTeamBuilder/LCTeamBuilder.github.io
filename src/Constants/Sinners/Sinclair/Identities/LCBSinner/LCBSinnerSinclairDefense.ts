import {
    DefenseTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill } from "../../../../../Models/Index";

export const LCBSinnerSinclairDefense: Skill = {
    Name: "Guard",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 7,
    Coins: 1,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: -2,
    SkillDescription: [],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: "assets/Icons/Skills/Sinners/Sinclair/LCBSinner/Counter.png"
}