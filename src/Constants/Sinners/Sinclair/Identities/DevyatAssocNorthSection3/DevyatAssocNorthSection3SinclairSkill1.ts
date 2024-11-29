import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class DevyatAssocNorthSection3SinclairSkill1 implements Skill {
    readonly Name: string = "Courier Trunk - Decay Hammer";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill1;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 3;
    readonly Coins: number = 2;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("Coin Power +1 for every 10 [Courier Trunk - Sinclair] on self or for every 6 [Rupture] on the target (max 2)<br>"+
            "[On Use] If the target has 15+ [Rupture] and 3+ [Rupture] Count, this Skill does not inflict [Rupture] Count with its On Hit effects; instead, it inflicts 2 [Defense Level Down] (once per Coin)"),
        new SkillDescriptionPart("[On Hit] Gain 1 [Courier Trunk - Sinclair]<br>"+
            "- If this unit has less than 15 [Courier Trunk - Sinclair], gain 1 additional [Courier Trunk - Sinclair]", 1),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Rupture] Count<br>"+
            "- At 15+ [Courier Trunk - Sinclair], inflict +1 additional [Rupture] Count", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Sinclair/DevyatAssocNorthSection3/CourierTrunkDecayHammer.png";
}