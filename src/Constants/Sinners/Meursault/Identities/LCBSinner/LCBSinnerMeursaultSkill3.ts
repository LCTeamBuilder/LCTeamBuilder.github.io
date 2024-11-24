import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LCBSinnerMeursaultSkill3 implements Skill {
    readonly Name: string = "Des Coups";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gloom;
    readonly BaseValue: number = 4;
    readonly Coins: number = 4;
    readonly CoinValue: number = +2;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = -3;
    readonly SkillDescription: SkillDescriptionPart[] = [new SkillDescriptionPart("[On Use] Gain 3 [Protection] next turn"),
                                                        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Tremor]", 1),
                                                        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Tremor]", 2),
                                                        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Tremor]", 3),
                                                        new SkillDescriptionPart("[On Hit] Inflict +2 [Tremor] Count", 4)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Meursault/LCBSinner/DesCoups.png";
}