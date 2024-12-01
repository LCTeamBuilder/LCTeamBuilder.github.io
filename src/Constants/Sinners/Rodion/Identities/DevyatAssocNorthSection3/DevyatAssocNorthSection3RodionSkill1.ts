import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const DevyatAssocNorthSection3RodionSkill1: Skill = {
    Name: "Courier Trunk - Decay Knife",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 10 [Courier Trunk - Rodion] on self or for every 6 [Rupture] on the target (max 2)<br>"+
            "[On Use] If the target has 15+ [Rupture] and 3+ [Rupture] Count: this Skill does not consume target's [Rupture] Count On Hit, but does not inflict [Rupture] with this Skill's On Hit effects"),
        new SkillDescriptionPart("[On Hit] Gain 1 [Courier Trunk - Rodion]<br>"+
            "- If this unit has less than 15 [Courier Trunk - Rodion], gain 1 additional [Courier Trunk - Rodion]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Rupture]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/DevyatAssocNorthSection3/CourierTrunkDecayKnife.png"
}