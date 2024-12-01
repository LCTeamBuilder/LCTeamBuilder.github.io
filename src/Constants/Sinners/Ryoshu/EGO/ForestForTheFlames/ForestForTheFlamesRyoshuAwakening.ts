import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ForestForTheFlamesRyoshuAwakening: Skill = {
    Name: "Forest for the Flames",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 18,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: +0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict 6 [Burn]<br>"+
            "[On Hit] Inflict 1 [Fragile] next turn<br>"+
            "[Heads Hit] Inflict 1 [Fragile] next turn", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Ryoshu/EGO/ForestForTheFlames/20401awakenprofile.png"
}