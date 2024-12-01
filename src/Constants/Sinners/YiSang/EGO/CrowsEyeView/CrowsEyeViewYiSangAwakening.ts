import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const CrowsEyeViewYisangAwakening: Skill = {
    Name: "Crow's Eye View",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 18,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 1,
    SkillLevel: -4,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict 2 [Attack Power Down]<br>"+
            "[On Hit] Apply 3 [Haste] to all allies next turn<br>"+
            "[On Hit] Inflict 2 [Bind] next turn", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/YiSang/EGO/CrowsEyeView/20101awakenprofile.png"
}