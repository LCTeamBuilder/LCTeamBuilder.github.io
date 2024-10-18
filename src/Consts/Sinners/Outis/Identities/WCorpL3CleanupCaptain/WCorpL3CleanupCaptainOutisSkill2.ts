import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class WCorpL3CleanupCaptainOutisSkill2 implements Skill {
    readonly Name: string = "Charged Leap";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Envy;
    readonly BaseValue: number = 5;
    readonly Coins: number = 2;
    readonly CoinValue: number = +6;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] Consume 6 [Charge] Count on self to gain Coin Power +1<br>"+
            "- If this unit consumed [Charge] Count, apply ([Charge] + 2) [Charge] Barrier to self and 2 other allies with the least [Charge] Count.<br>"+
            "(Max 8 [Charge Barrier] per ally. Activates 2 times per turn max)<br>"+
            "[On Use] Gain +2 [Charge] Count"),
        new SkillDescriptionPart("[On Hit] Gain +2 [Charge] Count", 1),
        new SkillDescriptionPart("[On Hit] Gain +2 [Charge] Count<br>"+
            "[On Hit] Inflict 1 [Bind] next turn<br>"+
            "[On Hit] If this Skill consumed [Charge] Count on use, inflict 2 [Bind] next turn", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Outis/WCorpL3CleanupCaptain/ChargedLeap.png";
}