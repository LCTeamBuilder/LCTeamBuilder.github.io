import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class DevyatAssocNorthSection3SinclairSkill3 implements Skill {
    readonly Name: string = "Poludnitsa… I trust you!";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Wrath;
    readonly BaseValue: number = 5;
    readonly Coins: number = 3;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +5;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("Coin Power +1 for every 10 [Courier Trunk - Sinclair] on self or for every 6 [Rupture] on the target (max 2) <br>"+
            "[On Use] If the target has 15+ [Rupture] and 3+ [Rupture] Count, this Skill does not inflict [Rupture] or [Rupture] Count with its On Hit effects; instead, the final Coin gains +4 Coin Power<br>"+
            "On Use] If the target has 15+ [Rupture], deal +4% more damage for every [Courier Trunk - Sinclair] (max 120%)"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Rupture] Count<br>"+
            "- Inflict +1 additional [Rupture] Count for every 10 [Courier Trunk - Sinclair] (max 3)", 1),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Rupture]<br>"+
            "- Inflict +1 additional [Rupture] for every 8 [Courier Trunk - Sinclair] (max 4)", 2),
        new SkillDescriptionPart("[On Hit] If this Skill's effect to raise its final Coin Power did not activate, gain 2 [Haste] next turn", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Sinclair/DevyatAssocNorthSection3/PoludnitsaITrustYou.png";
}