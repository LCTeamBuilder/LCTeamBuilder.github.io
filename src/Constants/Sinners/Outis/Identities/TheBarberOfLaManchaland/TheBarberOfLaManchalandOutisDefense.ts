import {
    DamageTypeEnum,
    DefenseTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const TheBarberOfLaManchalandOutisDefense: Skill = {
    Name: "Quite Discourteous!",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 7,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] At 10+ [Blood-tinged Scissorblades], Base Power +1<br>"+
            "- At 20+ [Blood-tinged Scissorblades], Base Power +2 instead"),
        new SkillDescriptionPart("[On Use] Coin Power +1 for every 5 [Bleed] on self (max 3)", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: DefenseTypeEnum.Counter,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/TheBarberOfLaManchaland/QuiteDiscourteous.png"
}