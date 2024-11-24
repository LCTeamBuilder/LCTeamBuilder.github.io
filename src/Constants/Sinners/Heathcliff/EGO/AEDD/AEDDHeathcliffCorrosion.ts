import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class AEDDHeathcliffCorrosion implements Skill{
    readonly Name: string = "AEDD";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gloom;
    readonly BaseValue: number = 29;
    readonly Coins: number = 1;
    readonly CoinValue: number = -7;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "[Before Attack] Gain +1 [Charge] Count for every 10% of missing HP (Max 7)<br>"+
            "Gain 2 [Haste] next turn"),
        new SkillDescriptionPart("[On Hit] Spend all [Charge] Count to deal bonus Gloom damage by ([Charge] Count*2,5)% of damage dealt (Max 50%)<br>"+
            "[After Attack] Spend all [Charge] Count<br>"+
            "[Tails Attack End] Lose HP by 10% of Max HP to gain +10 [Charge] Count", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Heathcliff/EGO/AEDD/20703erosionprofile.png";
}