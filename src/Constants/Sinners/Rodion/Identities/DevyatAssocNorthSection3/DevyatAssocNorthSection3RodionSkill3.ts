import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const DevyatAssocNorthSection3RodionSkill3: Skill = {
    Name: "I Trust Ya, Polu!",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("Deal +4% more damage for every [Courier Trunk - Rodion] on self (max 80%)<br>"+
            "Coin Power +1 for every 10 [Courier Trunk - Rodion] on self or for every 6 [Rupture] on the target (max 2)<br>"+
            "[On Use] If the target has 15+ [Rupture] and 3+ [Rupture] Count: this Skill does not inflict [Rupture] Count with its On Hit effects, instead, Reuse its last Coin"),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Rupture] Count (once per turn)<br>"+
            "- Inflict +1 more [Rupture] Count for every 10 [Courier Trunk - Rodion] (max 2)", 2),
        new SkillDescriptionPart(" [On Hit] At 15+ [Courier Trunk - Rodion], deal +25% more damage<br>"+
            "[After Attack] If the target is Staggered or defeated, gain 2 [Haste] next turn (once per turn)", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/DevyatAssocNorthSection3/ITrustYaPolu.png"
}