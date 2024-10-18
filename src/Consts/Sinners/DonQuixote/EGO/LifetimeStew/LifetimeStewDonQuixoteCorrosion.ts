import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LifetimeStewDonQuixoteCorrosion implements Skill{
    readonly Name: string = "Lifetime Stew";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 22;
    readonly Coins: number = 1;
    readonly CoinValue: number = +5;
    readonly AttackWeight: number = 3;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
        "Targets the unit with the most HP<br>"+
        "[Before Attack] Boost damage based on current Lust resources (Up to 50%)<br>"+
        "Then spend Lust resources by (Lust Reson.); further boost damage by 10% per resource spent"),
        new SkillDescriptionPart("[On Hit] Inflict +4 [Burn] Count", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/DonQuixote/EGO/LifetimeStew/20304erosionprofile.png";
}