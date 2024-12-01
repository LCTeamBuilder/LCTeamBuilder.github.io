import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const DawnOfficeFixerSinclairSkill2: Skill = {
    Name: "Sunset Blade",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("If the target has 4+ [Burn], Clash Power +1<br>"+
            "[On Use] When in a Volatile E.G.O state, consume 5 SP<br>"+
            "[Before Attack] When in a Volatile E.G.O state, Atk Weight +1<br>"+
            "- At 45 SP, Atk Weight +2 instead<br>"+
            "[After Attack] When in a Volatile E.G.O state, consume 5 SP"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn] Count", 2),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn] Count", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Sinclair/DawnOfficeFixer/SunsetBlade1.png"
}