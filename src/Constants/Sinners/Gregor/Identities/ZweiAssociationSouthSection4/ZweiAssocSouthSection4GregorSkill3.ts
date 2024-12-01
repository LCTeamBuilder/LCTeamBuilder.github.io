import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ZweiAssocSouthSection4GregorSkill3: Skill = {
    Name: "Guardian",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Apply 2 [Defense Power Up] and 3 [Defense Level Up] to all allies<br>"+
            "Coin Power +1 per 6 [Defense Level Up] (Max 3)<br>"+
            "At 10+ [Defense Level Up], deal +50% damage"),
        new SkillDescriptionPart("[On Hit] Apply 3 [Defense Level Up] to all allies next turn", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/ZweiAssociationSouthSection4/Guardian.png"
}