import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const FourthMatchFlameRyoshuAwakening: Skill = {
    Name: "4th Match Flame",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 21,
    Coins: 1,
    CoinValue: +16,
    AttackWeight: 3,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Skill power +2 against units with [Burn]<br>"+
            "Deal +5% damage per 1 [Burn] on target (Max 100%)<br>"+
            "[On Kill] Gain +2 [Attack Power Up] next turn"),
        new SkillDescriptionPart("[On Hit] Inflict 4 [Burn]", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Ryoshu/EGO/4thMatchFlame/20402awakenprofile.png"
}