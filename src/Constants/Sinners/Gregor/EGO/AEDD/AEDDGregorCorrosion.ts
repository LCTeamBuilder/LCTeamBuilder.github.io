import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const AEDDGregorCorrosion: Skill = {
    Name: "AEDD",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 24,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 3,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Prioritizes units with [Charge]<br>"+
            "[Before Attack] Gain +10 [Charge] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 15 [Spark Discharge] and +7 [Charge] Count", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Gregor/EGO/AEDD/21204erosionprofile.png"
}