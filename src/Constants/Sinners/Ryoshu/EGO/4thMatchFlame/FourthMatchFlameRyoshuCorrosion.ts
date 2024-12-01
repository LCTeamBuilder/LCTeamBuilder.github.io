import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const FourthMatchFlameRyoshuCorrosion: Skill = {
    Name: "4th Match Flame",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 42,
    Coins: 1,
    CoinValue: -22,
    AttackWeight: 3,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "Skill Power +4 against units with [Burn]<br>"+
            "Deal +5% damage per 1 [Burn] on target (Max 100%)<br>"+
            "[On Kill] Gain +3 [Attack Power Up] next turn<br>"+
            "[Failed Kill] Gain +3 [Attack Power Up] and 10 [Burn] next turn"),
        new SkillDescriptionPart("[On Hit] Inflict 4 [Burn]", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Ryoshu/EGO/4thMatchFlame/20402erosionprofile.png"
}