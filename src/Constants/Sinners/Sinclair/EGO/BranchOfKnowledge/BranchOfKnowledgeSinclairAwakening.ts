import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const BranchOfKnowledgeSinclairAwakening: Skill = {
    Name: "Branch of Knowledge",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 14,
    Coins: 1,
    CoinValue: +15,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Heads Hit] Inflict 12 Rupture.pngRupture<br>"+
        "[Heads Hit] Lose 10 SP. Gain 1 [Attack Power Up] next turn<br>"+
        "[Tails Hit] Gain 10 SP. Gain 1 [Protection] next turn", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Sinclair/EGO/BranchOfKnowledge/21001awakenprofile.png"
}