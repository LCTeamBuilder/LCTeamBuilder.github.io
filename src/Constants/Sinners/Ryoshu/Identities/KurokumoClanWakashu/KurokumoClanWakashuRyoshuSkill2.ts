import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const KurokumoClanWakashuRyoshuSkill2: Skill = {
    Name: "Clean Up",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Pride,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("If target has +5 [Bleed] Count, deal +20% damage"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Bleed] Count<br>"+
            "[Heads Hit] Inflict 2 [Damage Down]", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/KurokumoClanWakashu/CleanUp.png"
}