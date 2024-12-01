import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const EdgarFamilyButlerIshmaelSkill1: Skill = {
    Name: "Sweeping Redirection",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("If this unit's Speed is faster than the target's, Coin Power +1<br>"+
            "[On Use] Gain +2 [Poise] Count"),
        new SkillDescriptionPart("[On Hit] Gain 2 [Poise]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking]<br>"+
            "[On Crit] Gain 1 [Haste] next turn", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ishmael/EdgarFamilyButler/SweepingRedirection.png"
}