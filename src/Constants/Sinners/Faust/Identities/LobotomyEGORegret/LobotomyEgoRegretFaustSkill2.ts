import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LobotomyEgoRegretFaustSkill2: Skill = {
    Name: "Metallic Ringing",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] Spend 5 [Tremor] Count and gain +1 Atk Weight for this Skill<br>"+
            "[On Use] Gain +4 [Tremor] Count"),
        new SkillDescriptionPart("[Heads Hit] Gain +1 [Tremor] Count<br>"+
            "[On Hit] Inflict 1 [Offense Level Down] next turn", 1),
        new SkillDescriptionPart("[On Hit] Inflict 5 [Tremor]<br>"+
            "[On Hit] Inflict 1 [Plus Coin Drop] next turn", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Faust/LobotomyEGORegret/MetallicRinging.png"
}