import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LifetimeStewSinclairCorrosion implements Skill{
    readonly Name: string = "Lifetime Stew";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 24;
    readonly Coins: number = 1;
    readonly CoinValue: number = -12;
    readonly AttackWeight: number = 3;
    readonly SkillLevel: number = +1;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets the unit with the least HP<br>"+
            "[Before Attack] Spend 3 random E.G.O resources to boost damage by 30%"),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Burn] Count", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Sinclair/EGO/LifetimeStew/21003erosionprofile.png";
}