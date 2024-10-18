import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class DieciAssocSouthSection4DirectorMeursaultSkill2 implements Skill {
    readonly Name: string = "Moment of Erudition";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Sloth;
    readonly BaseValue: number = 4;
    readonly Coins: number = 2;
    readonly CoinValue: number = +6;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +1;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("Deal +5% more damage for every [Insight] on self (max 15%)<br>"+
            "[Combat Start] Apply [Erudition] equal to [Insight] on self to 2 random allies and on self (prioritizes allies with [Discard] that has the least [Erudition])<br>"+
            "[On Use] [Discard] 2 of this unit's Skills in ascending order of ranks from all of its Skill Slots<br>"+
            "[On Use] Coin Power +1 for every 6 [Sinking] on target (max 2)"),
        new SkillDescriptionPart("[On Hit] Inflict [Sinking] equal to ([Insight] x 2)", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Meursault/DieciAssocSouthSection4Director/MomentOfErudition.png";
}