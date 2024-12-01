import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ContemptAweRyoshuAwakening: Skill = {
    Name: "Contempt, Awe",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 10,
    Coins: 2,
    CoinValue: +7,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] Gain (highest Reson.) +1 Atk Weight (Max. 6)<br>"+
            "[Before Attack] Gain (highest Reson. + 1) [Gaze of Contempt] this turn and next turn (max 7)<br>"+
            "[After Attack] If this Skill was a part of a Lust Reson., gain 1 E.G.O resource in Affinities corresponding to each of this unit's Attack Skills<br>"+
            "[After Attack] For 2 turns, lose 10 SP at Turn End"),
        new SkillDescriptionPart("[After Attack] Evenly inflict 15 [Bleed] between all targets", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Ryoshu/EGO/ContemptAwe/20407awakenprofile.png"
}