import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class MulticrackOfficeFixerHeathcliffSkill3 implements Skill {
    readonly Name: string = "Photoelectric Harpoon";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gloom;
    readonly BaseValue: number = 5;
    readonly Coins: number = 4;
    readonly CoinValue: number = +2;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("Coin Power +1 for every 2 [Charge] on self (max 2)"),
        new SkillDescriptionPart("[On Hit] Gain +7 [Charge] Count", 2),
        new SkillDescriptionPart("[On Hit] Gain +([Charge] x 3) [Charge] Count (max 9)", 3),
        new SkillDescriptionPart("[On Hit] Inflict [Photoelectricity] equal to [Charge] (max 3)<br>"+
            "[On Hit] Inflict 1 [Blunt Fragility] for every 2 [Charge] (max 2)", 4)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Heathcliff/MultiCrackOfficeFixer/PhotoelectricHarpoon.png";
}