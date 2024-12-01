import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const YaSunyataTadRupamHeathcliffAwakening: Skill = {
    Name: "Ya Śūnyatā Tad Rūpam",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 18,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 3,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] At 15+ SP, +2 Atk Weight"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Attack Power Down] next turn<br>"+
            "[After Attack] Heal 25 SP for 4 other allies with the least SP", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Heathcliff/EGO/YaSunyataTadRupam/20704awakenprofile.png"
}