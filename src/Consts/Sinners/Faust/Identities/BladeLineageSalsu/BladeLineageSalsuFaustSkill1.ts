import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class BladeLineageSalsuFaustSkill1 implements Skill {
    readonly Name: string = "Moonlit Blade Dance";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill1;
    readonly Affinity: SinEnum = SinEnum.Sloth;
    readonly BaseValue: number = 3;
    readonly Coins: number = 3;
    readonly CoinValue: number = +2;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("At 5+ [Poise], Coin Power +1<br>"+
            "[On Use] Gain +2 [Poise] Count"),
        new SkillDescriptionPart("[Heads Hit] Gain 1 [Poise]", 2),
        new SkillDescriptionPart("[On Crit] Inflict 1 [Red Plum Blossom]", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Faust/BladeLineageSalsu/MoonlitBladeDance.png";
}