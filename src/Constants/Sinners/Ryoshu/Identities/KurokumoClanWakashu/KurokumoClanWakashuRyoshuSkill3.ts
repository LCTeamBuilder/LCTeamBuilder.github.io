import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const KurokumoClanWakashuRyoshuSkill3: Skill = {
    Name: "Lenticular Swirl",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 8,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("If target has +9 [Bleed] Count, deal +40% damage"),
        new SkillDescriptionPart("[Heads Hit] Inflict 2 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Bleed] Count<br>"+
            "[On Hit] Inflict 5 [Offense Level Down]", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/KurokumoClanWakashu/LenticularSwirl.png"
}