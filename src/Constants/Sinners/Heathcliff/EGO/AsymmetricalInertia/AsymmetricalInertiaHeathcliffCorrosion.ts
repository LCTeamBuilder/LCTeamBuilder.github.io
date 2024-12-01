import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const AsymmetricalInertiaHeathcliffCorrosion: Skill = {
    Name: "Asymmetrical Inertia",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 28,
    Coins: 2,
    CoinValue: -8,
    AttackWeight: 3,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "[Before Attack] Gain (4 + highest Reson.) [Tremor] Count (max 10, 20 per turn) <br>"+
            "- If the said Reson. was a Sloth Reson., trigger [Amplitude Conversion] on [Tremor] on self into [Tremor - Clockwinding]"),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Tremor] Count <br>"+
            "[Heads Hit] Inflict 6 [Tremor]<br>"+
            "[Tails Hit] Inflict +4 [Tremor] Count", 1),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst], then, reduce target's [Tremor] Count by 1 <br>"+
            "[On Hit] Trigger [Tremor Burst], then, reduce target's [Tremor] Count by 1<br>"+
            "- When triggering [Tremor Burst], inflict 2 [Sloth Fragility] this turn<br>"+
            "- If the highest Reson. was a 3+ Sloth Reson., inflict 2 [Sloth Fragility] next turn as well", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Heathcliff/EGO/AsymmetricalInertia/20708erosionprofile.png"
}