import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const TelepoleHeathcliffCorrosion: Skill = {
    Name: "Telepole",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 39,
    Coins: 1,
    CoinValue: -21,
    AttackWeight: 3,
    SkillLevel: 3,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate] Targets randomly<br>"+
            "[On Use] Gain [Charge] Count by Envy Reson.<br>"+
            "Spend all [Charge] Count to gain +15 Base Power"),
        new SkillDescriptionPart("[Heads Hit] Gain 3 [Fragile] next turn", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Heathcliff/EGO/Telepole/20702erosionprofile.png"
}