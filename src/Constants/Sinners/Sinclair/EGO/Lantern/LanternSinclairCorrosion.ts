import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LanternSinclairCorrosion: Skill = {
    Name: "Lantern",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 30,
    Coins: 1,
    CoinValue: -12,
    AttackWeight: 3,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Target the unit with the most HP<br>"+
            "[Before Attack] At 50%- HP, +2 Atk Weight"),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Rupture] Count<br>"+
            "[On Hit] Inflict 5 [Defense Level Down]<br>"+
            "[On Hit] Heal self by 50% of damage dealt")],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Sinclair/EGO/Lantern/21004erosionprofile.png"
}