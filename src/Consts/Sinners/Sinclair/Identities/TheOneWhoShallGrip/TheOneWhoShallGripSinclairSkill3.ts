import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class TheOneWhoShallGripSinclairSkill3 implements Skill {
    readonly Name: string = "Self-destructive Purge";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Wrath;
    readonly BaseValue: number = 30;
    readonly Coins: number = 3;
    readonly CoinValue: number = -12;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +5;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] Lose 15 SP<br>"+
            "If this unit is [Fanatic] , deal +15% damage<br>"+
            'If target is a &lt;Mechanical Amalgam&gt;, deal +10% damage'),
        new SkillDescriptionPart("[On Hit] Raise Stagger Threshold by 50% of damage dealt", 2),
        new SkillDescriptionPart("[On Hit] If target has 5+ [Bleed], inflict 7 [Burn]<br>"+
            "[On Kill] Gain 1 [Blunt Power Up] next turn", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Sinclair/TheOneWhoShallGrip/SelfdestructivePurge.png";
}