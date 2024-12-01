import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ZweiAssocSouthSection4GregorSkill1: Skill = {
    Name: "Standoff",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain 2 [Defense Level Up]<br>"+
            "[Clash Lose] Gain Shield by (5*[Defense Level Up] on self), Gain 2 [Defense Level Up] next turn"),
        new SkillDescriptionPart("[On Hit] Gain 2 [Haste] next turn", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/ZweiAssociationSouthSection4/Standoff.png"
}