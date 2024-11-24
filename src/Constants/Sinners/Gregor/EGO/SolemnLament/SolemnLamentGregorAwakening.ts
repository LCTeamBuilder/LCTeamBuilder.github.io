import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class SolemnLamentGregorAwakening implements Skill{
    readonly Name: string = "Solemn Lament";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gloom;
    readonly BaseValue: number = 8;
    readonly Coins: number = 3;
    readonly CoinValue: number = +2;
    readonly AttackWeight: number = 3;
    readonly SkillLevel: number = 2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("When this Skill flips Coins, each Coin flips against a random enemy among its targets.<br>"+
            "- The first Coin always targets the main target.<br>"+
            "- All 'On Hit' effects and all damage dealt by each Coin are inflicted only against the random target the Coin selected.<br>"+
            "When inflicting [Butterfly] with this Skill effects: (Chance to flip Heads)% chance to inflict The Departed. If this unit did not inflict The Departed, inflict The Living instead. (calculates every [Butterfly] stack independently)<br>"+
            "[After Attack] Heal (# of Coin 3 hits x 3) SP"),
        new SkillDescriptionPart("[On Hit] Inflict 1 random [Butterfly]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 random [Butterfly]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 1-2 random [Butterfly]<br>"+
            "[On Hit] Lose 2-6 SP<br>"+
            "[On Hit] At 0+ SP, Reuse this Coin (5 times max per Skill)", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Gregor/EGO/SolemnLament/21207awakenprofile.png";
}