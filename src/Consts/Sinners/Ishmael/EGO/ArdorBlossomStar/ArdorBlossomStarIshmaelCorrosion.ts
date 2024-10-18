import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class ArdorBlossomStarIshmaelCorrosion implements Skill{
    readonly Name: string = "Ardor Blossom Star";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Wrath;
    readonly BaseValue: number = 41;
    readonly Coins: number = 1;
    readonly CoinValue: number = -22;
    readonly AttackWeight: number = 5;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "[On Use] Lose HP by 10% of Max HP"),
        new SkillDescriptionPart("[After Attack] Inflict [Burn] by (2 * Wrath Reson.) on all units<br>"+
            "[On Hit] Raise Stagger Threshold by 60% of damage dealt")];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Ishmael/EGO/ArdorBlossomStar/20803erosionprofile.png";
}