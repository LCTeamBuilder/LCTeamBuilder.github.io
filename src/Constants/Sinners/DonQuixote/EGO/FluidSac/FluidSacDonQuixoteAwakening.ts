import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const FluidSacDonQuixoteAwakening: Skill = {
    Name: "Fluid Sac",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 20,
    Coins: 1,
    CoinValue: +18,
    AttackWeight: 3,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]<br>"+
            "[On Hit] Deal 25 SP damage<br>"+
            "If target is Staggered, in Low Morale, or in Panic, deal 30% of damage dealt as bonus damage<br>"+
            "[On Hit] Inflict 2 [Sinking]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/DonQuixote/EGO/FluidSac/20302awakenprofile.png"
}