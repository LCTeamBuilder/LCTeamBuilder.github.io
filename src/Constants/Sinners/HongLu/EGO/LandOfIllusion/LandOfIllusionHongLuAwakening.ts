import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LandOfIllusionHongLuAwakening: Skill = {
    Name: "Land of Illusion",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 15,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 3,
    SkillLevel: +0,
    SkillDescription: 
        [new SkillDescriptionPart("[After Attack] Heal 15 SP"),
        new SkillDescriptionPart("[On Hit] Inflict 5 [Sinking]<br>"+
            "[After Attack] Next turn: -2 [SP Loss Efficiency] to all allies, -2 to amount of SP lost from E.G.O use", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/HongLu/EGO/LandOfIllusion/20601awakenprofile.png"
}