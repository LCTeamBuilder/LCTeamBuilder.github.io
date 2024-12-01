import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const TheOneWhoShallGripSinclairSkill2: Skill = {
    Name: "Amoral Enacment",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Lust,
    BaseValue: 16,
    Coins: 4,
    CoinValue: -4,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Lose 10 SP<br>"+
            "If this unit is [Fanatic], deal +10% damage"),
        new SkillDescriptionPart("[Tails Hit] Inflict 2 [Burn]<br>"+
            "[On Hit] Inflict 1 [Burn]", 2),
        new SkillDescriptionPart("[Tails Hit] Inflict 2 [Burn]<br>"+
            "[On Hit] Inflict 1 [Burn]", 3),
        new SkillDescriptionPart("[Tails Hit] Inflict +1 [Burn] Count<br>"+
            "[On Hit] Inflict 2 [Bleed]", 4)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Sinclair/TheOneWhoShallGrip/AmoralEnactment.png"
}