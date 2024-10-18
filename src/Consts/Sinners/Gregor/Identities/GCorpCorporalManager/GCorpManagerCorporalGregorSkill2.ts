import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class GCorpManagerCorporalGregorSkill2 implements Skill {
    readonly Name: string = "Dismember";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Sloth;
    readonly BaseValue: number = 6;
    readonly Coins: number = 1;
    readonly CoinValue: number = +10;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +5;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("If target has 5+ [Rupture], deal +50% damage"),
        new SkillDescriptionPart("[On Hit] Inflict 5 [Rupture]<br>"+
            "[On Hit] Heal by 50% of damage dealt", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Gregor/GCorpManagerCorporal/Dismember.png";
}