import {
    DefenseTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ShiAssocSouthSection5IshmaelDefense: Skill = {
    Name: "Counter",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Envy,
    BaseValue: 8,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("At 5+ [Poise] Count, +50% Critical Damage"),
        new SkillDescriptionPart("[On Hit] Gain +1 [Poise] Count", 1)],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Counter,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ishmael/ShiAssociationSouthSection5/Counter.png"
}