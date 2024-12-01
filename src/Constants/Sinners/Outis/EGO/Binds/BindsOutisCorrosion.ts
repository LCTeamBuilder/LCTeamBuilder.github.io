import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const BindsOutisCorrosion: Skill = {
    Name: "Binds",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 34,
    Coins: 1,
    CoinValue: -14,
    AttackWeight: 5,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly<br>"+
            "[Before Attack] Gain (highest Pride or Sloth Reson. - 2) +1 Atk Weight (Max. 2)<br>"+
            "Amount of Stagger Threshold raised by [Tremor Burst] increases by 50%"),
        new SkillDescriptionPart("[On Hit] Inflict 6 [Tremor]<br>"+
            "[On Hit] Inflict +3 [Tremor] Count<br>"+
            "[On Hit] Trigger [Amplitude Conversion] into [Tremor - Fracture]<br>"+
            "[Tails Hit] Trigger [Tremor Burst]<br>"+
            "[Tails Hit] Trigger [Tremor Burst]<br>"+
            "[On Hit] Trigger [Tremor Burst]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Outis/EGO/Binds/21106erosionprofile.png"
}