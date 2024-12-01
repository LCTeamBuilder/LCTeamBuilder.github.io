import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const BygoneDaysYiSangCorrosion: Skill = {
    Name: "Bygone Days",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 22,
    Coins: 1,
    CoinValue: -6,
    AttackWeight: 3,
    SkillLevel: +0,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
        "Targets Randomly<br>"+
        "[Before Attack] At 3+ (Gloom Reson.), Atk Weight +1<br>"+
        "[Before Attack] At 5+ (Gloom Reson.), additional Atk Weight +1"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking]. Inflict 2 [Bind] next turn<br>"+
        "[On Hit] If the target has 6+ [Sinking], inflict 2 [Bind] next turn", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/YiSang/EGO/BygoneDays/20106erosionprofile.png"
}