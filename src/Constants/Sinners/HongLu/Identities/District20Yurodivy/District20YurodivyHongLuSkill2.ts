import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class District20YurodivyHongLuSkill2 implements Skill {
    readonly Name: string = "Morph Cane Technique";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Sloth;
    readonly BaseValue: number = 4;
    readonly Coins: number = 3;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] If the target has 6+ [Tremor], Clash Power +1<br>"+
            "[On Use] Gain +3 [Tremor] Count<br>"+
            "At 5+ [Tremor] Count, +1 Coin Power"),
        new SkillDescriptionPart("[On Hit] Gain +3 [Tremor] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Tremor]", 2),
        new SkillDescriptionPart("[On Hit] If the target has 6+ [Tremor], trigger [Tremor Burst]; then, reduce target's [Tremor] Count by 1", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/HongLu/District20Yurodivy/MorphCaneTechnique.png";
}