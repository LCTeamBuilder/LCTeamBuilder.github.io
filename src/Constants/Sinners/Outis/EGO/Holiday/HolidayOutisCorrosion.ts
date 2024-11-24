import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class HolidayOutisCorrosion implements Skill{
    readonly Name: string = "Holiday";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Wrath;
    readonly BaseValue: number = 34;
    readonly Coins: number = 1;
    readonly CoinValue: number = -15;
    readonly AttackWeight: number = 5;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly<br>"+
            "[After Attack] This unit loses 10% HP"),
        new SkillDescriptionPart("[On Hit] Target loses 10 SP<br>"+
            "[On Hit] Trigger [Tremor Burst]<br>"+
            "[On Hit] Inflict 2 Fragility for the Affinity with the highest Resonance count<br>"+
            "[Tails Attack End] Gain 1 'Damage Up' to the Affinity with the highest Resonance count", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Outis/EGO/Holiday/21105erosionprofile.png";
}