import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const TelepoleHeathcliffAwakening: Skill = {
    Name: "Telepole",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 33,
    Coins: 1,
    CoinValue: -12,
    AttackWeight: 3,
    SkillLevel: 3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain [Charge] Count by Envy Reson.<br>"+
            "Spend 5 [Charge] Count Count to gain +3 Base Power (Max 12)"),
        new SkillDescriptionPart("[Tails Hit] Gain +5 [Charge] Count", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Heathcliff/EGO/Telepole/20702awakenprofile.png"
}