import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LccbAssistantManagerRyoshuSkill2: Skill = {
    Name: "T.N.",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gluttony,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("At 7+ [Poise], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Gain 2 [Poise]<br>"+
            "[On Crit] Inflict 2 [Offense Level Down]", 1),
        new SkillDescriptionPart("[On Hit] Gain 2 [Poise]<br>"+
            "[On Crit] Inflict 1 [Offense Level Down]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/LCCBAssistantManager/TN.png"
}