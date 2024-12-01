import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const DeadRabbitsBossMeursaultSkill3: Skill = {
    Name: "Relentless",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] If target has 3+ [Rupture], Clash Power +1<br>"+
            "[On Use] If target has 6+ [Rupture], Coin Power +1<br>"+
            "[Clash Win] Inflict 2 [Offense Level Down]"), 
        new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]<br>"+
            "[On Hit] If target has 4+ [Rupture], inflict 2 [Offense Level Down] next turn", 4)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Meursault/DeadRabbitsBoss/Relentless.png"
}