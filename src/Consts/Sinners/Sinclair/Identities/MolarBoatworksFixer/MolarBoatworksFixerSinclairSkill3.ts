import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class MolarBoatworksFixerSinclairSkill3 implements Skill {
    readonly Name: string = "Gamble";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gluttony;
    readonly BaseValue: number = 4;
    readonly Coins: number = 2;
    readonly CoinValue: number = +6;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +1;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("Coin Power +1 for every 10 [Tremor] Count on self (Max 2)"),
        new SkillDescriptionPart("[On Hit] At 10+ [Tremor] Count, spend all [Tremor] Count to inflict target with the same amount of [Tremor] Count<br>"+
            "[On Hit] At less than 10 [Tremor] Count, gain 10 [Tremor] and Trigger [Tremor Burst] on self. Deal Blunt damage equal to [Tremor Burst] damage", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Sinclair/MolarBoatworksFixer/Gamble.png";
}