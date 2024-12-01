import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const KurokumoClanWakashuRodionSkill3: Skill = {
    Name: "Sky-clearing Cut",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 7,
    Coins: 1,
    CoinValue: +18,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 6+ [Bleed], double the crit chance<br>"+
            "At 10+ [Poise], +100% Critical Damage"),
        new SkillDescriptionPart("[On Crit] Inflict 10 [Bleed]", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/KurokumoHenchwoman/SkyclearingCut.png"
}