import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ChainsOfOthersMeursaultAwakening: Skill = {
    Name: "Chains of Others",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 19,
    Coins: 1,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: -3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict 5 [Bind] next turn<br>"+
        "[On Hit] Gain 3 [Bind] next turn<br>"+
        "[On Hit] Inflict 4 [Attack Power Down] next turn<br>"+
        "[On Hit] Gain 3 [Attack Power Down] next turn<br>"+
        "[On Hit] Gain 2 [Protection] next turn", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Meursault/EGO/ChainsOfOthers/20501awakenprofile.png"
}