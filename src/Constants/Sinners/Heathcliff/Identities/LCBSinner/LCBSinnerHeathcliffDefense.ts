import {
    DamageTypeEnum,
    DefenseTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill } from "../../../../../Models/Index";

export const LCBSinnerHeathcliffDefense: Skill = {
    Name: "Counter",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Envy,
    BaseValue: 7,
    Coins: 1,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +0,
    SkillDescription: [],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: DefenseTypeEnum.Counter,
    SkillImageDir: "assets/Icons/Skills/Sinners/Heathcliff/LCBSinner/Counter.png", 
}