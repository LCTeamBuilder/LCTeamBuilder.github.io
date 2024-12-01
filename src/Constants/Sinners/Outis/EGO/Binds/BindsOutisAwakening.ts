import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const BindsOutisAwakening: Skill = {
    Name: "Binds",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 20,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 5,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] Gain (highest Pride or Sloth Reson. - 2) +1 Atk Weight (Max. 2)<br>"+
            "Amount of Stagger Threshold raised by [Tremor Burst] increases by 100%<br>"+
            "[After Attack] For the next 3 turns, Lose 8 SP at every Turn End"),
        new SkillDescriptionPart("[On Hit] Inflict 6 [Tremor]<br>"+
            "[On Hit] Trigger [Amplitude Conversion] into [Tremor - Fracture]<br>"+
            "[On Hit] Trigger [Tremor Burst]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Outis/EGO/Binds/21106awakenprofile.png"
}