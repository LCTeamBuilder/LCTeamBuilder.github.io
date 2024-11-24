import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LobotomyEgoRegretFaustSkill3 implements Skill {
    readonly Name: string = "Unleashed Violence";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Wrath;
    readonly BaseValue: number = 3;
    readonly Coins: number = 3;
    readonly CoinValue: number = +5;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
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
            "Reduce [Tremor] Count by 3", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Faust/LobotomyEGORegret/UnleashedViolence.png";
}