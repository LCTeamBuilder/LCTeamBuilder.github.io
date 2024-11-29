import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class AsymmetricalInertiaHeathcliffCorrosion implements Skill{
    readonly Name: string = "Asymmetrical Inertia";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Sloth;
    readonly BaseValue: number = 28;
    readonly Coins: number = 2;
    readonly CoinValue: number = -8;
    readonly AttackWeight: number = 3;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "[Before Attack] Gain (4 + highest Reson.) [Tremor] Count (max 10, 20 per turn) <br>"+
            "- If the said Reson. was a Sloth Reson., trigger [Amplitude Conversion] on [Tremor] on self into [Tremor - Clockwinding]"),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Tremor] Count <br>"+
            "[Heads Hit] Inflict 6 [Tremor]<br>"+
            "[Tails Hit] Inflict +4 [Tremor] Count", 1),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]; then, reduce target's [Tremor] Count by 1 <br>"+
            "[On Hit] Trigger [Tremor Burst]; then, reduce target's [Tremor] Count by 1<br>"+
            "- When triggering [Tremor Burst], inflict 2 [Sloth Fragility] this turn<br>"+
            "- If the highest Reson. was a 3+ Sloth Reson., inflict 2 [Sloth Fragility] next turn as well", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Heathcliff/EGO/AsymmetricalInertia/20708erosionprofile.png";
}