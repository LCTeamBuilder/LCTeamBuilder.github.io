import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const TheManagerOfLaManchalandDonQuixoteSkill21: Skill = {
    Name: "Let All Blossom Free",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("On Hit with this Skill: heal 30% of the HP damage dealt (max 10)<br>"+
            "[On Use] Consume up to 50 [Bloodfeast] and gain 1 [Hardblood] for every 10 [Bloodfeast] this unit consumed<br>"+
            "- If this unit failed to consume [Bloodfeast], gain 5 [Bleed]<br>"+
            "[On Use] Coin Power +1 for every 6 [Bleed] on the target (max 2)<br>"+
            "[Before Attack] Atk Weight +1 for every 10 [Hardblood] on self (max 2)"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 1),
        new SkillDescriptionPart("Deal +2.5% more damage for every [Bleed] on target (max 25%)<br>"+
            "Deal +15% more damage for every 100 [Bloodfeast Consumed] by self (max 75%)", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/TheManagerOfLaManchaland/LetAllBlossomFree.png"
}