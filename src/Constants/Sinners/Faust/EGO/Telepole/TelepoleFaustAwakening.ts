import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const TelepoleFaustAwakening: Skill = {
    Name: "Telepole",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 22,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 3,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict 3 [Paralyze]<br>"+
            "[After Attack] Gain +7 [Charge] Count<br>"+
            "[Heads Attack End] Apply 1 [Envy Power Up] and 1 [Haste] to 2 random allies next turn, and this unit gains +3 [Charge] Count", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Faust/EGO/Telepole/20204awakenprofile.png"
}