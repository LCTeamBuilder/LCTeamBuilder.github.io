import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const CinqAssocsouthSection4OutisSkill3: Skill = {
    Name: "Balestra Fente",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 8,
    Coins: 1,
    CoinValue: +14,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("At 7+ [Poise], Final Power +4<br>"+
            "[Clash Win] Gain [Poise] based on Clash count (Max 10)"),
        new SkillDescriptionPart("[On Hit] Inflict [Declared Duel] - Outis<br>"+
            "[On Hit] Apply 2 [Haste] next turn to 2 allies with the slowest Speed<br>"+
            "[On Crit] +70% Damage on Critical Hit", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/CinqAssociationSouthSection4/BalestraFente.png"
}