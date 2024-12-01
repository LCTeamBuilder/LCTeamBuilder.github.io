import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const AsymmetricalInertiaHeathcliffAwakening: Skill = {
    Name: "Asymmetrical Inertia",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 8,
    Coins: 2,
    CoinValue: +8,
    AttackWeight: 3,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] Gain (4 + highest Reson.) [Tremor] Count (max 8, 20 per turn)<br>"+
            "- If the said Reson. was a Sloth Reson., trigger [Amplitude Conversion] on [Tremor] on self into [Tremor - Clockwinding]"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Tremor] Count<br>"+
            "[Heads Hit] Inflict 5 [Tremor]<br>"+
            "[Tails Hit] Inflict +3 [Tremor] Count", 1),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst], then, reduce target's [Tremor] Count by 1 <br>"+
            "- When triggering [Tremor Burst], inflict 1 [Sloth Fragility] this turn<br>"+
            "- If the highest Reson. was a 3+ Sloth Reson., inflict 1 [Sloth Fragility] next turn as well", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Heathcliff/EGO/AsymmetricalInertia/20708awakenprofile.png"
}