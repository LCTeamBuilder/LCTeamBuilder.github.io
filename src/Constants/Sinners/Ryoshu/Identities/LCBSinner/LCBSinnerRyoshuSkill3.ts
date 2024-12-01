import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LCBSinnerRyoshuSkill3: Skill = {
Name: "Brushstroke",
SkillType: SkillTypeEnum.Attack,
SkillTier: SkillTierEnum.Skill3,
Affinity: SinEnum.Pride,
BaseValue: 5,
Coins: 3,
CoinValue: +3,
AttackWeight: 1,
SkillLevel: +2,
SkillDescription: [new SkillDescriptionPart("[Combat Start] Gain 2 [Slash DMG Up]"),
                            new SkillDescriptionPart("[On Hit] Gain 2 [Poise] next turn", 2)],
DamageType: DamageTypeEnum.Slash,
DefenseType: undefined,
SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/LCBSinner/Brushstroke.png"
}