import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class DevyatAssocNorthSection3SinclairSkill2 implements Skill {
    readonly Name: string = "Courier Trunk - Demolition Gadget";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Gluttony;
    readonly BaseValue: number = 4;
    readonly Coins: number = 3;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("Coin Power +1 for every 10 [Courier Trunk - Sinclair] on self or for every 6 [Rupture] on the target (max 2)<br>"+
            "[On Use] If the target has 15+ [Rupture] and 3+ [Rupture] Count, this Skill does not inflict [Rupture] or [Rupture] Count with its On Hit effects; instead, it inflicts 2 [Defense Level Down] (once per Coin)<br>"+
            "[On Use] At 30- [Courier Trunk - Sinclair], gain 1 [Haste] next turn (once per turn)"),
        new SkillDescriptionPart("[On Hit] Gain 1 [Courier Trunk - Sinclair]<br>"+
            "- If this unit has less than 15 [Courier Trunk - Sinclair], gain 2 additional [Courier Trunk - Sinclair]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]<br>"+
            "- At 15+ [Courier Trunk - Sinclair], inflict +2 [Rupture] Count", 2),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Rupture]<br>"+
            "- At 15+ [Courier Trunk - Sinclair], inflict +2 [Rupture] Count", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Sinclair/DevyatAssocNorthSection3/CourierTrunkDemolitionGadget.png";
}