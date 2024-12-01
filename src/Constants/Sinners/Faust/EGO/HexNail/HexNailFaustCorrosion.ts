import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const HexNailFaustCorrosion: Skill = {
    Name: "Hex Nail",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 20,
    Coins: 1,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Pierce Fragility]<br>"+
            "[On Hit] Inflict 3 [Envy Fragility]<br>"+
            "[On Hit] Inflict 3 [Curse]<br>"+
            "[On Hit] Inflict 3 [Nails]<br>"+
            "[On Hit] If target has [Curse] , +50% Damage", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Faust/EGO/HexNail/20203erosionprofile.png"
}