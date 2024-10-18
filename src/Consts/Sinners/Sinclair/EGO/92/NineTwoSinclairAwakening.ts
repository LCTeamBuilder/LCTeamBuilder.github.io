import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class NineTwoSinclairAwakening implements Skill{
    readonly Name: string = "9:2";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 26;
    readonly Coins: number = 1;
    readonly CoinValue: number = -10;
    readonly AttackWeight: number = 3;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Before Attack] At 4+ (Lust Reson.), +1 Atk Weight<br>"+
            "[Before Attack] At 4+ (Highest Lust A-Reson.), additional +1 Atk Weight"),
        new SkillDescriptionPart("[On Hit] If target has no [Burn], inflict 4 [Burn]<br>"+
            "[On Hit] Inflict 4 [Burn]<br>"+
            "[Tails Hit] If target has 10+ [Burn], inflict 1 [Attack Power Down] and 1 [Defense Power Down] next turn", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Sinclair/EGO/92/21005awakenprofile.png";
}