import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const EbonyStemOutisCorrosion: Skill = {
    Name: "Ebony Stem",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 29,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 7,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly"),
        new SkillDescriptionPart("[On Hit] Inflict 5 [Rupture]<br>"+
            "[On Hit] Inflict 5 [Bleed]<br>"+
            "[On Hit] Inflict 3 [Gluttony Fragility]", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Outis/EGO/EbonyStem/21102erosionprofile.png"
}