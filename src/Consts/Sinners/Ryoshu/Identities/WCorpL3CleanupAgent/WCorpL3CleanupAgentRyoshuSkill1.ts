import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class WCorpL3CleanupAgentRyoshuSkill1 implements Skill {
    readonly Name: string = "E.C.";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill1;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 3;
    readonly Coins: number = 3;
    readonly CoinValue: number = +2;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +5;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("At 10+ [Charge] Count, deal +10% damage<br>"+
            "At 15+ [Charge] Count, deal additional +10% damage"), 
        new SkillDescriptionPart("[On Hit] Gain +2 [Charge] Count", 1),
        new SkillDescriptionPart("[On Hit] Gain +2 [Charge] Count", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Ryoshu/WCorpL3CleanupAgent/EC.png";
}