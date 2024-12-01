import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const MolarBoatworksFixerSinclairSkill1: Skill = {
    Name: "Fierce Assault",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 2,
    Coins: 4,
    CoinValue: +1,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("At 10+ [Tremor] Count, Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Gain +2 [Tremor] Count<br>"+
            "[On Hit] Inflict +1 [Tremor] Count", 2),
        new SkillDescriptionPart("[On Hit] Gain +2 [Tremor] Count<br>"+
            "[On Hit] Inflict +1 [Tremor] Count", 4)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Sinclair/MolarBoatworksFixer/FierceAssault.png"
}