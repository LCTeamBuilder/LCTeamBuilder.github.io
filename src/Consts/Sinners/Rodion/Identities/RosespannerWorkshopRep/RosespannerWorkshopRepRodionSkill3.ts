import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class RosespannerWorkshopRepRodionSkill3 implements Skill {
    readonly Name: string = "Let's Rack Up Some Scores";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Envy;
    readonly BaseValue: number = 5;
    readonly Coins: number = 3;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] Gain 6+ [Charge] Count"),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Tremor] Count", 1),
        new SkillDescriptionPart("[Heads Hit] Inflict 2 [Tremor]<br>"+
            "[On Hit] Trigger [Tremor Burst]<br>"+
            "After bursting [Tremor], reduce [Tremor] Count by 1", 2),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]<br>"+
            "After bursting [Tremor], reduce [Tremor] Count by 1<br>"+
            "[On Hit] If target is Staggered, deal 25% of damage dealt as bonus damage")];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Rodion/RosespannerWorkshopRep/LetsRackUpSomeScores.png";
}