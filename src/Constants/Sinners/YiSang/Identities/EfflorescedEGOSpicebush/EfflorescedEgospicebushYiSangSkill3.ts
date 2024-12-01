import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const EfflorescedEgospicebushYiSangSkill3: Skill = {
    Name: "Bloodsteeped Scent",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 6,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[Clash Lose] Lose 20 SP<br>"+
            "[On Use] Gain +6 [Tremor] Count"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Sinking] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Sinking] Count", 2),
        new SkillDescriptionPart("[On Hit] If target has 6+ [Sinking], cause [Sinking Deluge]<br>"+
            "[On Hit] If user has 10+ [Tremor] Count, deal 40% of damage dealt as bonus damage", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/YiSang/EfflorescedEGOSpicebush/BloodsteepedScent.png"
}