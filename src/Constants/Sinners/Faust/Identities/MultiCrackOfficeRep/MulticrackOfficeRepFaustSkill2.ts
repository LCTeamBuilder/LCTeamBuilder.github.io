import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class MulticrackOfficeRepFaustSkill2 implements Skill {
    readonly Name: string = "Charge Countercurrent";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Envy;
    readonly BaseValue: number = 4;
    readonly Coins: number = 3;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +4;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] At 5-9 [Charge] Count, consume 2(10 - current [Charge] Count)% HP to raise [Charge] Count to 10<br>"+
            "[On Use] Consume 10 [Charge] Count to gain Coin Power +2"),
        new SkillDescriptionPart("At 3+ Reson. including this Skill, consume all [Charge] Count on self and deal +([Charge] + 4)% more damage for every [Charge] Count consumed by this Skill (max 180%)", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Faust/MultiCrackOfficeRep/ChargeCountercurrent.png";
}