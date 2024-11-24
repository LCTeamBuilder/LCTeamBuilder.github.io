import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class MolarOfficeFixerOutisSkill1 implements Skill {
    readonly Name: string = "Wait Up!";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill1;
    readonly Affinity: SinEnum = SinEnum.Wrath;
    readonly BaseValue: number = 4;
    readonly Coins: number = 1;
    readonly CoinValue: number = +7;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +1;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("If this Skill is Discarded, gain +4 [Tremor] Count<br>"+
            "[On Use] Gain +2 [Tremor] Count<br>"+
            "At 6+ [Tremor] Count, gain +2 Final Power"),
        new SkillDescriptionPart("[On Hit] Lower user's Stagger Threshold for every [Tremor] Count on self (Max 10)", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Outis/MolarOfficeFixer/WaitUp.png";
}