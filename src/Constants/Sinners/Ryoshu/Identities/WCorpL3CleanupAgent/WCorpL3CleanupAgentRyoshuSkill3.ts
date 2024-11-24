import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class WCorpL3CleanupAgentRyoshuSkill3 implements Skill {
    readonly Name: string = "D.D.E.D.R.";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Envy;
    readonly BaseValue: number = 3;
    readonly Coins: number = 4;
    readonly CoinValue: number = +2;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +5;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] At 7-14 [Charge] Count<br>"+
            "Consume all [Charge] Count,<br>"+
            "And consume 3 x (15 - [Charge] Count Consumed)% HP to gain +5 Coin Power<br>"+
            "[On Use] Consume 15 [Charge] Count to gain +5 Coin Power"),
        new SkillDescriptionPart("[Heads Hit] The final Coin deals +10% damage", 1),
        new SkillDescriptionPart("[Heads Hit] The final Coin deals +10% damage", 2),
        new SkillDescriptionPart("[Heads Hit] The final Coin deals +10% damage", 3),
        new SkillDescriptionPart("[On Kill] If the skill consumed 15 [Charge] Count upon use, apply 7 [Charge Barrier] to self and 1 other ally", 4)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Ryoshu/WCorpL3CleanupAgent/DDEDR.png";
}