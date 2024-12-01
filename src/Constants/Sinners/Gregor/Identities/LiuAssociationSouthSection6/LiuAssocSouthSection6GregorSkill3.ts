import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LiuAssocSouthSection6GregorSkill3: Skill = {
    Name: "Perfected Palm Strike",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 6+ [Burn], deal +10% damage"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 3),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Burn]", 4)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/LiuAssocSouthSection6/PerfectedPalmStrike.png"
}