import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const OufiSouthSection3HeathcliffSkill3: Skill = {
    Name: "Execution Sentencing",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 6 [Tremor] on target (Max 2)"),
            new SkillDescriptionPart("[On Hit] Inflict 1 [Tremor]", 1),
            new SkillDescriptionPart("[On Hit] Inflict 1 [Tremor]", 2),
            new SkillDescriptionPart("[On Hit] If the sum of the target's [Tremor] Potency + Count is 20 or higher, trigger [Amplitude Conversion] on target, converting [Tremor] to [Tremor - Decay]", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Heathcliff/OufiAssocSouthSection3/ExecutionSentencing.png"
}