import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const GCorpHeadManagerOutisSkill3: Skill = {
    Name: "Focus",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 6,
    Coins: 1,
    CoinValue: +16,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict 5 [Sinking]<br>"+
            "[On Hit] Inflict 2 [Attack Power Down]<br>"+
            "[Heads Hit] Inflict 4 [Sinking]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/GCorpHeadManager/Focus.png"
}