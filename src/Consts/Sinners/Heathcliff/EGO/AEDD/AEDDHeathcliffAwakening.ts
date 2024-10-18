import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class AEDDHeathcliffAwakening implements Skill{
    readonly Name: string = "AEDD";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gloom;
    readonly BaseValue: number = 22;
    readonly Coins: number = 1;
    readonly CoinValue: number = +7;
    readonly AttackWeight: number = 3;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Before Attack] Gain +1 [Charge] Count for every 10% of missing HP (Max 7)<br>"+
            "Gain 2 [Haste] next turn"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Paralyze] and 1 [Gloom Fragility]", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Heathcliff/EGO/AEDD/20703awakenprofile.png";
}