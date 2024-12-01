import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const BygoneDaysGregorCorrosion: Skill = {
    Name: "Bygone Days",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 27,
    Coins: 1,
    CoinValue: -8,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly<br>"+
            "If the target has [Curse], deal +50% more damage"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Gloom Fragility]. Inflict 1 additional [Gloom Fragility] for every 2 Gloom Reson. (max 2)<br>"+
            "[On Hit] Inflict +3 [Sinking] Count<br>"+
            "[On Hit] Inflict 3 [Curse]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Gregor/EGO/BygoneDays/21206erosionprofile.png"
}