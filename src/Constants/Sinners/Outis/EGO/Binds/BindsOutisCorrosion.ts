import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class BindsOutisCorrosion implements Skill{
    readonly Name: string = "Binds";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Pride;
    readonly BaseValue: number = 34;
    readonly Coins: number = 1;
    readonly CoinValue: number = -14;
    readonly AttackWeight: number = 5;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly<br>"+
            "[Before Attack] Gain (highest Pride or Sloth Reson. - 2) +1 Atk Weight (Max. 2)<br>"+
            "Amount of Stagger Threshold raised by [Tremor Burst] increases by 50%"),
        new SkillDescriptionPart("[On Hit] Inflict 6 [Tremor]<br>"+
            "[On Hit] Inflict +3 [Tremor] Count<br>"+
            "[On Hit] Trigger [Amplitude Conversion] into [Tremor - Fracture]<br>"+
            "[Tails Hit] Trigger [Tremor Burst]<br>"+
            "[Tails Hit] Trigger [Tremor Burst]<br>"+
            "[On Hit] Trigger [Tremor Burst]", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Outis/EGO/Binds/21106erosionprofile.png";
}