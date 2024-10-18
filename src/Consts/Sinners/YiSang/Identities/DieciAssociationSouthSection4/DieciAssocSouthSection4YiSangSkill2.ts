import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class DieciAssocSouthSection4YiSangSkill2 implements Skill {
    readonly Name: string = "Seal Shut";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 4;
    readonly Coins: number = 3;
    readonly CoinValue: number = +3;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = -1;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("Gain ([Insight] x 6% of Max HP) Shield if this Skill is Discarded<br>"+
            "[On Use] [Discard] 1 Skill of the highest rank in all of this unit's Skill Slots<br>"+
            "[On Use] If the target has 5+ [Sinking], Coin Power +1<br>"+
            "[On Use] Gain +3 [Aggro] to this Skill Slot next turn"),
        new SkillDescriptionPart("[On Hit] Inflict [Sinking] equal to [Insight]", 2),
        new SkillDescriptionPart("[On Hit] Inflict [Sinking] equal to [Insight]", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/YiSang/DieciAssociationSouthSection4/SealShut.png";
}