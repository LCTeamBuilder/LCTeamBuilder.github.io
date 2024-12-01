import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const DevyatAssocNorthSection3SinclairSkill2: Skill = {
    Name: "Courier Trunk - Demolition Gadget",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gluttony,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 10 [Courier Trunk - Sinclair] on self or for every 6 [Rupture] on the target (max 2)<br>"+
            "[On Use] If the target has 15+ [Rupture] and 3+ [Rupture] Count, this Skill does not inflict [Rupture] or [Rupture] Count with its On Hit effects, instead, it inflicts 2 [Defense Level Down] (once per Coin)<br>"+
            "[On Use] At 30- [Courier Trunk - Sinclair], gain 1 [Haste] next turn (once per turn)"),
        new SkillDescriptionPart("[On Hit] Gain 1 [Courier Trunk - Sinclair]<br>"+
            "- If this unit has less than 15 [Courier Trunk - Sinclair], gain 2 additional [Courier Trunk - Sinclair]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]<br>"+
            "- At 15+ [Courier Trunk - Sinclair], inflict +2 [Rupture] Count", 2),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Rupture]<br>"+
            "- At 15+ [Courier Trunk - Sinclair], inflict +2 [Rupture] Count", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Sinclair/DevyatAssocNorthSection3/CourierTrunkDemolitionGadget.png"
}