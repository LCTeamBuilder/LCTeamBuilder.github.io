import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const EbonyStemOutisAwakening: Skill = {
    Name: "Ebony Stem",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 22,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 7,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict 2 Rupture<br>"+
            "[Heads Hit] Inflict 2 Bleed<br>"+
            "[On Hit] Inflict 2 Glut Fragility", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Outis/EGO/EbonyStem/21102awakenprofile.png"
}