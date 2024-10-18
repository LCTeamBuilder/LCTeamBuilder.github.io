import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class BladeLineageSalsuSinclairSkill2 implements Skill {
    readonly Name: string = "Slash Series";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Wrath;
    readonly BaseValue: number = 6;
    readonly Coins: number = 3;
    readonly CoinValue: number = +2;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Clash Lose] Gain 2 [Attack Power Up] next turn<br>"+
            "[Clash Win] Do not spend [Poise] Count with critical attacks landed with this skill"),
        new SkillDescriptionPart("[On Hit] Gain 2 [Poise]", 1),
        new SkillDescriptionPart("[On Hit] Gain 1 [Poise]", 2),
        new SkillDescriptionPart("[On Hit] Gain 1 [Poise]", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Sinclair/BladeLineageSalsu/SlashSeries.png";
}