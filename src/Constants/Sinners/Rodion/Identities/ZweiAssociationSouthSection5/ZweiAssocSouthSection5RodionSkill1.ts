import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ZweiAssocSouthSection5RodionSkill1: Skill = {
    Name: "Careful Obstruction",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: -2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +2 [Aggro] to this Skill Slot next turn<br>"+
            "[Clash Lose] Gain +2 [Poise] Count"),
        new SkillDescriptionPart("[On Hit] Gain +1 [Poise] Count", 1),
        new SkillDescriptionPart("[On Hit] Gain +1 [Poise] Count", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/ZweiAssociationSouthSection5/CarefulObstruction.png"
}