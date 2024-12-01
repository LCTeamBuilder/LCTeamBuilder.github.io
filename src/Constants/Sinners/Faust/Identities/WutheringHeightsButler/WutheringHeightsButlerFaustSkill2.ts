import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const WutheringHeightsButlerFaustSkill2: Skill = {
    Name: "Interloper Reception",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Lust,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] If the target has 5+ [Sinking], Clash Power +1<br>"+
            "[On Use] If the target has 3+ [Sinking] Count, Coin Power +1", 2),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Sinking] Count")],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Faust/WutheringHeightsButler/InterloperReception.png"
}