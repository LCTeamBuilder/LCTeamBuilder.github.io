import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const TheOneWhoShallGripSinclairSkill1: Skill = {
    Name: "Coerced Judgement",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 8,
    Coins: 2,
    CoinValue: -2,
    AttackWeight: 1,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Lose 7 SP"),
        new SkillDescriptionPart("[Tails Hit] Gain 1 [Fanatic] next turn<br>"+
            "[On Hit] Inflict 3 [Burn]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Sinclair/TheOneWhoShallGrip/CoercedJudgement.png"
}