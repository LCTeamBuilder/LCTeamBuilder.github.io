import { DamageTypeEnum, 
    DefenseTypeEnum, 
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LaSangreDeSanchoDonQuixoteAwakening implements Skill{
    readonly Name: string = "La Sangre de Sancho";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 12;
    readonly Coins: number = 1;
    readonly CoinValue: number = +14;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = [new SkillDescriptionPart("[On Hit] Inflict 8 [Bleed]", 1),
                                                        new SkillDescriptionPart("[On Hit] Heal by 50% of damage dealt", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/DonQuixote/EGO/LaSangreDeSancho/20301awakenprofile.png";
}