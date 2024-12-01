import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const YaSunyataTadRupamHeathcliffCorrosion: Skill = {
    Name: "Ya Śūnyatā Tad Rūpam",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 33,
    Coins: 1,
    CoinValue: -15,
    AttackWeight: 3,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly"),
        new SkillDescriptionPart("[Before Attack] At -15 or lower SP, +2 Atk Weight<br>"+
            "[On Hit] Inflict 3 [Defense Level Down] to 1 random other ally<br>"+
            "[On Hit] Gain 2 [Defense Power Up] next turn.<br>"+
            "[On Hit] Gain 1 [Damage Up] next turn.<br>"+
            "[Tails Hit] Heal 4 SP on self<br>"+
            "[Tails Hit] Inflict 1 [Fragile]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Heathcliff/EGO/YaSunyataTadRupam/20704erosionprofile.png"
}