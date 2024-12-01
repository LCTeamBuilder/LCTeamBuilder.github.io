import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ZweiAssocSouthSection4GregorSkill2: Skill = {
    Name: "Flexible Suppression",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gluttony,
    BaseValue: 3,
    Coins: 4,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +3 [Defense Level Up]<br>"+
            "[On Use] Gain +3 [Aggro] to this Skill Slot next turn<br>"+
            "At 6+ [Defense Level Up], Clash Power +1"),
        new SkillDescriptionPart("[On Hit] Gain 1 [Defense Level Up] next turn", 1),
        new SkillDescriptionPart("[On Hit] Gain 1 [Defense Level Up] next turn", 2),
        new SkillDescriptionPart("At 6+ [Defense Level Up], deal +40% damage", 4)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/ZweiAssociationSouthSection4/FlexibleSuppression.png"
}