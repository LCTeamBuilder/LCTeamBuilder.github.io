import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const SevenAssocSouthSection6RyoshuSkill2: Skill = {
    Name: "Upper Slash",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +14,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("Skill Power +2 against units with [Slash Fragility]<br>"+
            "[Clash Win] Gain 1 [Attack Power Up] next turn"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Defense Level Down]", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/SevenAssociationSouthSection6/UpperSlash.png"
}