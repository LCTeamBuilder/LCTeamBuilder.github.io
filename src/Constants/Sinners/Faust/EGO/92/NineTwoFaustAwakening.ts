import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const NineTwoFaustAwakening: Skill = {
    Name: "9:2",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 18,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] At 4+ (Highest Lust A-Reson), +1 Atk Weight<br>"+
            "At 6+ (Highest Lust A-Reson), additional +1 Atk Weight"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Burn]<br>"+
            "[On Hit] Convert 2 [Burn] on target to 1 [Defense Level Down] (Max 10)", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Faust/EGO/92/20205awakenprofile.png"
}