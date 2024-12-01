import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LobotomyEgoRegretFaustSkill1: Skill = {
    Name: "Contracting Straight-jacket",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +3 [Tremor] Count<br>"+
            "[Clash Lose] Gain +3 [Tremor] Count"),
        new SkillDescriptionPart("[On Hit] Gain +3 [Tremor] Count<br>"+
            "[On Hit] Inflict +3 [Tremor] Count", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Faust/LobotomyEGORegret/ContractingStraightjacket.png"
}