import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LCBSinnerHongLuSkill3: Skill = {
    Name: "Whirlwind",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 6,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("If user took no damage last turn, Coin Power +2"),
        new SkillDescriptionPart("[Heads Hit] Inflict 2 [Attack Power Down]<br>"+
            "[On Hit] Inflict 2 [Sinking]<br>"+
            "[On Hit] Inflict 2 [Rupture]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/HongLu/LCBSinner/Whirldwind.png", 
}