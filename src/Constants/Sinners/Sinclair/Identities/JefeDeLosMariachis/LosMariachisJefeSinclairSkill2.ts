import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LosMariachisJefeSinclairSkill2: Skill = {
    Name: "Danza de Pasión",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +1,
    AttackWeight: 1,
    SkillLevel: -3,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 6+ [Sinking], Coin Power +2"),
        new SkillDescriptionPart("[On Hit] Gain 2 [Poise]<br>"+
            "[On Hit] Gain +1 [Poise] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking]<br>"+
            "[On Hit] Inflict +1 [Sinking] Count", 2),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking]", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Sinclair/JefeDeLosMariachis/DanzaDePasion.png"
}