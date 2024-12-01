import {
    DefenseTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const TingtangGangGangleaderHongLuDefense: Skill = {
    Name: "Evade",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 2,
    Coins: 1,
    CoinValue: +14,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 5+ [Bleed], Coin Power +2<br>"+
            "[On Evade] Heal 3 SP")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Evade,
    SkillImageDir: "assets/Icons/Skills/Sinners/HongLu/TingtangGangGangleader/EvadeUT4.png"
}