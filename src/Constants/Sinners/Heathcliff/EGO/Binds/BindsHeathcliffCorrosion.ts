import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const BindsHeathcliffCorrosion: Skill = {
    Name: "Binds",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 35,
    Coins: 1,
    CoinValue: -15,
    AttackWeight: 7,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly<br>"+
            "[After Attack] Next turn, gain 20 [Bind], 1 [Before the King], and 3 [Attack Power Up]<br>"+
            "[After Attack] Next turn, apply 20 [Bind], 3 [Attack Power Up] , and 2 [Gloom DMG Up] to 2 other allies in the order of Deployment<br>"+
            "- The number of affected allies grows by (highest Gloom or Pride Reson. - 2) (max 4)"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Bind] next turn<br>"+
            "[On Hit] Inflict 4 [Sinking]<br>"+
            "[On Hit] Inflict 4 [Tremor]<br>"+
            "[On Hit] Trigger [Tremor Burst]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Heathcliff/EGO/Binds/20706erosionprofile.png"
}