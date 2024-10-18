import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class HexNailFaustAwakening implements Skill{
    readonly Name: string = "Hex Nail";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Envy;
    readonly BaseValue: number = 16;
    readonly Coins: number = 1;
    readonly CoinValue: number = +10;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Hit] Inflict 3 [Pierce Fragility]<br>"+
            "[On Hit] Inflict 1 [Envy Fragility]<br>"+
            "[Heads Hit] Inflict 3 [Curse]<br>"+
            "[Heads Hit] Inflict 3 [Nails]<br>"+
            "[On Hit] If target has [Curse], +50% Damage", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Faust/EGO/HexNail/20203awakenprofile.png";
}