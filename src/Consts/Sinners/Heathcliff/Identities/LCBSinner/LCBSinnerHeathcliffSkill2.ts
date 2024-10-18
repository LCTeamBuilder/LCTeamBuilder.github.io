import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LCBSinnerHeathcliffSkill2 implements Skill {
    readonly Name: string = "Smackdown";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Wrath;
    readonly BaseValue: number = 4;
    readonly Coins: number = 2;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +0;
    readonly SkillDescription: SkillDescriptionPart[] = [new SkillDescriptionPart("[On Use] Gain 1 [Attack Power Up] and [Damage Up] next turn"),
                                                        new SkillDescriptionPart("[Heads Hit] Inflict 2 [Tremor]", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Heathcliff/LCBSinner/Smackdown.png"; 
}