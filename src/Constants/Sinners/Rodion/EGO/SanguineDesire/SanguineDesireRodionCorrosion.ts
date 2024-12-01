import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const SanguineDesireRodionCorrosion: Skill = {
    Name: "Sanguine Desire",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 30,
    Coins: 1,
    CoinValue: -11,
    AttackWeight: 5,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly<br>"+
            "[Before Attack] Gain +1 Atk Weight (Max. 2) for every (highest Reson.) above 2"),
        new SkillDescriptionPart("[On Hit] Inflict (4 + (Lust Reson.)) [Bleed] (Maximum Lust Reson. taken into account: 6)<br>"+
            "[On Hit] Inflict +3 [Bleed] Count", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Rodion/EGO/SanguineDesire/20906erosionprofile.png"
}