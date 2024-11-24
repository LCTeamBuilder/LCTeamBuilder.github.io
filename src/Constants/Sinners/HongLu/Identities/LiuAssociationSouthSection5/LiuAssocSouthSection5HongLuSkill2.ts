import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LiuAssocSouthSection5HongLuSkill2 implements Skill {
    readonly Name: string = "Flowing Flame";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 6;
    readonly Coins: number = 2;
    readonly CoinValue: number = +2;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("If target has 6+ [Burn] Count, Coin Power +2"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]; if target already has [Burn], inflict 1 more", 1),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Burn] Count; at 30+ SP, inflict 1 more; at 45+ SP, inflict 2 more", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/HongLu/LiuAssociationSouthSection5/FlowingFlame.png";
}