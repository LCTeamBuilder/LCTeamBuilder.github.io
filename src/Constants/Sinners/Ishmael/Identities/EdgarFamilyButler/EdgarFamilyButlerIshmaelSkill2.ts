import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const EdgarFamilyButlerIshmaelSkill2: Skill = {
    Name: "Housekeeping",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gluttony,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("If this unit's Speed is faster than the target's, Coin Power +1<br>"+
            "[On Use] Gain +2 [Poise] Count<br>"+
            "[Clash Win] Gain 2 Poise"),
        new SkillDescriptionPart("[On Hit] Gain 1 [Haste] next turn<br>"+
            "[On Crit] Inflict 1 [Bind] next turn<br>"+
            "[On Hit] Inflict 2 [Defense Level Down]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 4 [Sinking]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ishmael/EdgarFamilyButler/Housekeeping.png"
}