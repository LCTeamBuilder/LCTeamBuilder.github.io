import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LccbAssistantManagerIshmaelSkill2: Skill = {
    Name: "Quake Rounds",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict 1 [Attack Power Down]", 1),
        new SkillDescriptionPart("Spend 1 [Ammo]<br>"+
            "[On Hit] Inflict 8 [Tremor], Inflict +2 [Tremor] Count", 2),
        new SkillDescriptionPart("Spend 1 [Ammo]<br>"+
            "[On Hit] Inflict 8 [Tremor], Inflict +2 [Tremor] Count", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ishmael/LCCBAssistantManager/QuakeRounds.png"
}