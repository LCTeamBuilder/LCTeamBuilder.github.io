import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const EdgarFamilyHeirGregorSkill2: Skill = {
    Name: "Remise",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] If that target has 6+ [Sinking], Coin Power +1<br>"+
            "[On Use] Clash Power +1 for every 3 [Sinking] Count on target (max 2)<br>"+
            "[Clash Win] Inflict +2 [Sinking] Count"),
        new SkillDescriptionPart("[On Hit] If the target has 5+ [Sinking], gain 1 [Haste] next turn", 1),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Sinking] Count", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/EdgarFamilyHeir/Remise.png"
}