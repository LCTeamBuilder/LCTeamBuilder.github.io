import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const TheManagerOfLaManchalandDonQuixoteSkill12: Skill = {
    Name: "Variant Sancho Hardblood Arts 9 - Whip",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("On Hit with this Skill: heal 50% of the HP damage dealt (max 20)<br>"+
            "[On Use] Coin Power +1 for every 6 [Bleed] on the target (max 2)<br>"+
            "[On Use] Gain 20 [Bleed]<br>"+
            "[On Use] Inflict +1 more [Bleed] On Hit for every 10 [Hardblood]. (max 2)<br>"+
            "After Attack, consume 10 [Hardblood]"),
        new SkillDescriptionPart("[Unbreakable Coin]<br>"+
            "[On Hit] Inflict 2 [Bleed]", 1),
        new SkillDescriptionPart("[Unbreakable Coin]<br>"+
            "[On Hit] Inflict 2 [Bleed]<br>"+
            "[On Hit] Activate [Bleed] on the target once (target loses 1 [Bleed] Count)", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/TheManagerOfLaManchaland/VariantSanchoHardbloodArts9Whip.png"
}