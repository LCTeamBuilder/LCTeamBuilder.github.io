import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class EfflorescedEgospicebushYiSangSkill2 implements Skill {
    readonly Name: string = "Moment's Floral Breeze";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Sloth;
    readonly BaseValue: number = 4;
    readonly Coins: number = 3;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Combat Start] Spend 6 [Tremor] Count to turn this into an AoE skill with 3 Atk Weight<br>"+
            "If main target has 6+ [Sinking] Count, Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking] next turn", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking] next turn", 2),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking] next turn", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/YiSang/EfflorescedEGOSpicebush/MomentsFloralBreeze.png";
}