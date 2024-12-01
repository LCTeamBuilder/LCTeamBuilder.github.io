import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ZweiAssocSouthSection6SinclairSkill3: Skill = {
    Name: "Strong Strike",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 7,
    Coins: 1,
    CoinValue: +13,
    AttackWeight: 1,
    SkillLevel: -2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Give 1 [Protection] to the ally with the least HP next turn<br>"+
            "[On Use] Gain +10 [Aggro] to this Skill Slot next turn"),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]<br>"+
            "[On Hit] If target has 5+ [Tremor] upon [Tremor Burst], gain 2 [Protection] next turn<br>"+
            "[On Hit] Inflict 2 [Blunt Fragility]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Sinclair/ZweiAssociationSouthSection6/StrongStrike.png"
}