import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const FourthMatchFlameYiSangCorrosion: Skill = {
    Name: "4th Match Flame",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 24,
    Coins: 1,
    CoinValue: -12,
    AttackWeight: 5,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly"),
        new SkillDescriptionPart("[On Hit] Inflict 4 [Burn]<br>"+
            "[Heads Hit] Inflict 6 [Burn]", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/YiSang/EGO/4thMatchFlame/20102erosionprofile.png"
}