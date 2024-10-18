import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class DieciAssocSouthSection4RodionSkill2 implements Skill {
    readonly Name: string = "Weight of Knowledge";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Envy;
    readonly BaseValue: number = 3;
    readonly Coins: number = 4;
    readonly CoinValue: number = +3;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = -1;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("Gain ([Insight] x 10% of Max HP) Shield if this Skill is Discarded<br>"+
            "[On Use] [Discard] the Skill of the lowest rank in all of this unit's Skill Slots<br>"+
            "[On Use] This Slot gains +5 [Aggro] next turn<br>"+
            "[On Use] If target has 5+ [Sinking], gain Clash Power +2"),
        new SkillDescriptionPart("[On Hit] Inflict 5 Sinking", 4)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Rodion/DieciAssociationSouthSection4/WeightOfKnowledge.png";
}