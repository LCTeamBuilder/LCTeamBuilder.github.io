import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const RedEyesRyoshuAwakening: Skill = {
    Name: "Red Eyes",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 18,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 3,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict 3 [Bind] next turn<br>"+
            "[On Hit] If target has 3+ [Bind] , inflict 1 [Plus Coin Drop] next turn<br>"+
            "[On Hit] If target's Speed is lower than user's, inflict 2 [Slash Fragility] next turn", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Ryoshu/EGO/RedEyes/20403awakenprofile.png"
}