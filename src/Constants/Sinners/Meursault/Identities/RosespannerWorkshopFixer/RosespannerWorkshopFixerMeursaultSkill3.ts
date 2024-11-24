import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class RosespannerWorkshopFixerMeursaultSkill3 implements Skill {
    readonly Name: string = "Finishing Runup";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Sloth;
    readonly BaseValue: number = 4;
    readonly Coins: number = 4;
    readonly CoinValue: number = +2;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +1;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("If target has 10+ [Tremor] Count, Coin Power +1"),
        new SkillDescriptionPart("[Heads Hit] Gain +1 [Charge] Count<br>"+
            "[On Hit] Inflict 1 [Tremor]", 1),
        new SkillDescriptionPart("[Heads Hit] Gain +2 [Charge] Count<br>"+
            "[On Hit] Inflict 2 [Tremor]", 2),
        new SkillDescriptionPart("[Heads Hit] Gain +2 [Charge] Count<br>"+
            "[On Hit] Inflict 3 [Tremor]", 3),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]<br>"+
            "When triggering [Tremor Burst] reduce [Tremor] Count by 3, then spend all [Charge] Count to further raise Stagger Threshold by ([Charge] Count x5)% (Max 50%)", 4)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Meursault/RosespannerWorkshopFixer/FinishingRunup.png";
}