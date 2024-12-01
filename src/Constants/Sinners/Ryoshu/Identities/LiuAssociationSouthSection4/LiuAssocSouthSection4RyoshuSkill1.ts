import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LiuAssocSouthSection4RyoshuSkill1: Skill = {
    Name: "All-out War",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("If the target has 6+ [Burn], Clash Power +1<br>"+
            "If the target has 10+ [Burn], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 1),
        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Burn]<br>"+
            "[On Hit] Inflict 1 [Burn]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/LiuAssociationSouthSection4/AlloutWar.png"
}