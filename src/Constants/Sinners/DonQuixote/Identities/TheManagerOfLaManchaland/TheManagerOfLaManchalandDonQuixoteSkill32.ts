import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const TheManagerOfLaManchalandDonQuixoteSkill32: Skill = {
    Name: "Ascendant Sancho Hardblood Arts - La Sangre",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 5,
    Coins: 4,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("On Hit with this Skill: heal 50% of the HP damage dealt (max 20)<br>"+
            "[On Use] Base Power +1 for every 10 [Hardblood] on self (max 3)<br>"+
            "[On Use] Coin Power +1 for every 5 [Bleed] on the target (max 2)<br>"+
            "[On Use] Deal +5% more damage for every [Bleed] on the target (max 50%)<br>"+
            "[On Use] Deal +20% more damage for every 100 [Bloodfeast Consumed] (shared) (max 100%)<br>"+
            "[After Attack] Consume 10 [Hardblood] for every 10 [Hardblood]<br>"+
            "[After Attack] If the target is defeated, increase [Bloodfeast] by 100. Regain half of [Hardblood] consumed by this Skill (once per turn)"),
        new SkillDescriptionPart("[Unbreakable Coin]", 1),
        new SkillDescriptionPart("[Unbreakable Coin]", 2),
        new SkillDescriptionPart("[Unbreakable Coin]", 3),
        new SkillDescriptionPart("[Unbreakable Coin]<br>"+
            "[On Hit] Inflict 8 [Bleed] and +4 [Bleed] Count<br>"+
            "[After Attack] If the target is defeated, inflict 5 [Bleed] and +1 [Bleed] Count against all enemies", 4)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/TheManagerOfLaManchaland/AscendantSanchoHardbloodArtsLaSangre.png"
}