import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class WCorpL3CleanupCaptainOutisSkill3 implements Skill {
    readonly Name: string = "Rip Dimension";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gloom;
    readonly BaseValue: number = 4;
    readonly Coins: number = 4;
    readonly CoinValue: number = +3;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Combat Start] To self and (highest Reson.) allies with [Charge]: apply [Load] equal to [Charge] on self<br>"+
            "(Max 5 other allies)<br>"+
            "[On Use] At 2+ [Charge] and 7-14 [Charge] Count, consume all [Charge] Count on self to gain Coin Power +2<br>"+
            "[On Use] Consume 15 [Charge] Count to gain Coin Power +2"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]", 3),
        new SkillDescriptionPart("[On Hit] If this Skill consumed 15 [Charge] Count on use, inflict 3 [Rupture]<br>"+
            "[On Hit] Gain (5 - [Charge]) [Charge] Count (Min 0)", 4)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Outis/WCorpL3CleanupCaptain/RipDimension.png";
}