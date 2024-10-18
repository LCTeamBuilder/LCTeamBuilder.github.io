import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class TwinhookPiratesFirstMateGregorSkill3 implements Skill {
    readonly Name: string = "Foregone Conclusion";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gloom;
    readonly BaseValue: number = 5;
    readonly Coins: number = 2;
    readonly CoinValue: number = +6;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +5;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] Gain 1 [Poise] for every 3 [Bleed] on target (Max 10)<br>"+
            "Gain Coin Power +1 for every 7 [Poise] on self (Max 3)"),
        new SkillDescriptionPart("[On Crit] Inflict 2 [Bleed] Count", 1),
        new SkillDescriptionPart("Spend 1 [Ammo]<br>"+
            "+100% Damage on Critical Hit<br>"+
            "[On Kill] Gain 1 [Plus Coin Boost] next turn", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Gregor/TwinhookPiratesFirstMate/ForegoneConclusion.png";
}