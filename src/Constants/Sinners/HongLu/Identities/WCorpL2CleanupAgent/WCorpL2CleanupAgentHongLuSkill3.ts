import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const WCorpL2CleanupAgentHongLuSkill3: Skill = {
    Name: "Deploy Charge Barrier",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] At 10+ [Charge] Count, consume all [Charge] Count to apply (Consumed [Charge] Count /2) [Charge Barrier] (Rounded Down) to 2 allies with the lowest HP%"),
        new SkillDescriptionPart("[On Hit] Inflict 5 [Rupture]<br>"+
            "[On Hit] Gain 2 [Charge Barrier] next turn", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/HongLu/WCorpL2CleanupAgent/DeployChargeBarrier.png"
}