import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const BlindObsessionIshmaelCorrosion: Skill = {
    Name: "Blind Obsession",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 35,
    Coins: 1,
    CoinValue: -10,
    AttackWeight: 7,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly"),
        new SkillDescriptionPart("[On Hit] Heal 3% of Max HP on self<br>"+
            "[On Hit] Gain 1 [Poise] and +1 [Poise] Count<br>"+
            "[On Hit] Inflict 3 [Pride Fragility] this turn and next turn<br>"+
            "[After Attack] Apply 2 [Damage Up] this turn and next turn to 4 allies with the least SP", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Ishmael/EGO/BlindObsession/20805erosionprofile.png"
}