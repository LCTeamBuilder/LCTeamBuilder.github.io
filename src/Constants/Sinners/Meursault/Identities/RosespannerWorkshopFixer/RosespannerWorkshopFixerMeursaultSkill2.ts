import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const RosespannerWorkshopFixerMeursaultSkill2: Skill = {
    Name: "Forced Break",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Pride,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 7+ [Tremor] Count, Final Power +1"),
        new SkillDescriptionPart("[Heads Hit] Inflict 2 [Tremor]<br>"+
            "[On Hit] Inflict 3 [Tremor]", 1),
        new SkillDescriptionPart("[On Hit] If target has 5+ [Tremor], inflict 1 [Attack Power Down] next turn", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Meursault/RosespannerWorkshopFixer/ForcedBreak.png"
}