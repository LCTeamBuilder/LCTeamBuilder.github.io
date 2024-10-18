import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class CinqAssocWestSection3MeursaultSkill3 implements Skill {
    readonly Name: string = "Salut";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gloom;
    readonly BaseValue: number = 5;
    readonly Coins: number = 3;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("If this unit's Speed is faster than the target's, gain Coin Power based on Speed difference (Coin Power +1 for every 2 Speed difference; max 3)<br>"+
            "[On Use] If the target has 15+ [Rupture] and 3+ [Rupture] Count, this Skill does not consume [Rupture] Count On Hit<br>"+
            "[Clash Win] Gain 5 [Poise]<br>"+
            "- If the target has [Focused Attack] - Meursault, gain 5 additional [Poise]"),
        new SkillDescriptionPart("[Hit after Clash Win] The final Coin deals +10% more damage", 1),
        new SkillDescriptionPart("[Hit after Clash Win] The final Coin deals +10% more damage", 2),
        new SkillDescriptionPart("Deal +20% more damage for every [Focused Attack] - Meursault on the Slot<br>"+
            "+30% Damage on Critial Hit<br>"+
            "- Deal +2% Damage on Critical Hit for every [Rupture] on the target (max 30%)<br>"+
            "[After Attack] If this Skill defeated the target or destroyed a Part, Reuse this Skill against a random target (does not activate on Reuse)", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Meursault/CinqAssocWestSection3/Salut.png";
}