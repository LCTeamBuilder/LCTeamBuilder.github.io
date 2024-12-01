import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const GardenOfThornsGregorCorrosion: Skill = {
    Name: "Garden of Thorns",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 30,
    Coins: 1,
    CoinValue: -10,
    AttackWeight: 4,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly<br>"+
            "[Before Attack] Gain (highest Count of Reson. - 2) +1 Atk Weight (Max. 3)"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Damage Down]. Inflict 2 [Bind] next turn<br>"+
            "[On Hit] Inflict 1 'Fragility' and 1 'Power Down' for the Sin Affinity with the highest Resonance count<br>"+
            "- At 4+ Corresponding Reson., inflict 1 additional '(Corresponding Sin Affinity) Fragility'<br>"+
            "- At 5+ Corresponding Reson., inflict 1 additional '(Corresponding Sin Affinity) Power Down'<br>"+
            "- At 6+ Corresponding A-Reson, apply the above effects next turn as well", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Gregor/EGO/GardenOfThorns/21205awakenprofile.png"
}