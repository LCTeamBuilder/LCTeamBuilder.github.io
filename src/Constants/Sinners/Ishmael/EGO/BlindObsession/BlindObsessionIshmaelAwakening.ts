import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const BlindObsessionIshmaelAwakening: Skill = {
    Name: "Blind Obsession",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 20,
    Coins: 1,
    CoinValue: +15,
    AttackWeight: 7,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[After Attack] Heal 25 SP for 4 allies with the least SP"),
        new SkillDescriptionPart("[On Hit] Gain +6 [Charge] Count<br>"+
            "[On Hit] Give +2 [Poise] count to 1 random ally<br>"+
            "[After Attack] Apply 2 [Pierce Power Up] and 2 [Damage Up] to 4 allies with the highest SP", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Ishmael/EGO/BlindObsession/20805awakenprofile.png"
}