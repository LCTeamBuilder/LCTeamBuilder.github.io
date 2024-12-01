import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const RosespannerWorkshopFixerMeursaultSkill1: Skill = {
    Name: "Saddled Tasks",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 5+ [Tremor] Count, Coin Power +2"),
        new SkillDescriptionPart("[Heads Hit] Inflict 2 [Tremor]<br>"+
            "[On Hit] Inflict 2 [Tremor]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Meursault/RosespannerWorkshopFixer/SaddledTasks.png"
}