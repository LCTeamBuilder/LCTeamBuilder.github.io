import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ChristmasNightmareIshmaelAwakening: Skill = {
    Name: "Christmas Nightmare",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 12,
    Coins: 2,
    CoinValue: +5,
    AttackWeight: 3,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("If the target has less than 0 SP, deal +1% more damage for every SP value below 0 (max 45%)<br>"+
            "[Before Attack] Gain (highest Reson. + 5) [Tremor] Count (max 10)<br>"+
            "[After Attack] If there are any targets in Staggered, Low Morale, or Panic states, heal 10 SP"), 
        new SkillDescriptionPart("[On Hit] Inflict +5 [Tremor] Count<br>"+
            "[On Hit] If the target isn't in Staggered, Low Morale, or Panic states, inflict 5 [Sinking]<br>"+
            "[On Hit] If the target isn't in Staggered, Low Morale, or Panic states, trigger [Tremor Burst] twice; then, reduce the target's [Tremor] Count by 2", 1), 
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]; then, reduce target's [Tremor] Count by 1", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Ishmael/EGO/ChristmasNightmare/20808awakenprofile.png"
}