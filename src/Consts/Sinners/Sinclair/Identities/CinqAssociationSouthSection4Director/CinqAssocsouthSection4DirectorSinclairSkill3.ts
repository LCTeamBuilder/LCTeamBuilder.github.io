import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class CinqAssocsouthSection4DirectorSinclairSkill3 implements Skill {
    readonly Name: string = "Contre Attaque";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 5;
    readonly Coins: number = 3;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("If this unit's Speed is higher than the target's, Coin Power +1 for every 2 Speed difference (Max 3)<br>"+
            "[Clash Win] Consume 10 [Poise] Count. Gain [Poise] equal to [Poise] Count consumed. Against targets with [Declared Duel] - Sinclair, gain [Poise] equal to ([Poise] Count consumed x 2) instead<br>"+
            "[Clash Win] If this unit conducted a [Single Combat] with the target Slot's Attack Skill, inflict 1 [Fragile] On Hit (Twice per turn)"),
        new SkillDescriptionPart("[On Hit] Inflict [Declared Duel] - Sinclair", 1),
        new SkillDescriptionPart("[On Crit] +50% Damage on Critical Hit", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Sinclair/CinqAssociationSouthSection4Director/ContreAttaque.png";
}