import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const BladeLineageSalsuDonQuixoteSkill3: Skill = {
    Name: "Fare Thee Well!",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("At 10+ [Poise] on self, +1 Coin Power<br>"+
            "[On Use] Gain 5 [Poise]"),
        new SkillDescriptionPart("[Heads Hit] The final Coin deals +10% damage", 1),
        new SkillDescriptionPart("[Heads Hit] The final Coin deals +10% damage", 2),
        new SkillDescriptionPart("+30% Damage on Critical Hit<br>"+
            "[On Crit] To 2 allies either with no [Poise] or with the least [Poise] Count, apply 2 [Poise] Count.<br>"+
            "[On Crit] If the affected ally is from the Blade Lineage, apply 2 additional [Poise] Count<br>"+
            "[After Attack] If the target is defeated, apply 1 [Slash DMG Up] to self and 1 random other ally next turn", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/BladeLineageSalsu/FareTheeWell.png"
}