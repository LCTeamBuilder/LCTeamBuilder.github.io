import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const CinqAssocSouthSection5DirectorDonQuixoteSkill3: Skill = {
    Name: "Salut!",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 6,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("At 10+ Speed, Coin Power +3<br>"+
            "[Clash Win] Deal more damage based on Clash count (+10% per Clash count, Max 100%)"),
        new SkillDescriptionPart("[On Hit] Inflict [Declared Duel] - Don Quixote", 1),
        new SkillDescriptionPart("[On Kill] Heal 15 SP", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/CinqAssociationSouthSection5Director/Salut.png"
}