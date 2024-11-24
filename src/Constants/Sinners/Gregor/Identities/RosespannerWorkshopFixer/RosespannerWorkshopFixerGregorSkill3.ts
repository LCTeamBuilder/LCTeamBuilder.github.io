import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class RosespannerWorkshopFixerGregorSkill3 implements Skill {
    readonly Name: string = "Let's Grind 'Em";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gloom;
    readonly BaseValue: number = 4;
    readonly Coins: number = 3;
    readonly CoinValue: number = +3;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +1;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("If target has 5+ [Tremor] Count, Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst] then reduce [Tremor] Count by 2;<br>"+
            "Spend up to 4 [Charge] Count to inflict [Rupture] Count equal to [Charge] Count spent", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]<br>"+
            "[On Hit] If target is Staggered, deal +10% damage<br>"+
            "[On Hit] If target has 5+ [Tremor] Count, inflict 3 [Rupture]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]<br>"+
            "[On Hit] If target is Staggered, deal +10% damage<br>"+
            "[On Hit] If target has 5+ [Tremor] Count, inflict 3 [Rupture]", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Gregor/RosespannerWorkshopFixer/LetsGrindEm.png";
}