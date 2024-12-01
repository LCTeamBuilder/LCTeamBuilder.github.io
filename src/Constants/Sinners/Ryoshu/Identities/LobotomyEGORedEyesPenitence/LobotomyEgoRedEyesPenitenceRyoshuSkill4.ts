import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LobotomyEgoRedEyesPenitenceRyoshuSkill4: Skill = {
    Name: "Serious Skullbuster",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Consume all [Red Eyes] and [Penitence] on self<br>"+
            "- Coin Power +1 for every 5 [Red Eyes] consumed (max 4)<br>"+
            "- Base Power +1 for every 5 [Penitence] consumed (max 4)<br>"+
            "[After Attack] Lose 15 SP and gain Only Ashes Remain next turn"),
        new SkillDescriptionPart("[On Hit] Inflict [Bleed] equal to ([Red Eyes] consumed - 15) on target (max 5)", 1),
        new SkillDescriptionPart("Deal +4% more damage for every [Red Eyes] and [Penitence] consumed (max 160%)<br>"+
            "[On Hit] Heal self and 1 ally with the lowest HP percentage by ([Penitence] consumed)% of each unit's Max HP<br>"+
            "- Heal 1 additional ally for every 2 highest Reson. (max 2 more allies)<br>"+
            "[On Hit] Heal self and 1 ally with the least SP by ([Penitence] consumed - 5) SP<br>"+
            "- Heal 1 additional ally for every 2 highest Reson. (max 2 more allies)<br>"+
            "[On Hit] Inflict 3 [Bind] and 2 [Attack Power Down] next turn (once per turn)", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/LobotomyEGORedEyesPenitence/1041005.png"
}