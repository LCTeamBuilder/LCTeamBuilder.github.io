import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LobotomyCorpRemnantFaustSkill2: Skill = {
    Name: "Deep Cuts",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gloom,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Gain 1 [Poise] next turn", 1),
        new SkillDescriptionPart("[On Hit] Gain 1 [Poise] next turn", 2),
        new SkillDescriptionPart("[On Hit] Gain 4 [Haste] next turn<br>"+
            "[On Hit] Gain 1 [Poise] next turn", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Faust/LobotomyCorpRemnant/DeepCuts.png"
}