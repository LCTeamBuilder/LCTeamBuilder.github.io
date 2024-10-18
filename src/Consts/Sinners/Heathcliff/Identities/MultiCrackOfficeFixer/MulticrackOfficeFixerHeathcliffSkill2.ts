import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class MulticrackOfficeFixerHeathcliffSkill2 implements Skill {
    readonly Name: string = "Photoelectric Mark";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Envy;
    readonly BaseValue: number = 4;
    readonly Coins: number = 3;
    readonly CoinValue: number = +3;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +1;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] At 5-9 [Charge] Count, consume 2(10 - current [Charge] Count)% HP to raise [Charge] Count to 10<br>"+
            "[On Use] Consume 10 [Charge] Count to gain Coin Power +2"),
        new SkillDescriptionPart("[On Hit] If this unit consumed [Charge] Count, inflict 2 [Defense Level Down]", 1),
        new SkillDescriptionPart("[On Hit] If this unit consumed [Charge] Count, inflict 2 [Defense Level Down]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 2 [HP Healing Down]<br>"+
            "[On Hit] Inflict [Photoelectricity] equal to [Charge] (max 3)", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Heathcliff/MultiCrackOfficeFixer/PhotoelectricMark.png";
}