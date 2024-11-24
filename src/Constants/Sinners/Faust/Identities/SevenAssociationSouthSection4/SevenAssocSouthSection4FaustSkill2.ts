import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class SevenAssocSouthSection4FaustSkill2 implements Skill {
    readonly Name: string = "Dissect Target";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Gloom;
    readonly BaseValue: number = 4;
    readonly Coins: number = 3;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("Coin Power +1 for every 6 [Rupture] on target (Max 2)<br>"+
            "[Clash Win] Inflict +3 [Rupture] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Rupture]", 1),
        new SkillDescriptionPart("[On Hit] If target has 6+ [Rupture], inflict [Weakness Analyzed] next turn", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Faust/SevenAssociationSouthSection4/DissectTarget.png";
}