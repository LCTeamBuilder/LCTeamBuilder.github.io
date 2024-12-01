import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const CinqAssocSouthSection5DirectorDonQuixoteSkill1: Skill = {
    Name: "Remise",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("At 7+ Speed, Coin Power +2<br>"+
            "[Clash Win] Gain 1 [Haste] next turn"),
        new SkillDescriptionPart("[Hit After Clash Win] Inflict 1 [Bind] next turn", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/CinqAssociationSouthSection5Director/Remise.png"
}