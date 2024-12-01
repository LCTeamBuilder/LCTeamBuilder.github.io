import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const HexNailRodionCorrosion: Skill = {
    Name: "Hex Nail",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 28,
    Coins: 2,
    CoinValue: -6,
    AttackWeight: 3,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly<br>"+
            "[After Attack] Heal 3 other allies with the least HP percentage for 20% of this unit's max HP<br>"+
            "- Each heal-receiving unit gains 1 [Offense Level Up] until next turn for every negative effect on themselves (max 3)<br>"+
            "- At 4+ Envy Reson. including this Skill, heal 1 additional ally"),
        new SkillDescriptionPart("[On Hit] Inflict 4 [Bleed]<br>"+
            "[On Hit] Inflict +2 [Bleed] Count", 1),
        new SkillDescriptionPart(" [On Hit] Inflict 3 [Curse]<br>"+
            "[Tails Hit] Inflict 3 [Nails]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Rodion/EGO/HexNail/20907erosionprofile.png"
}