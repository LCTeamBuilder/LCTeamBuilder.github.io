import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LCBSinnerSinclairSkill3 implements Skill {
    readonly Name: string = "Ravaging Cut";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Envy;
    readonly BaseValue: number = 5;
    readonly Coins: number = 3;
    readonly CoinValue: number = +3;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = [new SkillDescriptionPart("[Clash Win] Gain 1 [Attack Power Up]"),
                                                        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Rupture]", 1),
                                                        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Rupture]", 2),
                                                        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Rupture]", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/YiSang/ThePequodFirstMate/EvadeUT4.png";
}