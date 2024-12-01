import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const EffervescentCorrosionRodionCorrosion: Skill = {
    Name: "Effervescent Corrosion",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 27,
    Coins: 1,
    CoinValue: -10,
    AttackWeight: 2,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly<br>"+
            "[Before Attack] if main target has 50%+ hp, +1 Atk Weight,<br>"+
            "If main target has 75%+ hp, additional +1 Atk Weight"),
        new SkillDescriptionPart("[On Hit] Heal 30% of damage dealt<br>"+
            "[On Hit] Inflict 5 [Defense Level Down]<br>"+
            "[On Hit] Trigger [Tremor Burst]", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Rodion/EGO/EffervescentCorrosion/20904erosionprofile.png"
}