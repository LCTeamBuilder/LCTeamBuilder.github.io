import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const BindsHeathcliffAwakening: Skill = {
    Name: "Binds",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 18,
    Coins: 1,
    CoinValue: +15,
    AttackWeight: 7,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[After Attack] For 3 turns, lose 10 SP at Turn End<br>"+
            "[After Attack] Next turn, gain 20 [Bind], 1 [Before the King in Binds], and 2 [Attack Power Up]"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bind] next turn<br>"+
            "[On Hit] Inflict 4 [Sinking]<br>"+
            "[On Hit] Inflict 4 [Tremor]<br>"+
            "[On Hit] Trigger [Tremor Burst]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Heathcliff/EGO/Binds/20706awakenprofile.png"
}