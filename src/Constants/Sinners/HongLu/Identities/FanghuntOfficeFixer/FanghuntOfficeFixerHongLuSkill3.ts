import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const FanghuntOfficeFixerHongLuSkill3: Skill = {
    Name: "A Cheerful Hunt's End",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("If the target has 6+ [Rupture], Coin Power +1<br>"+
            "[On Use] If the target has 15+ [Rupture] and 3+ [Rupture] Count: this Skill does not inflict [Rupture] or [Rupture] Count, instead, gain Coin Power +1<br>"+
            "- If the target is a &ltBloodfiend&gt or a &ltBloodbag&gt, gain an additonal Coin Power +1<br>"+
            "[Clash Win] Inflict +2 [Rupture] Count"),
        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Rupture]", 1),
        new SkillDescriptionPart("[Heads Hit] Inflict 2 [Rupture]", 2),
        new SkillDescriptionPart("[On Hit] If the target has 15+ [Rupture], or has less than 30% HP, Reuse this Coin (once per Skill)", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/HongLu/FanghuntOfficeFixer/ACheerfulHuntsEnd.png"
}