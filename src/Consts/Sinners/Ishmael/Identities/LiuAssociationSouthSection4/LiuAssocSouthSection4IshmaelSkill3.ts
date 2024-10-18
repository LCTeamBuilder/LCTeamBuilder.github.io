import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LiuAssocSouthSection4IshmaelSkill3 implements Skill {
    readonly Name: string = "Inner Gate Elbow Strike";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Envy;
    readonly BaseValue: number = 3;
    readonly Coins: number = 4;
    readonly CoinValue: number = +3;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("If target has 6+ [Burn] and [Burn] Count, deal +50% damage"),
            new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 1),
            new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 2),
            new SkillDescriptionPart("[On Hit] Inflict +2 [Burn] Count", 3),
            new SkillDescriptionPart("[After Attack] If target is Staggered or defeated, gain 1 [Plus Coin Boost] next turn", 4)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Ishmael/LiuAssociationSouthSection4/InnerGateElbowStrike.png";
}