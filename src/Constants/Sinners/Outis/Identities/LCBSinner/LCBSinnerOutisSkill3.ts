import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LCBSinnerOutisSkill3: Skill = {
    Name: "Piercing Thrust",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 7,
    Coins: 1,
    CoinValue: +14,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: [new SkillDescriptionPart("If target's HP is above 50%, deal +20% damage", 1),            new SkillDescriptionPart("[On Hit] Inflict +1 [Rupture] Count", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/LCBSinner/PiercingThrust.png"
}