import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class EverlastingFaustCorrosion implements Skill{
    readonly Name: string = "Everlasting";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Sloth;
    readonly BaseValue: number = 36;
    readonly Coins: number = 1;
    readonly CoinValue: number = -12;
    readonly AttackWeight: number = 3;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "If the main target's Speed is slower than this unit's, deal +(2.5 x (Speed difference))% more damage (max 20%)<br>"+
            "[Before Attack] At 3+ highest Reson., inflict [Tremor] Potency by highest Reson. (max 5)<br>"+
            "[Before Attack] If the highest Reson. was a Sloth A-Reson., inflict [Tremor] Count by [Tremor] Potency inflicted (max 5)"),
        new SkillDescriptionPart("[On Hit] Inflict 5 [Tremor] and +5 [Tremor] Count<br>"+
            "[On Hit] Trigger [Amplitude Entanglement] into [Tremor - Everlasting]<br>"+
            "[On Hit] Trigger [Tremor Burst]; then, reduce target's [Tremor] Count by 1<br>"+
            "[On Hit] Trigger [Tremor Burst]; then, reduce target's [Tremor] Count by 1<br>"+
            "[On Hit] Trigger [Tremor Burst]; then, reduce target's [Tremor] Count by 1<br>"+
            "[On Hit] Reduce the target's Max Speed by half next turn", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Faust/EGO/Everlasting/20206erosionprofile.png";
}