import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const TheMiddleLittleBrotherMeursaultSkill3: Skill = {
    Name: "Recording",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("At 4+ Envy Reson., Coin Power +1<br>"+
            "At 6+ Envy A-Reson., Coin Power +1"),
        new SkillDescriptionPart("[On Hit] If target has [Vengeance Mark], inflict 1 [Plus Coin Drop] next turn", 1),
        new SkillDescriptionPart("[On Hit] If target has [Vengeance Mark], inflict 2 [Envy Fragility] next turn", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Meursault/TheMiddleLittleBrother/Recording.png"
}