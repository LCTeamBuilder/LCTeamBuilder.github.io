import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class BygoneDaysGregorAwakening implements Skill{
    readonly Name: string = "Bygone Days";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gloom;
    readonly BaseValue: number = 20;
    readonly Coins: number = 1;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = -3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[After Attack] Heal 15 SP to self and 2 other allies with the least SP<br>"+
            "- If the target survives this attack, consume 3 [Sinking] Count on target, then heal additional SP(to self and affected allies) equal to [Sinking] Potency on target (Max SP heal: 20)<br>"+
            "- If the target is defeated, inflict 3 [Sinking] and 1 [Curse] on 3 random enemies (For Focused Encounters, random Parts)")];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Gregor/EGO/BygoneDays/21206awakenprofile.png";
}