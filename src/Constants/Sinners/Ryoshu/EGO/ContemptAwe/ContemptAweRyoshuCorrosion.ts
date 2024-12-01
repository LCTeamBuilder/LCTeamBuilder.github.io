import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ContemptAweRyoshuCorrosion: Skill = {
    Name: "Contempt, Awe",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 44,
    Coins: 1,
    CoinValue: -20,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly<br>"+
            "[Before Attack] Gain 7 [Gaze of Contempt]<br>"+
            "[After Attack] If this Skill was part of a Lust Reson., gain 1 E.G.O resource in Affinities corresponding to each of this unit's Attack Skills"),
        new SkillDescriptionPart("[On Hit] If the target has [Bleed], deal +(the sum of [Bleed] Potency and Count)% more damage (max 60%)<br>"+
            "[On Hit] Inflict (10 + (highest Reson. x 2.5)) [Bleed] (max 25, rounded down)<br>"+
            "[On Hit] Inflict +5 [Bleed] Count", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Ryoshu/EGO/ContemptAwe/20407erosionprofile.png"
}