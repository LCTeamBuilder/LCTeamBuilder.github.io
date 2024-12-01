import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const DevyatAssocNorthSection3SinclairSkill3: Skill = {
    Name: "Poludnitsa… I trust you!",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 10 [Courier Trunk - Sinclair] on self or for every 6 [Rupture] on the target (max 2) <br>"+
            "[On Use] If the target has 15+ [Rupture] and 3+ [Rupture] Count, this Skill does not inflict [Rupture] or [Rupture] Count with its On Hit effects, instead, the final Coin gains +4 Coin Power<br>"+
            "On Use] If the target has 15+ [Rupture], deal +4% more damage for every [Courier Trunk - Sinclair] (max 120%)"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Rupture] Count<br>"+
            "- Inflict +1 additional [Rupture] Count for every 10 [Courier Trunk - Sinclair] (max 3)", 1),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Rupture]<br>"+
            "- Inflict +1 additional [Rupture] for every 8 [Courier Trunk - Sinclair] (max 4)", 2),
        new SkillDescriptionPart("[On Hit] If this Skill's effect to raise its final Coin Power did not activate, gain 2 [Haste] next turn", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Sinclair/DevyatAssocNorthSection3/PoludnitsaITrustYou.png"
}