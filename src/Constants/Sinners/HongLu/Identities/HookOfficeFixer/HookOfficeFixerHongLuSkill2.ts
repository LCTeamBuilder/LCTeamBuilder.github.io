import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const HookOfficeFixerHongLuSkill2: Skill = {
    Name: "Goin' First",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Lust,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("At 6+ Speed, Coin Power +1<br>"+
            "[On Use] Gain 2 [Haste] next turn"),
        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Bleed]", 1),
        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Bleed]", 2),
        new SkillDescriptionPart("[On Hit] If this unit is faster than the target, inflict [Bleed] Count equal to their Speed difference (Max 4)", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/HongLu/HookOfficeFixer/GoinFirst.png"
}