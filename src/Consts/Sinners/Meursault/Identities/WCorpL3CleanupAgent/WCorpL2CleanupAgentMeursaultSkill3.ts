import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class WCorpL2CleanupAgentMeursaultSkill3 implements Skill {
    readonly Name: string = "Energy Current";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Pride;
    readonly BaseValue: number = 5;
    readonly Coins: number = 4;
    readonly CoinValue: number = +2;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("If at 5+ [Charge] Count, Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Spend 2 [Charge] Count to inflict 2 [Defense Level Down]", 1),
        new SkillDescriptionPart("[On Hit] Spend 2 [Charge] Count to inflict 2 [Defense Level Down]", 2),
        new SkillDescriptionPart("[On Hit] Spend 2 [Charge] Count to inflict 2 [Defense Level Down]", 3),
        new SkillDescriptionPart("[On Hit] Spend 2 [Charge] Count to inflict 2 [Defense Level Down]", 4)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Meursault/WCorpCleanupCrew/EnergyCurrent.png";
}