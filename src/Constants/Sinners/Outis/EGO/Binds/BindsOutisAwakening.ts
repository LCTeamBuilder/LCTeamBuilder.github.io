import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class BindsOutisAwakening implements Skill{
    readonly Name: string = "Binds";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Pride;
    readonly BaseValue: number = 20;
    readonly Coins: number = 1;
    readonly CoinValue: number = +10;
    readonly AttackWeight: number = 5;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Before Attack] Gain (highest Pride or Sloth Reson. - 2) +1 Atk Weight (Max. 2)<br>"+
            "Amount of Stagger Threshold raised by [Tremor Burst] increases by 100%<br>"+
            "[After Attack] For the next 3 turns, Lose 8 SP at every Turn End"),
        new SkillDescriptionPart("[On Hit] Inflict 6 [Tremor]<br>"+
            "[On Hit] Trigger [Amplitude Conversion] into [Tremor - Fracture]<br>"+
            "[On Hit] Trigger [Tremor Burst]", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Outis/EGO/Binds/21106awakenprofile.png";
}