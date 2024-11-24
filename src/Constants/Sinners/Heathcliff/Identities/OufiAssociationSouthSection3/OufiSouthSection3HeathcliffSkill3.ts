import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class OufiSouthSection3HeathcliffSkill3 implements Skill {
    readonly Name: string = "Execution Sentencing";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Pride;
    readonly BaseValue: number = 5;
    readonly Coins: number = 3;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("Coin Power +1 for every 6 [Tremor] on target (Max 2)"),
            new SkillDescriptionPart("[On Hit] Inflict 1 [Tremor]", 1),
            new SkillDescriptionPart("[On Hit] Inflict 1 [Tremor]", 2),
            new SkillDescriptionPart("[On Hit] If the sum of the target's [Tremor] Potency + Count is 20 or higher, trigger [Amplitude Conversion] on target, converting [Tremor] to [Tremor - Decay]", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Heathcliff/OufiAssocSouthSection3/ExecutionSentencing.png";
}