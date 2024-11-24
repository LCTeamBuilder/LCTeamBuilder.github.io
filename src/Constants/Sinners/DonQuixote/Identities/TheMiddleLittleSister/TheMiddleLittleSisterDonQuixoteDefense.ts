import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class TheMiddleLittleSisterDonQuixoteDefense implements Skill {
    readonly Name: string = "Multifold Retribution";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Defense;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill1;
    readonly Affinity: SinEnum = SinEnum.Envy;
    readonly BaseValue: number = 5;
    readonly Coins: number = 2;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +5
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Combat Start] If at 6+ Envy A-Reson including this Skill, use 'A Just Vengeance' as Counter.<br>"+
            "Upon activating the above effect, the Skill's affinity is changed to Envy.<br>"+
            "(Leftmost 'Multifold Retribution' is activated first. Activates 2 times per turn)"),
        new SkillDescriptionPart("[On Hit] Lower user's Stagger Threshold by 5", 1),
        new SkillDescriptionPart("[On Hit] Lower user's Stagger Threshold by 5", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = undefined;
    readonly DefenseType?: DefenseTypeEnum | undefined = DefenseTypeEnum.Counter;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/DonQuixote/TheMiddleLittleSister/MultifoldRetribution.png";
}