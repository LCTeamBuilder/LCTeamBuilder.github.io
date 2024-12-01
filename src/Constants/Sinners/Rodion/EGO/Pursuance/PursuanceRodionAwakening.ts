import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const PursuanceRodionAwakening: Skill = {
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
        [new SkillDescriptionPart("[On Hit] Inflict 1 [Sloth Fragility] next turn<br>"+
            "[After Attack] Heal 2 other allies with the least HP percentage for 30% of this unit's Max HP<br>"+
            "[Heads Attack End] If target is Staggered or defeated, apply 15% of this unit's Max HP as Shield to allies that this unit healed", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Rodion/EGO/Pursuance/20905awakenprofile.png"
}