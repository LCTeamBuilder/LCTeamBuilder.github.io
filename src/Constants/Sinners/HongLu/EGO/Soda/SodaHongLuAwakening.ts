import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const SodaHongLuAwakening: Skill = {
    Name: "Soda",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 20,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 3,
    SkillLevel: -5,
    SkillDescription: 
        [new SkillDescriptionPart("[Heads Attack End] Heal 2 allies with the lowest HP percentages for 15 HP<br>"+
            "[Tails Attack End] Heal 15 SP for 2 allies with the least SP<br>"+
            "[Crit Attack End] Heal the ally with the lowest HP percentage for 8 HP, Heal the ally with the least SP for 8 SP", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/HongLu/EGO/Soda/20604awakenprofile.png"
}