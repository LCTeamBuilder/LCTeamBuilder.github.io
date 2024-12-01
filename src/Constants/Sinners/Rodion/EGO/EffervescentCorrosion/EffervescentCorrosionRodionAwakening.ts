import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const EffervescentCorrosionRodionAwakening: Skill = {
    Name: "Effervescent Corrosion",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 20,
    Coins: 1,
    CoinValue: +5,
    AttackWeight: 2,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] If main target has 50%+ hp, +1 Atk Weight,<br>"+
            "If main target has 75%+ hp, additional +1 Atk Weight"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Tremor] and +7 [Tremor] Count<br>"+
            "[Heads Hit] Inflict 2 [Bind] next turn<br>"+
            "[On Hit] Trigger [Tremor Burst]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Rodion/EGO/EffervescentCorrosion/20904awakenprofile.png"
}