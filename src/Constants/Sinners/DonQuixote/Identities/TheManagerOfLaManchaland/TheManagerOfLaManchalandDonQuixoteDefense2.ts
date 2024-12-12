import {
    DamageTypeEnum,
    DefenseTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const TheManagerOfLaManchalandDonQuixoteDefense2: Skill = {
    Name: "Variant Sancho Hardblood Arts 15 - Buildup to Finale",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 6,
    Coins: 2,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Clashable Counter]<br>"+
            "[Combat Start] To (3 + (highest Reson. / 2)) allies with the least HP: apply (1 + ([Hardblood] / 10)) [Shimmering (Bloodfiend)] for every 40 [Bloodfeast Consumed] (shared), then consume half of [Hardblood] on self. (once per ally; rounded down)"),
        new SkillDescriptionPart("[Unbreakable Coin]<br>"+
            "[On Hit] Inflict +3 [Bleed] Count", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: DefenseTypeEnum.UniqueCounter,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/TheManagerOfLaManchaland/VariantSanchoHardbloodArts15BuildupToFinale.png"
}