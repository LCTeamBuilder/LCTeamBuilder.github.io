import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LiuAssocSouthSection5HongLuSkill2: Skill = {
    Name: "Flowing Flame",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Lust,
    BaseValue: 6,
    Coins: 2,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 6+ [Burn] Count, Coin Power +2"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn], if target already has [Burn], inflict 1 more", 1),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Burn] Count, at 30+ SP, inflict 1 more, at 45+ SP, inflict 2 more", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/HongLu/LiuAssociationSouthSection5/FlowingFlame.png"
}