import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LifetimeStewSinclairAwakening implements Skill{
    readonly Name: string = "Lifetime Stew";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 18;
    readonly Coins: number = 1;
    readonly CoinValue: number = -8;
    readonly AttackWeight: number = 7;
    readonly SkillLevel: number = -2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets the unit with the least HP<br>"+
            "If the target is an ally, this deals 0 damage"),
        new SkillDescriptionPart("[Heads Hit] If the target is an ally, heal them for 10% of user's Max HP<br>"+
            "[Tails Hit] Inflict 7 [Burn]; if target is an ally, give 2 [Haste] and 1 [E.G.O Resourse Amp] next turn", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Sinclair/EGO/LifetimeStew/21003awakenprofile.png";
}