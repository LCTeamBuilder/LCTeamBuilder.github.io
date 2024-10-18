import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class CinqAssocWestSection3MeursaultSkill2 implements Skill {
    readonly Name: string = "Fente";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Gluttony;
    readonly BaseValue: number = 4;
    readonly Coins: number = 3;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("If this unit's Speed is faster than the target's by 3 or more, Coin Power +1<br>"+
            "[On Use] If the target has 15+ [Rupture] and 3+ [Rupture] Count, this Skill does not inflict [Rupture] Potency or Count with its effects, but does not consume [Rupture] Count On Hit<br>"+
            "[Clash Win] Gain +2 [Poise] Count"),
        new SkillDescriptionPart("[On Hit] Gain +2 [Poise] Count", 1),
        new SkillDescriptionPart("[On Hit] Gain 2 [Poise]", 2),
        new SkillDescriptionPart("If this unit does not inflict [Rupture], +5% Damage on Critical Hit for every [Rupture] Potency and Count it would have inflicted<br>"+
            "[On Hit] Inflict 4 [Rupture]<br>"+
            "[On Hit] At 7+ Speed, inflict +2 [Rupture] Count", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Meursault/CinqAssocWestSection3/Fente.png";
}