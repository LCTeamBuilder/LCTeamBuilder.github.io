import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const SolemnLamentGregorAwakening: Skill = {
    Name: "Solemn Lament",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 8,
    Coins: 3,
    CoinValue: +2,
    AttackWeight: 3,
    SkillLevel: 2,
    SkillDescription: 
        [new SkillDescriptionPart("When this Skill flips Coins, each Coin flips against a random enemy among its targets.<br>"+
            "- The first Coin always targets the main target.<br>"+
            "- All 'On Hit' effects and all damage dealt by each Coin are inflicted only against the random target the Coin selected.<br>"+
            "When inflicting [Butterfly] with this Skill effects: (Chance to flip Heads)% chance to inflict The Departed. If this unit did not inflict The Departed, inflict The Living instead. (calculates every [Butterfly] stack independently)<br>"+
            "[After Attack] Heal (# of Coin 3 hits x 3) SP"),
        new SkillDescriptionPart("[On Hit] Inflict 1 random [Butterfly]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 random [Butterfly]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 1-2 random [Butterfly]<br>"+
            "[On Hit] Lose 2-6 SP<br>"+
            "[On Hit] At 0+ SP, Reuse this Coin (5 times max per Skill)", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Gregor/EGO/SolemnLament/21207awakenprofile.png"
}