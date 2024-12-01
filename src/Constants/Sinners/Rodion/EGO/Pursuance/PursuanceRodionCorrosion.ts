import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const PursuanceRodionCorrosion: Skill = {
    Name: "Pursuance",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 34,
    Coins: 1,
    CoinValue: -12,
    AttackWeight: 3,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "[Before Attack] At 50%- HP +2 Atk Weight"),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]<br>"+
            "[On Hit] Deal 20 SP Damage<br>"+
            "[On Hit] If the target is Staggered or defeated, heal 7 SP on self", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Rodion/EGO/Pursuance/20905erosionprofile.png"
}