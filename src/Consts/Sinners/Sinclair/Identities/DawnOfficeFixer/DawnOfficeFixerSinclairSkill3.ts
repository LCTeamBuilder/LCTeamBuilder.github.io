import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class DawnOfficeFixerSinclairSkill3 implements Skill {
    readonly Name: string = "Stigmatize";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Wrath;
    readonly BaseValue: number = 4;
    readonly Coins: number = 2;
    readonly CoinValue: number = +7;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("Coin Power +1 for every 7 [Burn] on target (max 2)<br>"+
            "When in a Volatile E.G.O state, activate Blazing Strike instead<br>"+
            "[Clash Win] Heal 10 SP<br>"+
            "[Clash Lose] Lose 10 SP"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Burn]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Burn]", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Sinclair/DawnOfficeFixer/Stigmatize1.png";
}