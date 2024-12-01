import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const DevyatAssocNorthSection3RodionSkill2: Skill = {
    Name: "Courier Trunk - Gadget Reveal",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("Deal +2% more damage for every [Courier Trunk - Rodion] on self (max 40%)<br>"+
            "Coin Power +1 for every 10 [Courier Trunk - Rodion] on self or for every 6 [Rupture] on the target (max 2)<br>"+
            "[On Use] If the target has 15+ [Rupture] and 3+ [Rupture] Count: this Skill does not consume target's [Rupture] Count On Hit"),
        new SkillDescriptionPart("[On Hit] Gain 1 [Courier Trunk - Rodion]<br>"+
            "- If this unit has less than 15 [Courier Trunk - Rodion], gain 2 additional [Courier Trunk - Rodion]", 1),
        new SkillDescriptionPart("[Heads Hit] Gain 1 [Haste] next turn (once per turn)<br>"+
            "- At 15+ [Courier Trunk - Rodion], gain 1 additional [Haste]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Defense Level Down] for every 5 [Courier Trunk - Rodion] on self or for every 5 [Rupture] on the target (max 6, once per turn)", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/DevyatAssocNorthSection3/CourierTrunkGadgetReveal.png"
}