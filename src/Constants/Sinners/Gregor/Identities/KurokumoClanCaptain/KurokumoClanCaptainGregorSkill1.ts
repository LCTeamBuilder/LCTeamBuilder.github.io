import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const KurokumoClanCaptainGregorSkill1: Skill = {
    Name: "Lenticular Rend",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 5,
    Coins: 1,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] If the target has 7+ [Bleed], Clash Power +2<br>"+
            "[Clash Win] Inflict 1 [Bleed]"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Bleed] Count", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/KurokumoClanCaptain/LenticularRend.png"
}