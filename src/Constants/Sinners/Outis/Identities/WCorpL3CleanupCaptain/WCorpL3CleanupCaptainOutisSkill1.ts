import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const WCorpL3CleanupCaptainOutisSkill1: Skill = {
    Name: "Ripple",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] At 4+ [Charge] Count, Base Power +1<br>"+
            "[On Use] Clash Power +1 for every 5 [Charge] Count on self (max 2)<br>"+
            "[On Use] Gain +2 [Charge] Count"),
        new SkillDescriptionPart("[On Hit] Gain +2 [Charge] Count", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/WCorpL3CleanupCaptain/Ripple.png"
}