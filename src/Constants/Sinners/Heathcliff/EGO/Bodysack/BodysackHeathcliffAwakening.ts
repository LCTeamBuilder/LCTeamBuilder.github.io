import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const BodysackHeathcliffAwakening: Skill = {
    Name: "Bodysack",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 15,
    Coins: 1,
    CoinValue: +9,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Gain 1 [Attack Power Up] next turn<br>"+
            "[On Hit] Gain 3 [Haste] next turn<br>"+
            "[On Kill] Gain 2 [Attack Power Up] next turn", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Heathcliff/EGO/Bodysack/20701awakenprofile.png"
}