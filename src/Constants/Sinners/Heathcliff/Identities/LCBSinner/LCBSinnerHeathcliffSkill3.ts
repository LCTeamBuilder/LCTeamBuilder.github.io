import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LCBSinnerHeathcliffSkill3: Skill = {
    Name: "Upheaval",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +8,
    AttackWeight: 1,
    SkillLevel: +0,
    SkillDescription: [new SkillDescriptionPart("[Heads Hit] Next Coin has +2 Power", 1),            new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Heathcliff/LCBSinner/Upheaval.png", 
}