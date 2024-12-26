import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ChristmasNightmareGregorAwakening: Skill = {
    Name: "Christmas Nightmare",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 12,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 5,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("If the target has less than 0 SP, deal +1% more damage for every SP value below 0 (max 45%)<br>"+
            "[After Attack] At max HP, heal 15 SP at Turn End and gain 1 [Attack Power Up] next turn"),
        new SkillDescriptionPart(" [On Hit] Inflict 5 [Tremor]<br>"+
            "[On Hit] Trigger [Tremor Burst]; then, reduce target's [Tremor] Count by 1", 1),
        new SkillDescriptionPart("[On Hit] Heal (3 + highest Reson.)% of the missing HP on self (max 30% per Skill)<br>"+
            "[On Hit] Inflict 4 [Sinking]<br>"+
            "[On Hit] If the target is in Staggered, Low Morale, or Panic states, inflict 1 [Attack Power Down] and Fragility against the Affinity of the highest Reson. next turn", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Gregor/EGO/ChristmasNightmare/21208awakenprofile.png"
}