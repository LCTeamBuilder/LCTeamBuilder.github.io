import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const SevenAssocSouthSection6DirectorOutisSkill2: Skill = {
    Name: "Field Command",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Sloth,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("In a clash, opponent has -2 Clash Power"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Rupture] Count<br>"+
            "[On Hit] Inflict 2 [Defense Level Down] next turn", 1),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Rupture] Count<br>"+
            "[On Hit] Inflict 2 [Defense Level Down] next turn", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/SevenAssociationSouthSection6Director/FieldCommand.png"
}