import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const DieciAssocSouthSection4DirectorMeursaultSkill1: Skill = {
    Name: "Studious Dedication",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("Gain (Insight x 5% of Max HP) Shield if this Skill is Discarded<br>"+
            "[On Use] [Discard] 1 Skill of the lowest rank in all of this unit's Skill Slots<br>"+
            "[On Use] Gain Clash Power +([Insight] - 1) (max 2)<br>"+
            "[Clash Win] Gain 2 [Erudition] (once per turn)"),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Sinking] Count", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Meursault/DieciAssocSouthSection4Director/StudiousDedication.png"
}