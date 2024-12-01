import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const MolarBoatworksFixerIshmaelSkill3: Skill = {
    Name: "Risky Judgement",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 3,
    Coins: 3,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 5 [Tremor] Count on self (Max 2)<br>"+
            "If target has 6+ [Sinking], deal +40% damage"),
        new SkillDescriptionPart("[On Hit] Inflict +5 [Sinking] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Sinking]<br>"+
            "[On Hit] Spend 5 [Tremor] Count to inflict 1 [Fragile] next turn", 2),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Sinking]<br>"+
            "[On Hit] Spend 5 [Tremor] Count to inflict 2 [Fragile] next turn", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ishmael/MolarBoatworksFixer/RiskyJudgement.png"
}