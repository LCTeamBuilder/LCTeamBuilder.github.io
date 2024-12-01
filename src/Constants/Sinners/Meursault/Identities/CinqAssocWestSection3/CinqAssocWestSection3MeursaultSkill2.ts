import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const CinqAssocWestSection3MeursaultSkill2: Skill = {
    Name: "Fente",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gluttony,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("If this unit's Speed is faster than the target's by 3 or more, Coin Power +1<br>"+
            "[On Use] If the target has 15+ [Rupture] and 3+ [Rupture] Count, this Skill does not inflict [Rupture] Potency or Count with its effects, but does not consume [Rupture] Count On Hit<br>"+
            "[Clash Win] Gain +2 [Poise] Count"),
        new SkillDescriptionPart("[On Hit] Gain +2 [Poise] Count", 1),
        new SkillDescriptionPart("[On Hit] Gain 2 [Poise]", 2),
        new SkillDescriptionPart("If this unit does not inflict [Rupture], +5% Damage on Critical Hit for every [Rupture] Potency and Count it would have inflicted<br>"+
            "[On Hit] Inflict 4 [Rupture]<br>"+
            "[On Hit] At 7+ Speed, inflict +2 [Rupture] Count", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Meursault/CinqAssocWestSection3/Fente.png"
}