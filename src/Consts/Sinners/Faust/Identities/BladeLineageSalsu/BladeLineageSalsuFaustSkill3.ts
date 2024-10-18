import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class BladeLineageSalsuFaustSkill3 implements Skill {
    readonly Name: string = "Red Plum Blossoms Scatter";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gloom;
    readonly BaseValue: number = 5;
    readonly Coins: number = 2;
    readonly CoinValue: number = +6;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("Deal +3% more damage for every [Red Plum Blossom] on target<br>"+
            "Coin Power +1 for every 7 [Poise] on self (Max 3)<br>"+
            "[Clash Win] Consume half the [Poise] Count on self, then gain [Poise] equal to the [Poise] Count consumed. (Max 10)<br>"+
            "This Skill does not consume [Red Plum Blossom] On Crit"),
        new SkillDescriptionPart("[On Crit] Inflict 5 [Red Plum Blossom]<br>"+
            "[On Crit] If the target has 10 [Red Plum Blossom], inflict 1 [Slash Fragility]", 1),
        new SkillDescriptionPart("[On Crit] Inflict 5 [Red Plum Blossom]<br>"+
            "[On Crit] If the target has 10 [Red Plum Blossom], inflict 1 [Slash Fragility]", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Faust/BladeLineageSalsu/RedPlumBlossomsScatter.png";
}