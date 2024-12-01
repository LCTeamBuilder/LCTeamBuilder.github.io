import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const SevenAssocSouthSection6YiSangSkill2: Skill = {
    Name: "Riposte",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gluttony,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Clash Win] Inflict 3 [Paralyze] next turn<br>"+
            "[Clash Win] Inflict +1 [Rupture] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Fragile] next turn<br>"+
            "[On Hit] Inflict 1 [Rupture]", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/YiSang/SevenAssociationSouthSection6/Riposte.png"
}