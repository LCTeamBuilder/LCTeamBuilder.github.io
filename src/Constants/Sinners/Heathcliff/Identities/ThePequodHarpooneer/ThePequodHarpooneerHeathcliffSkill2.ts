import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ThePequodHarpooneerHeathcliffSkill2: Skill = {
    Name: "Snagharpoon",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +5 [Aggro] to this Skill Slot next turn<br>"+
            "[On Use] Gain 1 [Poise] for every 3 [Bleed] on target (Max 10)"),
        new SkillDescriptionPart("[On Crit] Inflict [Bleed] Count equal to 1/3 of [Bleed] Potency on target (Max 10)", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Heathcliff/ThePequodHarpooneer/Snagharpoon.png"
}