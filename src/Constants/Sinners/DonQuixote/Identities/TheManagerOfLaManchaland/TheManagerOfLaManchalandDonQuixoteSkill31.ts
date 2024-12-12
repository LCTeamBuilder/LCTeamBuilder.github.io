import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const TheManagerOfLaManchalandDonQuixoteSkill31: Skill = {
    Name: "I Shall Impale",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("On Hit with this Skill: heal 50% of the HP damage dealt (max 10)<br>"+
            "[On Use] Clash Power +1 for every 10 [Hardblood] (max 2)<br>"+
            "[On Use] Coin Power +1 for every 5 [Bleed] on the target (max 2)<br>"+
            "[On Use] Consume up to 50 [Bloodfeast] and gain 1 [Hardblood] for every 10 [Bloodfeast] consumed<br>"+
            "- If this unit failed to consume [Bloodfeast], gain 10 [Bleed]<br>"+
            "[On Use] Deal +5% more damage for every [Bleed] on the target (max 50%)<br>"+
            "[On Use] Deal +20% more damage for every 100 [Bloodfeast Consumed] by self (max 100%)<br>"+
            "[After Attack] If the target is defeated, increase [Bloodfeast] by 60; gain 10 [Hardblood] (once per turn)"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Bleed]", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/TheManagerOfLaManchaland/IShallImpale.png"
}