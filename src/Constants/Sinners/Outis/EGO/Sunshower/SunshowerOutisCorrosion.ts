import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const SunshowerOutisCorrosion: Skill = {
    Name: "Sunshower",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 29,
    Coins: 1,
    CoinValue: -7,
    AttackWeight: 2,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets the unit with the least HP<br>"+
            "[Before Attack] Gain +7 [Poise] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 6 [Sinking]<br>"+
            "[On Hit] Inflict 6 [Rupture]<br>"+
            "[On Hit] Inflict 3 [Bind] next turn<br>"+
            "[On Crit] Trigger [Tremor Burst], Inflict +3 [Sinking] Count and [Rupture] Count", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Outis/EGO/Sunshower/21104erosionprofile.png"
}