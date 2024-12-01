import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const NCorpMittelhammerRodionSkill1: Skill = {
    Name: "Devoted Hammering",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]<br>"+
            "[On Hit] If target has [Nails], inflict 1 [Nails]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]<br>"+
            "[On Hit] If target has [Nails], inflict 1 [Nails]", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/NCorpMittelhammer/DevotedHammering.png"
}