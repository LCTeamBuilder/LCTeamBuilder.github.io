import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const NineTwoSinclairAwakening: Skill = {
    Name: "9:2",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 26,
    Coins: 1,
    CoinValue: -10,
    AttackWeight: 3,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] At 4+ (Lust Reson.), +1 Atk Weight<br>"+
            "[Before Attack] At 4+ (Highest Lust A-Reson.), additional +1 Atk Weight"),
        new SkillDescriptionPart("[On Hit] If target has no [Burn], inflict 4 [Burn]<br>"+
            "[On Hit] Inflict 4 [Burn]<br>"+
            "[Tails Hit] If target has 10+ [Burn], inflict 1 [Attack Power Down] and 1 [Defense Power Down] next turn", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Sinclair/EGO/92/21005awakenprofile.png"
}