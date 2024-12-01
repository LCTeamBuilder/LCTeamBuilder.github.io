import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const BlindObsessionRyoshuAwakening: Skill = {
    Name: "Blind Obsession",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 18,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 3,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] Gain 4 [Poise]<br>"+
            "[After Attack] Gain 2 [Poise] for every unit defeated by this Skill"),
        new SkillDescriptionPart("[On Hit] Gain +2 [Charge] count<br>"+
            "[On Crit] Gain +2 [Charge] count", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Ryoshu/EGO/BlindObsession/20406awakenprofile.png"
}