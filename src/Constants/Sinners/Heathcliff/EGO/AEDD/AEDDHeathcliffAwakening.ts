import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const AEDDHeathcliffAwakening: Skill = {
    Name: "AEDD",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 22,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 3,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] Gain +1 [Charge] Count for every 10% of missing HP (Max 7)<br>"+
            "Gain 2 [Haste] next turn"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Paralyze] and 1 [Gloom Fragility]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Heathcliff/EGO/AEDD/20703awakenprofile.png"
}