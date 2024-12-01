import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ArdorBlossomStarIshmaelCorrosion: Skill = {
    Name: "Ardor Blossom Star",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 41,
    Coins: 1,
    CoinValue: -22,
    AttackWeight: 5,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "[On Use] Lose HP by 10% of Max HP"),
        new SkillDescriptionPart("[After Attack] Inflict [Burn] by (2 * Wrath Reson.) on all units<br>"+
            "[On Hit] Raise Stagger Threshold by 60% of damage dealt")],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Ishmael/EGO/ArdorBlossomStar/20803erosionprofile.png"
}