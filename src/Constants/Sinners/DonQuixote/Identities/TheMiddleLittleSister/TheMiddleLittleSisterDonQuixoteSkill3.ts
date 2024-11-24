import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class TheMiddleLittleSisterDonQuixoteSkill3 implements Skill {
    readonly Name: string = "A Just Vengeance";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Pride;
    readonly BaseValue: number = 4;
    readonly Coins: number = 4;
    readonly CoinValue: number = +3;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Combat Start] This Skill gains 1 'Offense Level' by (highest A-Reson./2) (Max 6)<br>"+
            "If the Highest A-Reson is Envy A-Reson., boost 'Offense Level' gained by the above effect by 50% (rounded down)<br>"+
            "Gain double the 'Offense Level' from the above effects in Focused Encounters with 7 or fewer Participant Limits."),
        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Bleed]", 1),
        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Bleed]", 2),
        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Bleed]", 3),
        new SkillDescriptionPart("[After Attack] If target is defeated, 1 ally with the least SP heals 6 SP", 4)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/DonQuixote/TheMiddleLittleSister/AJustVengeance1.png";
}