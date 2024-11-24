import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class GCorpManagerCorporalGregorSkill3 implements Skill {
    readonly Name: string = "Eviscerate";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 4;
    readonly Coins: number = 4;
    readonly CoinValue: number = +2;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +5;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("If target has 5+ [Rupture], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] If target has [Rupture], deal 30% of damage dealt as bonus damage", 1),
        new SkillDescriptionPart("[On Hit] If target has [Rupture], deal 30% of damage dealt as bonus damage", 2),
        new SkillDescriptionPart("[On Hit] If target has [Rupture], deal 30% of damage dealt as bonus damage", 3),
        new SkillDescriptionPart("[On Hit] Heal by 100% of damage dealt", 4)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Gregor/GCorpManagerCorporal/Eviscerate.png";
}