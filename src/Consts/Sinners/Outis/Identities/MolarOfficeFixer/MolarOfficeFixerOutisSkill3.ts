import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class MolarOfficeFixerOutisSkill3 implements Skill {
    readonly Name: string = "Daring Decision";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Sloth;
    readonly BaseValue: number = 4;
    readonly Coins: number = 4;
    readonly CoinValue: number = +3;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +5;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] [Discard] this unit's Skills in descending order of ranks from all of its Skill Slots<br>"+
            "Spend 10 [Tremor] Count to gain Coin Power +2"),
        new SkillDescriptionPart("[On Hit] Inflict 4 [Tremor]<br>"+
            "[On Hit] If the Skill spent [Tremor] Count, inflict +3 [Tremor] Count", 1),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]; After [Tremor Burst], reduce target's [Tremor] Count by 1", 2),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]; After [Tremor Burst], reduce target's [Tremor] Count by 1", 3),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]; After [Tremor Burst], reduce target's [Tremor] Count by 1", 4)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Outis/MolarOfficeFixer/DaringDecision.png";
}