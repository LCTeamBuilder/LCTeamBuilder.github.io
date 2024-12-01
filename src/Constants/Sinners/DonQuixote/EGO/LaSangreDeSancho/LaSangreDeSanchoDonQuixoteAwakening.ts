import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LaSangreDeSanchoDonQuixoteAwakening: Skill = {
    Name: "La Sangre de Sancho",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 12,
    Coins: 1,
    CoinValue: +14,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict 8 [Bleed]<br>"+
            "[On Hit] Heal by 50% of damage dealt", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/DonQuixote/EGO/LaSangreDeSancho/20301awakenprofile.png"
}