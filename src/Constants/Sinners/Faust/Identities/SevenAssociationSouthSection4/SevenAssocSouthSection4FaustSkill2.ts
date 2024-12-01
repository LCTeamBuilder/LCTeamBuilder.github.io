import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const SevenAssocSouthSection4FaustSkill2: Skill = {
    Name: "Dissect Target",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 6 [Rupture] on target (Max 2)<br>"+
            "[Clash Win] Inflict +3 [Rupture] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Rupture]", 1),
        new SkillDescriptionPart("[On Hit] If target has 6+ [Rupture], inflict [Weakness Analyzed] next turn", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Faust/SevenAssociationSouthSection4/DissectTarget.png"
}