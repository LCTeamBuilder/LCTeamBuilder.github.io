import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const RimeShankRodionAwakening: Skill = {
    Name: "Rime Shank",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 15,
    Coins: 1,
    CoinValue: +15,
    AttackWeight: 3,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("If target's HP is above 50%, deal +30% damage"),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]<br>"+
            "[On Hit] Inflict 5 [Sinking]<br>"+
            "[On Hit] Inflict +5 [Sinking] Count", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Rodion/EGO/RimeShank/20903awakenprofile.png"
}