import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const DevyatAssocNorthSection3SinclairSkill1: Skill = {
    Name: "Courier Trunk - Decay Hammer",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 10 [Courier Trunk - Sinclair] on self or for every 6 [Rupture] on the target (max 2)<br>"+
            "[On Use] If the target has 15+ [Rupture] and 3+ [Rupture] Count, this Skill does not inflict [Rupture] Count with its On Hit effects, instead, it inflicts 2 [Defense Level Down] (once per Coin)"),
        new SkillDescriptionPart("[On Hit] Gain 1 [Courier Trunk - Sinclair]<br>"+
            "- If this unit has less than 15 [Courier Trunk - Sinclair], gain 1 additional [Courier Trunk - Sinclair]", 1),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Rupture] Count<br>"+
            "- At 15+ [Courier Trunk - Sinclair], inflict +1 additional [Rupture] Count", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Sinclair/DevyatAssocNorthSection3/CourierTrunkDecayHammer.png"
}