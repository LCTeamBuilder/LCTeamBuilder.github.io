import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const TelepoleFaustCorrosion: Skill = {
    Name: "Telepole",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 24,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 3,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly"),
        new SkillDescriptionPart("[On Hit] Inflict 5 [Paralyze]<br>"+
            "[After Attack] Gain +10 [Charge] Count<br>"+
            "[Tails Attack End] Inflict 2 [Paralyze] and 2 [Bind] on 2 random units next turn, gain +3 [Charge] Count", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Faust/EGO/Telepole/20204erosionprofile.png"
}