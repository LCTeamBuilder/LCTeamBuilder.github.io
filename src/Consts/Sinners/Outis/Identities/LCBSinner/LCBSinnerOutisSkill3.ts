import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LCBSinnerOutisSkill3 implements Skill {
    readonly Name: string = "Piercing Thrust";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Pride;
    readonly BaseValue: number = 7;
    readonly Coins: number = 1;
    readonly CoinValue: number = +14;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = [new SkillDescriptionPart("If target's HP is above 50%, deal +20% damage", 1),
                                                        new SkillDescriptionPart("[On Hit] Inflict +1 [Rupture] Count", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Outis/LCBSinner/PiercingThrust.png";
}