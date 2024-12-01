import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const SodaHongLuCorrosion: Skill = {
    Name: "Soda",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 25,
    Coins: 1,
    CoinValue: -15,
    AttackWeight: 3,
    SkillLevel: -3,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate] Targets the unit with the least HP"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bind] next turn<br>"+
            "[On Hit] Inflict 5 [Tremor]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/HongLu/EGO/Soda/20604erosionprofile.png"
}