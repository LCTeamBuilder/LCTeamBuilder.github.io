import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const KurokumoClanWakashuHongLuSkill2: Skill = {
    Name: "Cloud Cutter",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Pride,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] If target has less than 4 [Bleed] Count, use Coin 1 and 2 an additional time"),
            new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 1),
            new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/HongLu/KurokumoClanWakashu/CloudCutter.png"
}