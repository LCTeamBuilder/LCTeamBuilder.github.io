import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LifetimeStewSinclairAwakening: Skill = {
    Name: "Lifetime Stew",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 18,
    Coins: 1,
    CoinValue: -8,
    AttackWeight: 7,
    SkillLevel: -2,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets the unit with the least HP<br>"+
            "If the target is an ally, this deals 0 damage"),
        new SkillDescriptionPart("[Heads Hit] If the target is an ally, heal them for 10% of user's Max HP<br>"+
            "[Tails Hit] Inflict 7 [Burn], if target is an ally, give 2 [Haste] and 1 [E.G.O Resourse Amp] next turn", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Sinclair/EGO/LifetimeStew/21003awakenprofile.png"
}