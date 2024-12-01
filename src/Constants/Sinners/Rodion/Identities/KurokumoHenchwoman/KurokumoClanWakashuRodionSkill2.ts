import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const KurokumoClanWakashuRodionSkill2: Skill = {
    Name: "Scattering Slash",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Lust,
    BaseValue: 6,
    Coins: 2,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +2 [Poise] Count<br>"+
            "At 5+ [Poise], Coin Power +2"),
        new SkillDescriptionPart("[On Hit] Gain 2 [Poise]<br>"+
            "[On Hit] Inflict 2 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Gain 3 [Poise]<br>"+
            "[On Hit] Inflict 3 [Bleed]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/KurokumoHenchwoman/ScatteringSlash.png"
}