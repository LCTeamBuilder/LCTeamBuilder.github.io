import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const TCorpClass2CollectionStaffRodionSkill2: Skill = {
    Name: "T Corp. Martial Suppression",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("Deal +5% more damage for every [Bind] on target (max 15%)<br>"+
            "[On Use] Gain +2 [Tremor] Count<br>"+
            "[On Use] Clash Power +1 for every 6 [Tremor] on target (max 2)"),
        new SkillDescriptionPart("[On Hit] Gain +2 [Tremor] Count<br>"+
            "[Hit After Clash Win] Inflict +3 [Tremor] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bind] next turn<br>"+
            "[On Hit] If the target has 6+ [Tremor], inflict 1 [Bind] next turn", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/TCorpClass2CollectionStaff/TCorpMartialSuppression.png"
}