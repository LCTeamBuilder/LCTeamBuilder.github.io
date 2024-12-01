import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LiuAssocSouthSection4RyoshuSkill2: Skill = {
    Name: "Fiery Knifehand",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("If the target has 6+ [Burn], Clash Power +1<br>"+
            "If the target has 6+ [Burn], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Burn]", 1),
        new SkillDescriptionPart("[On Hit] If the target has 6+ [Burn], deal +50% damage", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/LiuAssociationSouthSection4/FieryKnifehand.png"
}