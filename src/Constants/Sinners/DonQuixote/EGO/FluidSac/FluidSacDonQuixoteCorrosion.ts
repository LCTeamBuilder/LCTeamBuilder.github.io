import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const FluidSacDonQuixoteCorrosion: Skill = {
    Name: "Fluid Sac",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 42,
    Coins: 1,
    CoinValue: -25,
    AttackWeight: 3,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
        "Targets randomly"),
        new SkillDescriptionPart("[On Hit] Inflict 10 [Tremor]<br>"+
        "[On Hit] Inflict 10 [Sinking]<br>"+
        "If target is NOT Staggered, in Low Morale, nor in Panic, deal 50% of damage dealt as bonus damage", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/DonQuixote/EGO/FluidSac/20302erosionprofile.png"
}