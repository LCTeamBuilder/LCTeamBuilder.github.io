import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LassoHongLuCorrosion: Skill = {
    Name: "Lasso",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 2,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets the unit with the highest Speed<br>"+
            "If the sum of this unit and the target's Speed is 6 or greater, Coin Power +1<br>"+
            "Coin Power +1 for every 7 [Rupture] on the target (max 2)<br>"+
            "[Before Attack] Gain 2 [Haste] next turn<br>"+
            "[Before Attack] At 4+ Gluttony or Lust Reson., gain +1 Atk Weight"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Lasso]", 1),
        new SkillDescriptionPart("On Hit] Inflict 2 [HP Healing Down] next turn<br>"+
            "[On Hit] Inflict +2 [Bleed] Count<br>"+
            "[On Hit] Inflict +2 [Rupture] Count", 2),
        new SkillDescriptionPart("[On Hit] Deal +1% more damage for every [Bleed] on the target (max 30%)<br>"+
            "[On Hit] Deal +1% more damage for every [Rupture] on the target (max 30%)", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/HongLu/EGO/Snare/20607erosionprofile.png"
}