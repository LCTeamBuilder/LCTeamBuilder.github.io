import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class RosespannerWorkshopRepRodionSkill2 implements Skill {
    readonly Name: string = "Vibration Compression";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Gloom;
    readonly BaseValue: number = 6;
    readonly Coins: number = 2;
    readonly CoinValue: number = +3;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("If target has 10+ [Tremor] Count, Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Tremor] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Tremor]<br>"+
            "At 3+ [Charge] Count, reuse this Coin if it lands Heads (Up to 2 times)<br>"+
            "Inflict 2 more [Tremor] each time the Coin is reused<br>"+
            "If the Coin is reused twice, inflict [Tremor], then trigger [Tremor Burst]<br>"+
            "After bursting [Tremor], reduce [Tremor] Count by 1", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Rodion/RosespannerWorkshopRep/VibrationCompression.png";
}