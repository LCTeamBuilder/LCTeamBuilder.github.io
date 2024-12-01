import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const HexNailSinclairCorrosion: Skill = {
    Name: "Hex Nail",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 25,
    Coins: 2,
    CoinValue: -6,
    AttackWeight: 3,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "[After Attack] If the target has [Curse], immediately activate it twice and reduce it by 2"),
        new SkillDescriptionPart("[Tails Hit] Inflict 3 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 4 [Curse]<br>"+
            "[On Hit] Inflict 3 [Nails]<br>"+
            "[On Hit] At 4+ Envy Reson. including this Skill, inflict 1 [Clash Power Down] (once per turn)<br>"+
            "[Tails Hit] Inflict 2 [Bind] next turn (once per turn)<br>"+
            "[Tails Hit] Inflict 2 [Defense Level Down] next turn (once per turn)", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Sinclair/EGO/HexNail/21007erosionprofile.png"
}