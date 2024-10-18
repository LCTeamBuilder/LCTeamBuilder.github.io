import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class EverlastingFaustAwakening implements Skill{
    readonly Name: string = "Everlasting";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Sloth;
    readonly BaseValue: number = 4;
    readonly Coins: number = 4;
    readonly CoinValue: number = +5;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("If the target's Speed is slower than this unit's, deal +(5 x (Speed difference))% more damage (max 50%)<br>"+
            "[Before Attack] At 3+ highest Reson., inflict [Tremor] Potency by (2 x (highest Reson.)) (max 10)<br>"+
            "[Before Attack] If the highest Reson. was a Sloth A-Reson., inflict [Tremor] Count by [Tremor] Potency inflicted (max 10)<br>"+
            "[After Attack] For 3 turns, lose 10 SP at Turn End"),
        new SkillDescriptionPart("[On Hit] Inflict 10 [Tremor] and +10 [Tremor] Count<br>"+
            "[On Hit] Trigger [Amplitude Entanglement] into [Tremor - Everlasting]<br>"+
            "[On Hit] Trigger [Tremor Burst]; then, reduce target's [Tremor] Count by 1", 1),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]; then, reduce target's [Tremor] Count by 1", 2),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]; then, reduce target's [Tremor] Count by 1", 3),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]; then, reduce target's [Tremor] Count by 1<br>"+
            "[On Hit] Reduce target's Max Speed by half next turn", 4)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Faust/EGO/Everlasting/20206awakenprofile.png";
}