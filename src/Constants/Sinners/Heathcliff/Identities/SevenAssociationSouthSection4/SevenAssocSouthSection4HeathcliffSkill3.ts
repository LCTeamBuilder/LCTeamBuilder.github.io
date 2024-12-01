import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const SevenAssocSouthSection4HeathcliffSkill3: Skill = {
    Name: "Forensics",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 6+ [Rupture], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Rupture] Count", 1),
        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Rupture]", 2),
        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Rupture]", 3),
        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Rupture]<br>"+
            "[On Kill] Inflict +2 [Rupture] Count against the enemy with the lowest [Rupture] Count")],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Heathcliff/SevenAssociationSouthSection4/Forensics.png"
}