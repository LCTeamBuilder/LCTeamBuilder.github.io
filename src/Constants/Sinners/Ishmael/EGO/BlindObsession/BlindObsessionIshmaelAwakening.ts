import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class BlindObsessionIshmaelAwakening implements Skill{
    readonly Name: string = "Blind Obsession";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Pride;
    readonly BaseValue: number = 20;
    readonly Coins: number = 1;
    readonly CoinValue: number = +15;
    readonly AttackWeight: number = 7;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[After Attack] Heal 25 SP for 4 allies with the least SP"),
        new SkillDescriptionPart("[On Hit] Gain +6 [Charge] Count<br>"+
            "[On Hit] Give +2 [Poise] count to 1 random ally<br>"+
            "[After Attack] Apply 2 [Pierce Power Up] and 2 [Damage Up] to 4 allies with the highest SP", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Ishmael/EGO/BlindObsession/20805awakenprofile.png";
}