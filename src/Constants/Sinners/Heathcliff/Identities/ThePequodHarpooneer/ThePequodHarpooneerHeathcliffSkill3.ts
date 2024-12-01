import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ThePequodHarpooneerHeathcliffSkill3: Skill = {
    Name: "Sever Knot",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("At 3+ Envy Reson., Clash Power +1<br>"+
            "At 4+ Envy Reson., Coin Power +1<br>"+
            "At 6+ Envy A-Reson., Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]<br>"+
            "[On Hit] At 75%- HP, inflict 1 [Bleed]<br>"+
            "[On Hit] At 50%- HP, inflict 1 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]<br>"+
            "[On Hit] At 75%- HP, inflict 1 [Bleed]<br>"+
            "[On Hit] At 50%- HP, inflict 1 [Bleed]", 2),
        new SkillDescriptionPart("[On Crit] +50% Damage on Critical Hit", 4)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Heathcliff/ThePequodHarpooneer/SeverKnot.png"
}