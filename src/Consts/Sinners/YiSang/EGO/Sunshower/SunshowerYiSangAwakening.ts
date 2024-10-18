import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class SunshowerYiSangAwakening implements Skill{
    readonly Name: string = "Sunshower";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Sloth;
    readonly BaseValue: number = 17;
    readonly Coins: number = 1;
    readonly CoinValue: number = +15;
    readonly AttackWeight: number = 7;
    readonly SkillLevel: number = -1;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Before Attack] Give 1 [Sloth Power Up], 2 [Sloth DMG Up], and 3 [Protection] to all allies this turn and next turn"),
        new SkillDescriptionPart("[Heads Hit] Heal 15 SP", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/YiSang/EGO/Sunshower/20105awakenprofile.png";
}