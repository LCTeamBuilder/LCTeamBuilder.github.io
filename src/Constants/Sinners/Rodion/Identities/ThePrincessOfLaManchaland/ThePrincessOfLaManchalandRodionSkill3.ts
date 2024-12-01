import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ThePrincessOfLaManchalandRodionSkill3: Skill = {
    Name: "The Festival Will End",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Use] At 25+ [Blooming Thorn], activate 'Ascendant Don Quixote Hardblood Arts - The Finale' instead<br>"+
            "[On Use] If the target has 6+ [Bleed], Coin Power +1<br>"+
            "[On Use] To self and (highest Reson.) allies: apply (3 + (1 for every 50 [Bloodfeast Consumed] by this unit)) [Festive Fever] this turn and next turn (max 10)<br>"+
            "[On Use] To self and (highest Reson.) allies: apply 3 [Blooming Thorn]"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Rupture] Count<br>"+
            "[On Hit] Inflict +1 [Bleed] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]<br>"+
            "[On Hit] Inflict 1 [Bleed]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]<br>"+
            "[On Hit] Inflict 1 [Bleed]", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/ThePrincessOfLaManchaland/TheFestivalWillEnd.png"
}