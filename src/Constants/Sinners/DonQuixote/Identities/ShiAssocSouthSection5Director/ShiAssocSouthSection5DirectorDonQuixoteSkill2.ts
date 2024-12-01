import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ShiAssocSouthSection5DirectorDonQuixoteSkill2: Skill = {
    Name: "Dual Strike",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] At less than 50% HP, gain 4 [Haste] next turn"),
        new SkillDescriptionPart("[On Hit] Gain 2 [Poise] next turn", 1),
        new SkillDescriptionPart("[On Hit] Gain 3 [Haste] next turn", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/ShiSection5/DualStrike.png"
}