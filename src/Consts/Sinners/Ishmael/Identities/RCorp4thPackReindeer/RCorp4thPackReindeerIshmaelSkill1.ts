import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class RCorp4thPackReindeerIshmaelSkill1 implements Skill {
    readonly Name: string = "Mind Strike";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill1;
    readonly Affinity: SinEnum = SinEnum.Gloom;
    readonly BaseValue: number = 4;
    readonly Coins: number = 2;
    readonly CoinValue: number = +5;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +1;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] Gain +2 [Charge] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Sinking]<br>"+
            "[On Hit] Gain +2 [Charge] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Sinking]<br>"+
            "[On Hit] Gain +2 [Charge] Count", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Ishmael/RCorp4thPackReindeer/MindStrike.png";
}