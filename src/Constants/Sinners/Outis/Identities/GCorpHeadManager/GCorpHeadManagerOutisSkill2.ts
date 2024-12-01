import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const GCorpHeadManagerOutisSkill2: Skill = {
    Name: "Onslaught Command",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gluttony,
    BaseValue: 6,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Apply 1 [Attack Power Up] to the ally with the lowest Speed"),
        new SkillDescriptionPart("[On Hit] Apply 2 [Damage Up] to the ally with the lowest Speed", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/GCorpHeadManager/OnslaughtCommand.png"
}