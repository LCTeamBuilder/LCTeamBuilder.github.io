import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const CapoteIshmaelAwakening: Skill = {
    Name: "Capote",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 20,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 2,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[After Attack] Apply 1 [Wrath DMG Up] to all allies next turn"), 
        new SkillDescriptionPart("[On Hit] Inflict 4 [Burn]<br>"+
            "[On Hit] Target loses 15 SP", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Ishmael/EGO/Capote/20804awakenprofile.png"
}