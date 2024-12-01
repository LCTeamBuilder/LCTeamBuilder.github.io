import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const CinqAssocSouthSection5DirectorDonQuixoteSkill2: Skill = {
    Name: "Flèche",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gloom,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain 2 [Haste] next turn<br>"+
            "[Clash Win] Deal more damage based on Clash count (+5% per Clash count, Max 50%)"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bind] next turn", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/CinqAssociationSouthSection5Director/Fleche.png"
}