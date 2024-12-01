import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const HexNailFaustAwakening: Skill = {
    Name: "Hex Nail",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 16,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict 3 [Pierce Fragility]<br>"+
            "[On Hit] Inflict 1 [Envy Fragility]<br>"+
            "[Heads Hit] Inflict 3 [Curse]<br>"+
            "[Heads Hit] Inflict 3 [Nails]<br>"+
            "[On Hit] If target has [Curse], +50% Damage", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Faust/EGO/HexNail/20203awakenprofile.png"
}