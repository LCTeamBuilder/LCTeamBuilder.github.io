import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ImpendingDaySinclairCorrosion: Skill = {
    Name: "Impending Day",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 28,
    Coins: 1,
    CoinValue: -8,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "If target's HP is below 25%, +50% Damage"),
        new SkillDescriptionPart("[Failed Kill] Gain 10 [Bleed] next turn<br>"+
            "[Failed Kill] Gain 3 [Attack Power Up] next turn", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Sinclair/EGO/ImpendingDay/21002erosionprofile.png"
}