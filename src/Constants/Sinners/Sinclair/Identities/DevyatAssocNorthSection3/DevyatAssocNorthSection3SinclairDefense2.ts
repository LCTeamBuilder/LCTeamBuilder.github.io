import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class DevyatAssocNorthSection3SinclairDefense2 implements Skill {
    readonly Name: string = "W-wait, I need to do some maintenance…!";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Defense;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill1;
    readonly Affinity: SinEnum = SinEnum.Gluttony;
    readonly BaseValue: number = 9;
    readonly Coins: number = 1;
    readonly CoinValue: number = +7;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Combat Start] If this Skill is to be activated, gain ([Courier Trunk])% of this unit's max HP as Shield (max 25%, once per turn)<br>"+
            "[Turn End] Activate [Strategic R&R Mode]")];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = DefenseTypeEnum.Counter;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Sinclair/DevyatAssocNorthSection3/WWaitINeedToDoSomeMaintenance.png";
}