import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const CinqAssocsouthSection4DirectorSinclairSkill2: Skill = {
    Name: "Engagement",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("If this unit's Speed is higher than the target's, Coin Power +1 for every 2 Speed difference (Max 2)<br>"+
            "[Clash Win] Gain +2 [Poise] Count"),
        new SkillDescriptionPart("[On Hit] Gain +1 [Poise] Count", 1),
        new SkillDescriptionPart("[On Hit] Gain +1 [Poise] Count", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Sinclair/CinqAssocSouthSection4Director/Engagement.png"
}