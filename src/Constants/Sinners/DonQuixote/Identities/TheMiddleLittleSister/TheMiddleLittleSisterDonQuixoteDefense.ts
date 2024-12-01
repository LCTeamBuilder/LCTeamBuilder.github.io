import {
    DefenseTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const TheMiddleLittleSisterDonQuixoteDefense: Skill = {
    Name: "Multifold Retribution",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Envy,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] If at 6+ Envy A-Reson including this Skill, use 'A Just Vengeance' as Counter.<br>"+
            "Upon activating the above effect, the Skill's affinity is changed to Envy.<br>"+
            "(Leftmost 'Multifold Retribution' is activated first. Activates 2 times per turn)"),
        new SkillDescriptionPart("[On Hit] Lower user's Stagger Threshold by 5", 1),
        new SkillDescriptionPart("[On Hit] Lower user's Stagger Threshold by 5", 2)],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Counter,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/TheMiddleLittleSister/MultifoldRetribution.png"
}