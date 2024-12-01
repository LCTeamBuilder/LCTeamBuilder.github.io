import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const PursuanceMeursaultAwakening: Skill = {
    Name: "Pursuance",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 26,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 3,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("[After Attack] Heal 2 other allies with the least HP for 30% of Max HP, Apply 2 [Protection] next turn"),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Meursault/EGO/Pursuance/20503awakenprofile.png"
}