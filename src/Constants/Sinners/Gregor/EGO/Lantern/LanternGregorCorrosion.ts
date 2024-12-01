import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LanternGregorCorrosion: Skill = {
    Name: "Lantern",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 19,
    Coins: 1,
    CoinValue: +4,
    AttackWeight: 5,
    SkillLevel: -3,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Target the unit with most health"),
        new SkillDescriptionPart("[On Hit] Heal 30% of damage dealt<br>"+
            "[Heads Hit] Inflict 5 [Rupture]", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Gregor/EGO/Lantern/21203erosionprofile.png"
}