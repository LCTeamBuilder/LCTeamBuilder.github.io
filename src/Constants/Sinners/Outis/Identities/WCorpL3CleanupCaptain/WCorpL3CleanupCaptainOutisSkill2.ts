import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const WCorpL3CleanupCaptainOutisSkill2: Skill = {
    Name: "Charged Leap",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Consume 6 [Charge] Count on self to gain Coin Power +1<br>"+
            "- If this unit consumed [Charge] Count, apply ([Charge] + 2) [Charge] Barrier to self and 2 other allies with the least [Charge] Count.<br>"+
            "(Max 8 [Charge Barrier] per ally. Activates 2 times per turn max)<br>"+
            "[On Use] Gain +2 [Charge] Count"),
        new SkillDescriptionPart("[On Hit] Gain +2 [Charge] Count", 1),
        new SkillDescriptionPart("[On Hit] Gain +2 [Charge] Count<br>"+
            "[On Hit] Inflict 1 [Bind] next turn<br>"+
            "[On Hit] If this Skill consumed [Charge] Count on use, inflict 2 [Bind] next turn", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/WCorpL3CleanupCaptain/ChargedLeap.png"
}