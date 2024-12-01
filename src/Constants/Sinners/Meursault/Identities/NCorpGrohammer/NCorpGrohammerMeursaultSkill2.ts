import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const NCorpGrohammerMeursaultSkill2: Skill = {
    Name: "You Are Cleansed of Sin",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Wrath,
    BaseValue: 6,
    Coins: 2,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +6 [Aggro] to this Skill Slot next turn"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Nails]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Bind] next turn<br>"+
            "[On Hit] If target has 5+ [Nails], inflict 2 [Bind] and 2 [Attack Power Down] next turn", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Meursault/NCorpGrohammer/YouAreCleansedOfSin.png"
}