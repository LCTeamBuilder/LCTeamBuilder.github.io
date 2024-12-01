import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const WutheringHeightsChiefButlerOutisSkill2: Skill = {
    Name: "Dusting",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] If target has 5+ [Sinking], Coin Power +1<br>"+
            "[Clash Win] Inflict +2 [Sinking] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Sinking]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking]", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/WutheringHeightsChiefButler/Dusting.png"
}