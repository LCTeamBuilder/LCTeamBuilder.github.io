import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class RCorp4thPackRhinoMeursaultSkill2 implements Skill {
    readonly Name: string = "Demolish";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Gloom;
    readonly BaseValue: number = 5;
    readonly Coins: number = 3;
    readonly CoinValue: number = +3;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("At 7+ Speed, inflict +1 [Bleed] Count with this Skill<br>"+
            "[On Use] Gain +4 [Charge] Count"),
        new SkillDescriptionPart("[On Hit] Gain +4 [Charge] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Bleed] Count", 2),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Bleed] Count", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Meursault/RCorp4thPackRhino/Demolish.png";
}