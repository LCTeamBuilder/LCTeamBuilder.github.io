import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LiuAssocSouthSection5HongLuSkill3: Skill = {
    Name: "Crimson Blaze Fist",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 6+ [Burn] Count, Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn], if target already has [Burn], inflict +1 [Burn] Count", 1),
        new SkillDescriptionPart("[Heads Hit] Heal 6 SP<br>"+
            "[On Hit] If target has 6+ [Burn] Count, raise Stagger Threshold by 30% of damage dealt", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/HongLu/LiuAssociationSouthSection5/CrimsonBlazeFist.png"
}