import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ZweiAssocSouthSection4FaustSkill2: Skill = {
    Name: "Client Protection",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Apply 4 [Defense Level Up] to the ally with the lowest HP percentage (3 times per turn)<br>"+
            "At 5+ [Defense Level Up] +2 Clash Power"),
        new SkillDescriptionPart("[On Hit] Gain 1 [Defense Level Up] next turn", 1),
        new SkillDescriptionPart("[On Hit] Gain 1 [Defense Level Up] next turn", 2),
        new SkillDescriptionPart("[On Hit] Gain 1 [Defense Level Up] next turn", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Faust/ZweiAssociationSouthSection4/ClientProtection.png"
}