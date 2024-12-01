import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const RoseateDesireHongLuAwakening: Skill = {
    Name: "Roseate Desire",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 19,
    Coins: 1,
    CoinValue: +9,
    AttackWeight: 3,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict 2 Defense Power Down<br>"+
            "[On Hit] Inflict 5 Defense Level Down", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/HongLu/EGO/RoseataDesire/20602awakenprofile.png"
}