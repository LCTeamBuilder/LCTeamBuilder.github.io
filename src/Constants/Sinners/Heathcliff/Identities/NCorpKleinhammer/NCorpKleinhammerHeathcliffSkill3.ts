import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const NCorpKleinhammerHeathcliffSkill3: Skill = {
    Name: "Infirm Retribution",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Heads Hit] Deal bonus damage by 10% of damage dealt", 1),
        new SkillDescriptionPart("[Heads Hit] Deal bonus damage by 10% of damage dealt", 2),
        new SkillDescriptionPart("[Heads Hit] Deal bonus damage by 10% of damage dealt", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Heathcliff/NCorpKleinhammer/InfirmRetribution.png"
}