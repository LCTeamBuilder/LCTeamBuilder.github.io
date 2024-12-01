import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const BladeLineageSalsuFaustSkill3: Skill = {
    Name: "Red Plum Blossoms Scatter",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("Deal +3% more damage for every [Red Plum Blossom] on target<br>"+
            "Coin Power +1 for every 7 [Poise] on self (Max 3)<br>"+
            "[Clash Win] Consume half the [Poise] Count on self, then gain [Poise] equal to the [Poise] Count consumed. (Max 10)<br>"+
            "This Skill does not consume [Red Plum Blossom] On Crit"),
        new SkillDescriptionPart("[On Crit] Inflict 5 [Red Plum Blossom]<br>"+
            "[On Crit] If the target has 10 [Red Plum Blossom], inflict 1 [Slash Fragility]", 1),
        new SkillDescriptionPart("[On Crit] Inflict 5 [Red Plum Blossom]<br>"+
            "[On Crit] If the target has 10 [Red Plum Blossom], inflict 1 [Slash Fragility]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Faust/BladeLineageSalsu/RedPlumBlossomsScatter.png"
}