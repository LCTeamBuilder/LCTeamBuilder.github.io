import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const TheMiddleLittleSisterDonQuixoteSkill3: Skill = {
    Name: "A Just Vengeance",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] This Skill gains 1 'Offense Level' by (highest A-Reson./2) (Max 6)<br>"+
            "If the Highest A-Reson is Envy A-Reson., boost 'Offense Level' gained by the above effect by 50% (rounded down)<br>"+
            "Gain double the 'Offense Level' from the above effects in Focused Encounters with 7 or fewer Participant Limits."),
        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Bleed]", 1),
        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Bleed]", 2),
        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Bleed]", 3),
        new SkillDescriptionPart("[After Attack] If target is defeated, 1 ally with the least SP heals 6 SP", 4)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/TheMiddleLittleSister/AJustVengeance1.png"
}