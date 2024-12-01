import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const FluidSacFaustAwakening: Skill = {
    Name: "Fluid Sac",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 16,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 5,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("[After Attack] Heal 15 SP for all allies<br>"+
            "[After Attack] Heal all allies for 15% of Max HP<br>"+
            "[Heads Attack End] Heal 10 SP for all allies", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Faust/EGO/FluidSac/20202awakenprofile.png"
}