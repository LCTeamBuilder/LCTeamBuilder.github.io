import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class ZweiAssocSouthSection4FaustSkill2 implements Skill {
    readonly Name: string = "Client Protection";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Gloom;
    readonly BaseValue: number = 4;
    readonly Coins: number = 3;
    readonly CoinValue: number = +3;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = -1;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] Apply 4 [Defense Level Up] to the ally with the lowest HP percentage (3 times per turn)<br>"+
            "At 5+ [Defense Level Up] +2 Clash Power"),
        new SkillDescriptionPart("[On Hit] Gain 1 [Defense Level Up] next turn", 1),
        new SkillDescriptionPart("[On Hit] Gain 1 [Defense Level Up] next turn", 2),
        new SkillDescriptionPart("[On Hit] Gain 1 [Defense Level Up] next turn", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Faust/ZweiAssociationSouthSection4/ClientProtection.png";
}