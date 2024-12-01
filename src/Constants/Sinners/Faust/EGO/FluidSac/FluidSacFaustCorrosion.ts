import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const FluidSacFaustCorrosion: Skill = {
    Name: "Fluid Sac",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 29,
    Coins: 1,
    CoinValue: -14,
    AttackWeight: 5,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly"),
        new SkillDescriptionPart("[On Hit] Deal 20 SP damage<br>"+
            "[Tails Hit] Deal 10 SP damage<br>"+
            "[On Hit] Inflict 2 [Attack Power Down] next turn", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Faust/EGO/FluidSac/20202erosionprofile.png"
}