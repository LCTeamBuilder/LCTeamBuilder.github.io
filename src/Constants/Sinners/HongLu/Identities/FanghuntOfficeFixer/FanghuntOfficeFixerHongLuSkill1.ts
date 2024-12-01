import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const FanghuntOfficeFixerHongLuSkill1: Skill = {
    Name: "Slam",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("If the target has 6+ [Rupture], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]<br>"+
            "[Heads Hit] Inflict 1 [Rupture]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]<br>"+
            "[Heads Hit] Inflict 1 [Rupture]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/HongLu/FanghuntOfficeFixer/Slam.png"
}