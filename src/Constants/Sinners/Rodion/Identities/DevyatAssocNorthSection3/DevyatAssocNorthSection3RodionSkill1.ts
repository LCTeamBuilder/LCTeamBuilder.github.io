import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class DevyatAssocNorthSection3RodionSkill1 implements Skill {
    readonly Name: string = "Courier Trunk - Decay Knife";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill1;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 3;
    readonly Coins: number = 2;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("Coin Power +1 for every 10 [Courier Trunk - Rodion] on self or for every 6 [Rupture] on the target (max 2)<br>"+
            "[On Use] If the target has 15+ [Rupture] and 3+ [Rupture] Count: this Skill does not consume target's [Rupture] Count On Hit, but does not inflict [Rupture] with this Skill's On Hit effects"),
        new SkillDescriptionPart("[On Hit] Gain 1 [Courier Trunk - Rodion]<br>"+
            "- If this unit has less than 15 [Courier Trunk - Rodion], gain 1 additional [Courier Trunk - Rodion]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Rupture]", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Rodion/DevyatAssocNorthSection3/CourierTrunkDecayKnife.png";
}