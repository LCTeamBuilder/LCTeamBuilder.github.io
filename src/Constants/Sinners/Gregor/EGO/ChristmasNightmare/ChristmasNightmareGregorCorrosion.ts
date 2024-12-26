import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ChristmasNightmareGregorCorrosion: Skill = {
    Name: "Christmas Nightmare",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 22,
    Coins: 2,
    CoinValue: -6,
    AttackWeight: 5,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly<br>"+
            "If the target has less than 0 SP, deal more damage for every SP value below 0 (max 45%)<br>"+
            "[Before Attack] Heal 10 HP on self<br>"+
            "[After Attack] At max HP, heal 20 SP at Turn End and gain 1 [Attack Power Up] next turn"),
        new SkillDescriptionPart("[On Hit] Inflict 5 [Tremor]<br>"+
            "[On Hit] Trigger [Tremor Burst]; then, reduce target's [Tremor] Count by 1", 1),
        new SkillDescriptionPart("[On Hit] Heal (3 + highest Reson.)% of the missing HP on self (max 30% per Skill)<br>"+
            "[On Hit] Inflict 4 [Sinking]<br>"+
            "[On Hit] If the target is in Staggered, Low Morale, or Panic states, inflict 1 [Attack Power Down] and 2 [Fragility] against the Affinity of the highest Reson. next turn", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Gregor/EGO/ChristmasNightmare/21208erosionprofile.png"
}