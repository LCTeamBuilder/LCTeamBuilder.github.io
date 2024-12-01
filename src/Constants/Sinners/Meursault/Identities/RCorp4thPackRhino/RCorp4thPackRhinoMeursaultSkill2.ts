import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const RCorp4thPackRhinoMeursaultSkill2: Skill = {
    Name: "Demolish",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gloom,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("At 7+ Speed, inflict +1 [Bleed] Count with this Skill<br>"+
            "[On Use] Gain +4 [Charge] Count"),
        new SkillDescriptionPart("[On Hit] Gain +4 [Charge] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Bleed] Count", 2),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Bleed] Count", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Meursault/RCorp4thPackRhino/Demolish.png"
}