import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class DieciAssocSouthSection4RodionSkill3 implements Skill {
    readonly Name: string = "Excruciating Study";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Sloth;
    readonly BaseValue: number = 4;
    readonly Coins: number = 4;
    readonly CoinValue: number = +3;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = -2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("Gain ([Insight] x 20% of Max HP) Shield if this Skill is Discarded<br>"+
            "[On Use] [Discard] 2 Skills of the lowest ranks in all of this unit's Skill Slots<br>"+
            "[On Use] This Slot gains +5 [Aggro] next turn<br>"+
            "[On Use] If target has 7+ [Sinking], gain Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict +4 [Sinking] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Sinking] Count", 4)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Rodion/DieciAssociationSouthSection4/ExcruciatingStudy.png";
}