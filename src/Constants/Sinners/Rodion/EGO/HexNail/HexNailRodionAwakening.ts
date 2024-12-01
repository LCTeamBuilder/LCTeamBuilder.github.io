import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const HexNailRodionAwakening: Skill = {
    Name: "Hex Nail",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 8,
    Coins: 2,
    CoinValue: +8,
    AttackWeight: 3,
    SkillLevel: -3,
    SkillDescription: 
        [new SkillDescriptionPart("[After Attack] Heal self and 2 other allies with the least HP percentage for 15% of this unit's max HP<br>"+
            "- Each heal-receiving unit heals +2.5% more HP for every negative effect on themselves (max 10%)<br>"+
            "- At 4+ Envy Reson. including this Skill, heal 1 additional ally"),
        new SkillDescriptionPart(" [On Hit] Inflict 4 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Curse]<br>"+
            "[Heads Hit] Inflict 3 [Nails]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Rodion/EGO/HexNail/20907awakenprofile.png"
}