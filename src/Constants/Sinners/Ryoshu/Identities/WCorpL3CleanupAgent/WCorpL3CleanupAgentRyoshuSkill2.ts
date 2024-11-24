import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class WCorpL3CleanupAgentRyoshuSkill2 implements Skill {
    readonly Name: string = "Leap";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Pride;
    readonly BaseValue: number = 2;
    readonly Coins: number = 3;
    readonly CoinValue: number = +5;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +5;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] Gain +7 [Charge] Count<br>"+
            "At 10+ [Charge] Count, gain +1 Coin Power<br>"+
            "At 15+ [Charge] Count, gain additional +1 Coin Power"),
        new SkillDescriptionPart("[On Hit] At 10+ [Charge] Count, inflict 2 [Slash Fragility]", 1),
        new SkillDescriptionPart("[On Hit] If target's HP is below 30%, deal +30% damage<br>"+
            "[On Kill] Gain 3 [Haste] next turn", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Ryoshu/WCorpL3CleanupAgent/Leap.png";
}