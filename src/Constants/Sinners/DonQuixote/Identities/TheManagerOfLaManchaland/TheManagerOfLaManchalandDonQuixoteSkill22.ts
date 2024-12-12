import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const TheManagerOfLaManchalandDonQuixoteSkill22: Skill = {
    Name: "Variant Sancho Hardblood Arts 8 - Split Apart",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 2,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("On Hit with this Skill: heal 30% of the HP damage dealt (max 10)<br>"+
            "[On Use] Coin Power +1 for every 6 [Bleed] on the target (max 2)<br>"+
            "[Before Attack] Gain Atk Weight +1 for every 10 [Hardblood] (max 2)<br>"+
            "[After Attack] Consume 10 [Hardblood] for every Atk Weight gained"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 2),
        new SkillDescriptionPart("[Unbreakable Coin]<br>"+
            "Deal +2.5% more damage for every [Bleed] on target (max 25%)<br>"+
            "Deal +15% more damage for every 100 [Bloodfeast Consumed] (shared) (max 75%)", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/TheManagerOfLaManchaland/VariantSanchoHardbloodArts8SplitApart.png"
}