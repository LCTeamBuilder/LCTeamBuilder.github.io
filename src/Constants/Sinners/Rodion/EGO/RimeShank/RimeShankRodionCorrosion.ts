import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const RimeShankRodionCorrosion: Skill = {
    Name: "Rime Shank",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 21,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 3,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets the unit with the most HP<br>"+
            "If target's HP is above 50%, deal +30% damage"),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]<br>"+
            "[On Hit] Inflict 10 [Sinking]<br>"+
            "[On Hit] Inflict +8 [Sinking] Count", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Rodion/EGO/RimeShank/20903erosionprofile.png"
}