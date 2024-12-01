import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const RedEyesOpenRyoshuCorrosion: Skill = {
    Name: "Red Eyes (Open)",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 33,
    Coins: 1,
    CoinValue: -14,
    AttackWeight: 3,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "If main target's Speed is lower than user's by 3 or more, +10 Final Power"),
        new SkillDescriptionPart("[On Hit] If target has 3+ [Bind] , deal +40% damage<br>"+
            "[On Hit] If this skill staggers or defeats a target, heal user and the ally with the least HP by 10% of Max HP", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Ryoshu/EGO/RedEyesOpen/20404erosionprofile.png"
}