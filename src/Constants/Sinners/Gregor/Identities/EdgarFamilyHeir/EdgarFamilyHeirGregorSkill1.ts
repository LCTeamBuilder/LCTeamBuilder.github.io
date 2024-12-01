import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const EdgarFamilyHeirGregorSkill1: Skill = {
    Name: "Sabre Slash",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Envy,
    BaseValue: 5,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Coin Power +1 for every 3 [Sinking] on target (max 2)<br>"+
            "[On Use] Clash Power +1 for every 3 [Sinking] Count on target (max 2)"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Sinking]", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/EdgarFamilyHeir/SabreSlash.png"
}