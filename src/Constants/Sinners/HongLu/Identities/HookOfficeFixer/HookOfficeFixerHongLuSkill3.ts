import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const HookOfficeFixerHongLuSkill3: Skill = {
    Name: "Rampage",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("At 6+ Speed, Coin Power +1<br>"+
            "Deal more damage based on target's missing HP (+0.5% damage per 1% missing HP)"),
        new SkillDescriptionPart("[Heads Hit] Heal 1 SP per [Bleed] on target (Max 10)", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]", 3),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 4)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/HongLu/HookOfficeFixer/Rampage.png"
}