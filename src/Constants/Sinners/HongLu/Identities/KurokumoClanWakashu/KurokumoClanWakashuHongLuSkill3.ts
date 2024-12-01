import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const KurokumoClanWakashuHongLuSkill3: Skill = {
    Name: "Cloudburst",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 7,
    Coins: 3,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] This skill inflicts 1 additional [Bleed] and [Paralyze]"),
        new SkillDescriptionPart("[Heads Hit] Inflict 2 [Bleed]", 1),
        new SkillDescriptionPart("[Heads Hit] Inflict 2 [Bleed]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 5 [Paralyze]", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/HongLu/KurokumoClanWakashu/Cloudburst.png"
}