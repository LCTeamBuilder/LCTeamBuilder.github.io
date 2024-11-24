import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class ElectricScreamingMeursaultCorrosion implements Skill{
    readonly Name: string = "Electric Screaming";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Envy;
    readonly BaseValue: number = 28;
    readonly Coins: number = 1;
    readonly CoinValue: number = -12;
    readonly AttackWeight: number = 2;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly<br>"+
            "[Before Attack] Gain +1 Atk Weight (Max. 3) equal to (highest Envy Reson. - 2)<br>"+
            "[Before Attack] At 10+ [Charge] Count, apply the effects applied from 'On Hit' twice<br>"+
            "[Before Attack] If this unit has 10+ [Charge] Count, spend up to 20 [Charge] Count; deal 3% more damage for every [Charge] Count consumed (max 60%)"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Paralyze]<br>"+
            "[On Hit] Inflict 3 [Rupture]", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Meursault/EGO/ElectricScreaming/20506erosionprofile.png";
}