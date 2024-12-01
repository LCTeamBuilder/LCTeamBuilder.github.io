import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const SunshowerOutisAwakening: Skill = {
    Name: "Sunshower",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 26,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 2,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] Gain +7 [Poise] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 6 [Sinking]<br>"+
            "[On Hit] Inflict 3 [Bind] next turn<br>"+
            "[On Crit] Trigger [Tremor Burst], Inflict +3 [Sinking] Count", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Outis/EGO/Sunshower/21104awakenprofile.png"
}