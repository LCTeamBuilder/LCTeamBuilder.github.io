import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const DieciAssocSouthSection4HongLuSkill2: Skill = {
    Name: "Unveil",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Randomly [Discard] 2 of this unit's Skills in ascending order of ranks from all of its Skill Slots<br>"+
            "[On Use] Coin Power +([Insight] - 1)"),
        new SkillDescriptionPart("[On Hit] Inflict 4 [Sinking]", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/HongLu/DieciAssociationSouthSection4/Unveil.png"
}