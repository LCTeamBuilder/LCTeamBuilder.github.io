import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const MolarBoatworksFixerSinclairSkill3: Skill = {
    Name: "Gamble",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 10 [Tremor] Count on self (Max 2)"),
        new SkillDescriptionPart("[On Hit] At 10+ [Tremor] Count, spend all [Tremor] Count to inflict target with the same amount of [Tremor] Count<br>"+
            "[On Hit] At less than 10 [Tremor] Count, gain 10 [Tremor] and Trigger [Tremor Burst] on self. Deal Blunt damage equal to [Tremor Burst] damage", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Sinclair/MolarBoatworksFixer/Gamble.png"
}