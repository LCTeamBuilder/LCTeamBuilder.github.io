import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class DevyatAssocNorthSection3RodionSkill2 implements Skill {
    readonly Name: string = "Courier Trunk - Gadget Reveal";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Wrath;
    readonly BaseValue: number = 4;
    readonly Coins: number = 3;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("Deal +2% more damage for every [Courier Trunk] on self (max 40%)<br>"+
            "Coin Power +1 for every 10 [Courier Trunk] on self or for every 6 [Rupture] on the target (max 2)<br>"+
            "[On Use] If the target has 15+ [Rupture] and 3+ [Rupture] Count: this Skill does not consume target's [Rupture] Count On Hit"),
        new SkillDescriptionPart("[On Hit] Gain 1 [Courier Trunk]<br>"+
            "- If this unit has less than 15 [Courier Trunk], gain 2 additional [Courier Trunk]", 1),
        new SkillDescriptionPart("[Heads Hit] Gain 1 [Haste] next turn (once per turn)<br>"+
            "- At 15+ [Courier Trunk], gain 1 additional [Haste]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Defense Level Down] for every 5 [Courier Trunk] on self or for every 5 [Rupture] on the target (max 6, once per turn)", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Rodion/DevyatAssocNorthSection3/CourierTrunkGadgetReveal.png";
}