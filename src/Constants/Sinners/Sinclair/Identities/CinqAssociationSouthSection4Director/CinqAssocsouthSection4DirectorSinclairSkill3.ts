import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const CinqAssocsouthSection4DirectorSinclairSkill3: Skill = {
    Name: "Contre Attaque",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("If this unit's Speed is higher than the target's, Coin Power +1 for every 2 Speed difference (Max 3)<br>"+
            "[Clash Win] Consume 10 [Poise] Count. Gain [Poise] equal to [Poise] Count consumed. Against targets with [Declared Duel] - Sinclair, gain [Poise] equal to ([Poise] Count consumed x 2) instead<br>"+
            "[Clash Win] If this unit conducted a [Single Combat] with the target Slot's Attack Skill, inflict 1 [Fragile] On Hit (Twice per turn)"),
        new SkillDescriptionPart("[On Hit] Inflict [Declared Duel] - Sinclair", 1),
        new SkillDescriptionPart("[On Crit] +50% Damage on Critical Hit", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Sinclair/CinqAssocSouthSection4Director/ContreAttaque.png"
}