import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LosMariachisJefeSinclairSkill2 implements Skill {
    readonly Name: string = "Danza de Pasión";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Envy;
    readonly BaseValue: number = 5;
    readonly Coins: number = 3;
    readonly CoinValue: number = +1;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = -3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("If target has 6+ [Sinking], Coin Power +2"),
        new SkillDescriptionPart("[On Hit] Gain 2 [Poise]<br>"+
            "[On Hit] Gain +1 [Poise] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking]<br>"+
            "[On Hit] Inflict +1 [Sinking] Count", 2),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking]", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Sinclair/JefeDeLosMariachis/DanzaDePasion.png";
}