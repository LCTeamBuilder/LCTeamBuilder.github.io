import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class RCorp4thPackReindeerIshmaelSkill3 implements Skill {
    readonly Name: string = "Mind Whip";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Wrath;
    readonly BaseValue: number = 2;
    readonly Coins: number = 4;
    readonly CoinValue: number = +6;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +1;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("Spend 8 [Charge] Count<br>"+
        "If at less than 8 [Charge] Count at Combat Start, target a random unit for an unopposed attack"),
    new SkillDescriptionPart("[On Hit] Inflict 1 [Sinking]<br>"+
        "[On Hit] Raise Stagger Threshold by 40% of damage dealt", 1),
    new SkillDescriptionPart("[On Hit] Inflict 1 [Sinking]<br>"+
        "[On Hit] Raise Stagger Threshold by 30% of damage dealt", 2),
    new SkillDescriptionPart("[On Hit] Inflict 1 [Sinking]<br>"+
        "[On Hit] Raise Stagger Threshold by 20% of damage dealt", 3),
    new SkillDescriptionPart("[On Hit] Inflict 1 [Sinking]<br>"+
        "[On Hit] Raise Stagger Threshold by 10% of damage dealt", 4)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Ishmael/RCorp4thPackReindeer/MindWhip.png";
}