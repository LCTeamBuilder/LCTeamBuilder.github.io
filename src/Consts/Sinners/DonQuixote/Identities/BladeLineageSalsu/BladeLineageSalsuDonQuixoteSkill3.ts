import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class BladeLineageSalsuDonQuixoteSkill3 implements Skill {
    readonly Name: string = "Fare Thee Well!";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Sloth;
    readonly BaseValue: number = 4;
    readonly Coins: number = 3;
    readonly CoinValue: number = +3;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +4;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("At 10+ [Poise] on self, +1 Coin Power<br>"+
            "[On Use] Gain 5 [Poise]"),
        new SkillDescriptionPart("[Heads Hit] The final Coin deals +10% damage", 1),
        new SkillDescriptionPart("[Heads Hit] The final Coin deals +10% damage", 2),
        new SkillDescriptionPart("+30% Damage on Critical Hit<br>"+
            "[On Crit] To 2 allies either with no [Poise] or with the least [Poise] Count, apply 2 [Poise] Count.<br>"+
            "[On Crit] If the affected ally is from the Blade Lineage, apply 2 additional [Poise] Count<br>"+
            "[After Attack] If the target is defeated, apply 1 [Slash DMG Up] to self and 1 random other ally next turn", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/DonQuixote/BladeLineageSalsu/FareTheeWell.png";
}