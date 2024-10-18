import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class TheOneWhoShallGripSinclairSkill2 implements Skill {
    readonly Name: string = "Amoral Enacment";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 16;
    readonly Coins: number = 4;
    readonly CoinValue: number = -4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +5;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] Lose 10 SP<br>"+
            "If this unit is [Fanatic], deal +10% damage"),
        new SkillDescriptionPart("[Tails Hit] Inflict 2 [Burn]<br>"+
            "[On Hit] Inflict 1 [Burn]", 2),
        new SkillDescriptionPart("[Tails Hit] Inflict 2 [Burn]<br>"+
            "[On Hit] Inflict 1 [Burn]", 3),
        new SkillDescriptionPart("[Tails Hit] Inflict +1 [Burn] Count<br>"+
            "[On Hit] Inflict 2 [Bleed]", 4)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Sinclair/TheOneWhoShallGrip/AmoralEnactment.png";
}