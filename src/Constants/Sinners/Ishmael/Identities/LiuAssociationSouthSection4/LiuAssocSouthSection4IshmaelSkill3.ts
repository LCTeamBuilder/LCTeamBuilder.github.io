import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LiuAssocSouthSection4IshmaelSkill3: Skill = {
    Name: "Inner Gate Elbow Strike",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 3,
    Coins: 4,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 6+ [Burn] and [Burn] Count, deal +50% damage"),
            new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 1),
            new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 2),
            new SkillDescriptionPart("[On Hit] Inflict +2 [Burn] Count", 3),
            new SkillDescriptionPart("[After Attack] If target is Staggered or defeated, gain 1 [Plus Coin Boost] next turn", 4)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ishmael/LiuAssociationSouthSection4/InnerGateElbowStrike.png"
}