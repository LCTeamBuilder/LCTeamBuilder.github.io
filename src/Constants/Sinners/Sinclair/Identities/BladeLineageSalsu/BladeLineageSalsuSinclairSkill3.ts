import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const BladeLineageSalsuSinclairSkill3: Skill = {
    Name: "To Claim Their Bones",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 8,
    Coins: 1,
    CoinValue: +18,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("At 10+ [Poise] Count, +150% Critical Damage"),
        new SkillDescriptionPart("[On Hit] Inflict 5 [Paralyze]<br>"+
            "[On Hit] Inflict 3 [Bleed]", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Sinclair/BladeLineageSalsu/ToClaimTheirBones.png"
}