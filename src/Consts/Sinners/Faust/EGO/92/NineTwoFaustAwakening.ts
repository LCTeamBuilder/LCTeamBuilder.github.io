import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class NineTwoFaustAwakening implements Skill{
    readonly Name: string = "9:2";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 18;
    readonly Coins: number = 1;
    readonly CoinValue: number = +8;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Before Attack] At 4+ (Highest Lust A-Reson), +1 Atk Weight<br>"+
            "At 6+ (Highest Lust A-Reson), additional +1 Atk Weight"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Burn]<br>"+
            "[On Hit] Convert 2 [Burn] on target to 1 [Defense Level Down] (Max 10)", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Faust/EGO/92/20205awakenprofile.png";
}