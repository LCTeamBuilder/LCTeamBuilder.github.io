import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class FanghuntOfficeFixerHongLuSkill3 implements Skill {
    readonly Name: string = "A Cheerful Hunt's End";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Wrath;
    readonly BaseValue: number = 4;
    readonly Coins: number = 3;
    readonly CoinValue: number = +3;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("If the target has 6+ [Rupture], Coin Power +1<br>"+
            "[On Use] If the target has 15+ [Rupture] and 3+ [Rupture] Count: this Skill does not inflict [Rupture] or [Rupture] Count; instead, gain Coin Power +1<br>"+
            "- If the target is a &lt;Bloodfiend&gt; or a &lt;Bloodbag&gt;, gain an additonal Coin Power +1<br>"+
            "[Clash Win] Inflict +2 [Rupture] Count"),
        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Rupture]", 1),
        new SkillDescriptionPart("[Heads Hit] Inflict 2 [Rupture]", 2),
        new SkillDescriptionPart("[On Hit] If the target has 15+ [Rupture], or has less than 30% HP, Reuse this Coin (once per Skill)", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/HongLu/FanghuntOfficeFixer/ACheerfulHuntsEnd.png";
}