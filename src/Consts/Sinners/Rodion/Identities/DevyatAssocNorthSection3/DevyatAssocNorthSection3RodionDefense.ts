import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class DevyatAssocNorthSection3RodionDefense implements Skill {
    readonly Name: string = "Courier Support & Control Sequence";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Defense;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill1;
    readonly Affinity: SinEnum = SinEnum.Gluttony;
    readonly BaseValue: number = 9;
    readonly Coins: number = 1;
    readonly CoinValue: number = +7;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Combat Start] At 15+ [Courier Trunk], activate 'Just… a Strategic Time Off!' instead (once per turn)<br>"+
            "[Combat Start] If this Skill is to be activated, gain ([Courier Trunk])% of this unit's max HP as Shield (max 25%, once per turn)<br>"+
            "[On Use] Gain 2 [Courier Trunk] (once per turn)<br>"+
            "- At less than 15 [Courier Trunk], gain 1 additional [Courier Trunk]")];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = DefenseTypeEnum.Counter;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Rodion/DevyatAssocNorthSection3/CourierSupportControlSequence.png";
}