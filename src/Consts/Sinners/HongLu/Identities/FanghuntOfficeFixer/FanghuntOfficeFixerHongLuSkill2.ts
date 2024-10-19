import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class FanghuntOfficeFixerHongLuSkill2 implements Skill {
    readonly Name: string = "Bonecrusher";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Pride;
    readonly BaseValue: number = 4;
    readonly Coins: number = 2;
    readonly CoinValue: number = +5;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("If the target has 6+ [Rupture], Coin Power +1<br>"+
            "[On Use] If the target has 15+ [Rupture] and 3+ [Rupture] Count: this Skill does not inflict [Rupture] or [Rupture] Count; instead, gain Coin Power +1<br>"+
            "- If the target is a &lt;Bloodfiend&gt; or a &lt;Bloodbag&gt;, gain an additonal Coin Power +1<br>"+
            "[Clash Win] Inflict +1 [Rupture] Count"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Rupture] Count<br>"+
            "[Heads Hit] Inflict +1 [Rupture] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]<br>"+
            "[On Hit] Inflict 2 [HP Healing Down] next turn", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/HongLu/FanghuntOfficeFixer/Bonecrusher.png";
}