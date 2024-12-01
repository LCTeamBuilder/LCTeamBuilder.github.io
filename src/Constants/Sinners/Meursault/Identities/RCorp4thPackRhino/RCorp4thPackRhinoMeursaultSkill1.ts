import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const RCorp4thPackRhinoMeursaultSkill1: Skill = {
    Name: "Weighty Bash",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Envy,
    BaseValue: 5,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("At 10+ [Charge] Count, Final Power +1<br>"+
            "At 7+ Speed, deal +25% Damage<br>"+
            "[On Use] Gain +2 [Charge] Count"),
        new SkillDescriptionPart("[On Hit] Gain +2 [Charge] Count", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Meursault/RCorp4thPackRhino/WeightyBash.png"
}