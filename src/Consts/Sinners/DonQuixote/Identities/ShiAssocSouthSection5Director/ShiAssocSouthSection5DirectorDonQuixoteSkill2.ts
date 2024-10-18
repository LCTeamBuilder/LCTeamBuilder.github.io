import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class ShiAssocSouthSection5DirectorDonQuixoteSkill2 implements Skill {
    readonly Name: string = "Dual Strike";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Envy;
    readonly BaseValue: number = 4;
    readonly Coins: number = 2;
    readonly CoinValue: number = +6;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] At less than 50% HP, gain 4 [Haste] next turn"),
        new SkillDescriptionPart("[On Hit] Gain 2 [Poise] next turn", 1),
        new SkillDescriptionPart("[On Hit] Gain 3 [Haste] next turn", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/DonQuixote/ShiSection5/DualStrike.png";
}