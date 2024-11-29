import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class AsymmetricalInertiaHeathcliffAwakening implements Skill{
    readonly Name: string = "Asymmetrical Inertia";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Sloth;
    readonly BaseValue: number = 8;
    readonly Coins: number = 2;
    readonly CoinValue: number = +8;
    readonly AttackWeight: number = 3;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Before Attack] Gain (4 + highest Reson.) [Tremor] Count (max 8, 20 per turn)<br>"+
            "- If the said Reson. was a Sloth Reson., trigger [Amplitude Conversion] on [Tremor] on self into [Tremor - Clockwinding]"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Tremor] Count<br>"+
            "[Heads Hit] Inflict 5 [Tremor]<br>"+
            "[Tails Hit] Inflict +3 [Tremor] Count", 1),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]; then, reduce target's [Tremor] Count by 1 <br>"+
            "- When triggering [Tremor Burst], inflict 1 [Sloth Fragility] this turn<br>"+
            "- If the highest Reson. was a 3+ Sloth Reson., inflict 1 [Sloth Fragility] next turn as well", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Heathcliff/EGO/AsymmetricalInertia/20708awakenprofile.png";
}