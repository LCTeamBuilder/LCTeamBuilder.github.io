import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ThePrincessOfLaManchalandRodionSkill4: Skill = {
    Name: "Ascendant Don Quixote Hardblood Arts - The Finale",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +5,
    AttackWeight: 3,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("On Use] If the target has 6+ [Bleed], Coin Power +1<br>"+
            "[On Use] To self and (highest Reson.) allies: apply (5 + (1 for every 50 [Bloodfeast Consumed] by this unit)) [Festive Fever] this turn and next turn (max 10)<br>"+
            "[On Use] To self and (highest Reson.) allies: apply 5 [Blooming Thorn]<br>"+
            "[On Use] Deal +1% more damage for every 5 [Bloodfeast Consumed] by this unit (max 50%)<br>"+
            "[After Attack] Consume all [Blooming Thorn] on self"),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Rupture] Count<br>"+
            "[On Hit] Inflict +2 [Bleed] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]<br>"+
            "[On Hit] Inflict 2 [Bleed]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]<br>"+
            "[On Hit] Inflict 2 [Bleed]", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/ThePrincessOfLaManchaland/AscendantDonQuixoteHardbloodArtsTheFinale.png"
}