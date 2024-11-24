import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class ZweiAssocSouthSection4GregorSkill2 implements Skill {
    readonly Name: string = "Flexible Suppression";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Gluttony;
    readonly BaseValue: number = 3;
    readonly Coins: number = 4;
    readonly CoinValue: number = +3;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] Gain +3 [Defense Level Up]<br>"+
            "[On Use] Gain +3 [Aggro] to this Skill Slot next turn<br>"+
            "At 6+ [Defense Level Up], Clash Power +1"),
        new SkillDescriptionPart("[On Hit] Gain 1 [Defense Level Up] next turn", 1),
        new SkillDescriptionPart("[On Hit] Gain 1 [Defense Level Up] next turn", 2),
        new SkillDescriptionPart("At 6+ [Defense Level Up], deal +40% damage", 4)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Gregor/ZweiAssociationSouthSection4/FlexibleSuppression.png";
}