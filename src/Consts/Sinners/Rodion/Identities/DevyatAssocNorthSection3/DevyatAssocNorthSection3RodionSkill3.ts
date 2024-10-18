import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class DevyatAssocNorthSection3RodionSkill3 implements Skill {
    readonly Name: string = "I Trust Ya, Polu!";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gluttony;
    readonly BaseValue: number = 5;
    readonly Coins: number = 3;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +4;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("Deal +4% more damage for every [Courier Trunk] on self (max 80%)<br>"+
            "Coin Power +1 for every 10 [Courier Trunk] on self or for every 6 [Rupture] on the target (max 2)<br>"+
            "[On Use] If the target has 15+ [Rupture] and 3+ [Rupture] Count: this Skill does not inflict [Rupture] Count with its On Hit effects; instead, Reuse its last Coin"),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Rupture] Count (once per turn)<br>"+
            "- Inflict +1 more [Rupture] Count for every 10 [Courier Trunk] (max 2)", 2),
        new SkillDescriptionPart(" [On Hit] At 15+ [Courier Trunk], deal +25% more damage<br>"+
            "[After Attack] If the target is Staggered or defeated, gain 2 [Haste] next turn (once per turn)", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Rodion/DevyatAssocNorthSection3/ITrustYaPolu.png";
}