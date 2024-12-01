import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const CapoteIshmaelCorrosion: Skill = {
    Name: "Capote",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 27,
    Coins: 1,
    CoinValue: -7,
    AttackWeight: 4,
    SkillLevel: 3,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "[After Attack] Give 1 [Wrath Fragility] and [Wrath DMG Up] to all units next turn"),
        new SkillDescriptionPart("[On Hit] Inflict 5 [Burn]<br>"+
            "[On Hit] Target loses 15 SP<br>"+
            "[On Hit] Trigger [Tremor Burst], then reduce [Tremor] Count by 2, if the burst Staggered the target, inflict 2 [Burn] on 3 random units", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Ishmael/EGO/Capote/20804erosionprofile.png"
}