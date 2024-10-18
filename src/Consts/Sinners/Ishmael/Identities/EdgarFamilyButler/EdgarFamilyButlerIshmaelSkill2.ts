import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class EdgarFamilyButlerIshmaelSkill2 implements Skill {
    readonly Name: string = "Housekeeping";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Gluttony;
    readonly BaseValue: number = 4;
    readonly Coins: number = 2;
    readonly CoinValue: number = +5;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +1;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("If this unit's Speed is faster than the target's, Coin Power +1<br>"+
            "[On Use] Gain +2 [Poise] Count<br>"+
            "[Clash Win] Gain 2 Poise"),
        new SkillDescriptionPart("[On Hit] Gain 1 [Haste] next turn<br>"+
            "[On Crit] Inflict 1 [Bind] next turn<br>"+
            "[On Hit] Inflict 2 [Defense Level Down]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 4 [Sinking]", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Ishmael/EdgarFamilyButler/Housekeeping.png";
}