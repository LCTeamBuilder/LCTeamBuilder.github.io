import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class CavernousWailingHongLuCorrosion implements Skill{
    readonly Name: string = "Cavernous Wailing";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Sloth;
    readonly BaseValue: number = 26;
    readonly Coins: number = 1;
    readonly CoinValue: number = -8;
    readonly AttackWeight: number = 3;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "If the target has [Tremor], deal + (5 + (the sum of [Tremor] Potency and Count on target)/2)% more damage (max 40%)<br>"+
            "- At 4+ highest Reason., deal +(7.5 + (the sum of [Tremor] Potency and Count on target)/1.5)% more damage instead (max 50%)"),
        new SkillDescriptionPart("[On Hit] Inflict 6 [Tremor] and +6 [Tremor] Count<br>"+
            "[On Hit] Trigger [Amplitude Conversion] into [Tremor - Reverb]<br>"+
            "[On Hit] Trigger [Tremor Burst]; then, reduce target's [Tremor] Count by 1<br>"+
            "[On Hit] Trigger [Tremor Burst]; then, reduce target's [Tremor] Count by 1", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/HongLu/EGO/CavernousWailing/20606erosionprofile.png";
}