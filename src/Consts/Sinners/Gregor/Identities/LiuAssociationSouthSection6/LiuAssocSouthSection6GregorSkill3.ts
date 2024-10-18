import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LiuAssocSouthSection6GregorSkill3 implements Skill {
    readonly Name: string = "Perfected Palm Strike";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Sloth;
    readonly BaseValue: number = 4;
    readonly Coins: number = 4;
    readonly CoinValue: number = +2;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +5;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("If target has 6+ [Burn], deal +10% damage"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 3),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Burn]", 4)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Gregor/LiuAssocSouthSection6/PerfectedPalmStrike.png";
}