import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class BlindObsessionRyoshuCorrosion implements Skill{
    readonly Name: string = "Blind Obsession";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Pride;
    readonly BaseValue: number = 30;
    readonly Coins: number = 1;
    readonly CoinValue: number = -12;
    readonly AttackWeight: number = 3;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly<br>"+
            "[Before Attack] Gain 4 [Poise]. Consume 2 [Charge] Count to gain 1 Poise (Max 10)<br>"+
            "[After Attack] Gain +4 [Charge] Count for every unit defeated by this Skill"),
        new SkillDescriptionPart("[On Hit] Gain +1 [Poise] Count<br>"+
            "[On Crit] At 10+ [Poise], gain +30% Critical Damage", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Ryoshu/EGO/BlindObsession/20406erosionprofile.png";
}