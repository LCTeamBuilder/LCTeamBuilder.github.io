import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ZweiAssocSouthSection4FaustSkill3: Skill = {
    Name: "Law and Order",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 6,
    Coins: 2,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("At 5+ [Defense Level Up], Coin Power +1<br>"+
            "[Clash Win] Heal 4 HP"),
        new SkillDescriptionPart("Apply 1 [Haste] and 2 [Defense Level Up] to the ally with the lowest HP percentage next turn<br>"+
            "If the ally is a Zwei Association Fixer, apply an additional 1 [Haste], 1 [Defense Level Up]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Faust/ZweiAssociationSouthSection4/LawAndOrder.png"
}