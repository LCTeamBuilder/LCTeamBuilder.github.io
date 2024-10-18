import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class WCorpL3CleanupAgentYiSangSkill2 implements Skill {
    readonly Name: string = "Energy Cycle";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Gluttony;
    readonly BaseValue: number = 5;
    readonly Coins: number = 2;
    readonly CoinValue: number = +5;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] Gain +7 [Charge] Count<br>"+
            "At 10+ [Charge] Count, +1 Coin Power"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bind] next turn", 1),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Rupture]<br>"+
            "[On Hit] At 10+ [Charge] Count, inflict 3 [Rupture] and +2 [Rupture] Count", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/YiSang/WCorpL3CleanupAgent/EnergyCycle.png";
}