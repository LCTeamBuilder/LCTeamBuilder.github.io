import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ThePriestOfLaManchalandGregorSkill2: Skill = {
    Name: "Suffocating Guilt",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +3 [Aggro] to this Skill Slot next turn<br>"+
            "[On Use] Coin Power +1 for every 6 [Bleed] on the target (max 2)<br>"+
            "[On Use] Gain 10 [Bleed]<br>"+
            "[On Use] At 5+ [Ailing Heart], consume up to 60 [Bloodfeast], then, gain 1 [Bloodied Hand] for every 6 [Bloodfeast] consumed<br>"+
            "- At less than 5+ [Ailing Heart], gain 10 [Bleed] and 3 [Bloodied Hand]"),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Bleed] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]<br>"+
            "[On Hit] Gain 3 [Bloodied Hand]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/ThePriestOfLaManchaland/SuffocatingGuilt.png"
}