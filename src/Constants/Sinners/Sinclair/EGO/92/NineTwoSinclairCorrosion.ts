import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const NineTwoSinclairCorrosion: Skill = {
    Name: "9:2",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 33,
    Coins: 1,
    CoinValue: -16,
    AttackWeight: 3,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly<br>"+
            "[Before Attack] At 4+ (Lust Reson.), +1 Atk Weight<br>"+
            "[Before Attack] At 4+ (Highest Lust A-Reson.), additional +1 Atk Weight"),
        new SkillDescriptionPart("[On Hit] If target has no [Burn], inflict 6 [Burn]<br>"+
            "[On Hit] Inflict 4 [Burn]<br>"+
            "[Tails Hit] If target has 10+ [Burn], inflict 2 [Lust Fragility] next turn", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Sinclair/EGO/92/21005erosionprofile.png"
}