import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class TCorpClass2CollectionStaffRodionSkill2 implements Skill {
    readonly Name: string = "T Corp. Martial Suppression";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Wrath;
    readonly BaseValue: number = 4;
    readonly Coins: number = 2;
    readonly CoinValue: number = +5;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +1;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("Deal +5% more damage for every [Bind] on target (max 15%)<br>"+
            "[On Use] Gain +2 [Tremor] Count<br>"+
            "[On Use] Clash Power +1 for every 6 [Tremor] on target (max 2)"),
        new SkillDescriptionPart("[On Hit] Gain +2 [Tremor] Count<br>"+
            "[Hit After Clash Win] Inflict +3 [Tremor] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bind] next turn<br>"+
            "[On Hit] If the target has 6+ [Tremor], inflict 1 [Bind] next turn", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Rodion/TCorpClass2CollectionStaff/TCorpMartialSuppression.png";
}