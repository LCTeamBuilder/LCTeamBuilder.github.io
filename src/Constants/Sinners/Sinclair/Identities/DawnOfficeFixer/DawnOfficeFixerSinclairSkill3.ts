import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const DawnOfficeFixerSinclairSkill3: Skill = {
    Name: "Stigmatize",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +7,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 7 [Burn] on target (max 2)<br>"+
            "When in a Volatile E.G.O state, activate Blazing Strike instead<br>"+
            "[Clash Win] Heal 10 SP<br>"+
            "[Clash Lose] Lose 10 SP"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Burn]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Burn]", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Sinclair/DawnOfficeFixer/Stigmatize1.png"
}