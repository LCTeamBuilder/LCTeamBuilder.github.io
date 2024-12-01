import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const EfflorescedEgospicebushYiSangSkill2: Skill = {
    Name: "Moment's Floral Breeze",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] Spend 6 [Tremor] Count to turn this into an AoE skill with 3 Atk Weight<br>"+
            "If main target has 6+ [Sinking] Count, Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking] next turn", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking] next turn", 2),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking] next turn", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/YiSang/EfflorescedEGOSpicebush/MomentsFloralBreeze.png"
}