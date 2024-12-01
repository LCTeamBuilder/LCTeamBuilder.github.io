import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const CinqAssocWestSection3MeursaultSkill3: Skill = {
    Name: "Salut",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("If this unit's Speed is faster than the target's, gain Coin Power based on Speed difference (Coin Power +1 for every 2 Speed difference, max 3)<br>"+
            "[On Use] If the target has 15+ [Rupture] and 3+ [Rupture] Count, this Skill does not consume [Rupture] Count On Hit<br>"+
            "[Clash Win] Gain 5 [Poise]<br>"+
            "- If the target has [Focused Attack] - Meursault, gain 5 additional [Poise]"),
        new SkillDescriptionPart("[Hit after Clash Win] The final Coin deals +10% more damage", 1),
        new SkillDescriptionPart("[Hit after Clash Win] The final Coin deals +10% more damage", 2),
        new SkillDescriptionPart("Deal +20% more damage for every [Focused Attack] - Meursault on the Slot<br>"+
            "+30% Damage on Critial Hit<br>"+
            "- Deal +2% Damage on Critical Hit for every [Rupture] on the target (max 30%)<br>"+
            "[After Attack] If this Skill defeated the target or destroyed a Part, Reuse this Skill against a random target (does not activate on Reuse)", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Meursault/CinqAssocWestSection3/Salut.png"
}