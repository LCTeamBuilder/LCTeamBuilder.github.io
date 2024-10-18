import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class BygoneDaysYiSangCorrosion implements Skill{
    readonly Name: string = "Bygone Days";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gloom;
    readonly BaseValue: number = 22;
    readonly Coins: number = 1;
    readonly CoinValue: number = -6;
    readonly AttackWeight: number = 3;
    readonly SkillLevel: number = +0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
                                "Targets Randomly<br>"+
                                "[Before Attack] At 3+ (Gloom Reson.), Atk Weight +1<br>"+
                                "[Before Attack] At 5+ (Gloom Reson.), additional Atk Weight +1"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking]. Inflict 2 [Bind] next turn<br>"+
                                "[On Hit] If the target has 6+ [Sinking], inflict 2 [Bind] next turn", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/YiSang/EGO/BygoneDays/20106erosionprofile.png";
}