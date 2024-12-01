import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LobotomyEgoRegretFaustSkill3: Skill = {
    Name: "Unleashed Violence",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 3,
    Coins: 3,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] Spend 5 [Tremor] Count and gain +1 Atk Weight for this Skill (Max +2)<br>"+
            "[Clash Lose] Lose 20 SP<br>"+
            "Deal 6% more Damage for every type of negative effect on target (Max 30%)<br>"+
            "[On Kill] Gain +2 [Tremor] Count"),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst],<br>"+
            "Then deal Wrath Damage by 30% of the final Stagger Threshold Raised by [Tremor Burst]. (Max 20)", 1),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst],<br>"+
            "Then deal Wrath Damage by 30% of the final Stagger Threshold Raised by [Tremor Burst]. (Max 20)", 2),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst],<br>"+
            "Then deal Wrath Damage by 30% of the final Stagger Threshold Raised by [Tremor Burst]. (Max 20)<br>"+
            "Reduce [Tremor] Count by 3", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Faust/LobotomyEGORegret/UnleashedViolence.png"
}