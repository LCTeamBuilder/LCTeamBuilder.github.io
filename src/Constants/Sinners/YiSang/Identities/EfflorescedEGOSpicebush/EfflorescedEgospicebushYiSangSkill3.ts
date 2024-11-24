import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class EfflorescedEgospicebushYiSangSkill3 implements Skill {
    readonly Name: string = "Bloodsteeped Scent";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Pride;
    readonly BaseValue: number = 6;
    readonly Coins: number = 3;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +5;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Clash Lose] Lose 20 SP<br>"+
            "[On Use] Gain +6 [Tremor] Count"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Sinking] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Sinking] Count", 2),
        new SkillDescriptionPart("[On Hit] If target has 6+ [Sinking], cause [Sinking Deluge]<br>"+
            "[On Hit] If user has 10+ [Tremor] Count, deal 40% of damage dealt as bonus damage", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/YiSang/EfflorescedEGOSpicebush/BloodsteepedScent.png";
}