import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ChristmasNightmareIshmaelCorrosion: Skill = {
    Name: "Christmas Nightmare",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 18,
    Coins: 3,
    CoinValue: -5,
    AttackWeight: 5,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "If the main target is in Staggered, Low Morale, or Panic states, Base Power +2<br>"+
            "[Before Attack] Gain (highest Reson. + 5) [Tremor] Count (max 10)<br>"+
            "[Before Attack] Heal 10 HP<br>"+
            "[After Attack] Heal 5 SP for every enemy in Staggered, Low Morale, or Panic states"),
        new SkillDescriptionPart("[On Hit] Inflict +5 [Tremor] Count<br>"+
            "[On Hit] If the target isn't in Staggered, Low Morale, or Panic states, inflict 5 [Sinking] and +2 [Sinking] Count", 1),
        new SkillDescriptionPart("[On Hit] If the target isn't in Staggered, Low Morale, or Panic states, trigger [Tremor Burst]; then, reduce the target's [Tremor] Count by 1<br>"+
            "[On Hit] Trigger [Tremor Burst]; then, reduce target's [Tremor] Count by 1", 2),
        new SkillDescriptionPart("[On Hit] If the target isn't in Staggered, Low Morale, or Panic states, trigger [Tremor Burst]; then, reduce the target's [Tremor] Count by 1<br>"+
            "[On Hit] Trigger [Tremor Burst]; then, reduce target's [Tremor] Count by 1", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Ishmael/EGO/ChristmasNightmare/20808erosionprofile.png"
}