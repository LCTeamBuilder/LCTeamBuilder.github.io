import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class DieciAssocSouthSection4DirectorMeursaultSkill1 implements Skill {
    readonly Name: string = "Studious Dedication";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill1;
    readonly Affinity: SinEnum = SinEnum.Gluttony;
    readonly BaseValue: number = 3;
    readonly Coins: number = 2;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("Gain (Insight x 5% of Max HP) Shield if this Skill is Discarded<br>"+
            "[On Use] [Discard] 1 Skill of the lowest rank in all of this unit's Skill Slots<br>"+
            "[On Use] Gain Clash Power +([Insight] - 1) (max 2)<br>"+
            "[Clash Win] Gain 2 [Erudition] (once per turn)"),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Sinking] Count", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Meursault/DieciAssocSouthSection4Director/StudiousDedication.png";
}