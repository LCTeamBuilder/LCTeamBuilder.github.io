import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const KCorpClass3ExcisionStaffHongLuSkill2: Skill = {
    Name: "Decay Blade",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gluttony,
    BaseValue: 6,
    Coins: 2,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +5 [Aggro] to this Skill Slot next turn"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]<br>"+
            "[On Hit] If target has 10+ [Rupture], heal by 50% of damage dealt", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]<br>"+
            "[On Hit] If target has 10+ [Rupture] , heal by 50% of damage dealt", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/HongLu/KCorpClass3ExcisionStaff/DecayBlade.png"
}