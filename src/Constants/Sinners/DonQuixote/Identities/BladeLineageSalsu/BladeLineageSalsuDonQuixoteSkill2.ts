import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const BladeLineageSalsuDonQuixoteSkill2: Skill = {
    Name: "Blade Arc",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("At 7+ [Poise] on self, Coin Power +1<br>"+
            "[On Use] Gain +2 [Poise] Count"),
        new SkillDescriptionPart("[On Hit] Gain 2 [Poise]", 1),
        new SkillDescriptionPart("[On Crit] To 1 ally either with no [Poise] or with the least [Poise] Potency, apply 2 [Poise]<br>"+
            "If the affected ally is from the Blade Lineage, apply 2 additional [Poise]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/BladeLineageSalsu/BladeArc.png"
}