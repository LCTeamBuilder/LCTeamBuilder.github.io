import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const NCorpKleinhammerHeathcliffSkill2: Skill = {
    Name: "Puri...fy!",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gloom,
    BaseValue: 6,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Clash Win] Heal 5 SP"),
        new SkillDescriptionPart("[Heads Hit] Inflict 2 [Plus Coin Drop] next turn", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Heathcliff/NCorpKleinhammer/Purify.png"
}