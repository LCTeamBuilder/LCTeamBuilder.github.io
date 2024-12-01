import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LobotomyEgoRedEyesPenitenceRyoshuSkill2: Skill = {
    Name: "S.H. / S.F.",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("If the sum of [Red Eyes] and [Penitence] is 15 or higher, Coin Power +1<br>"+
            "If the target has 6+ [Bleed], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Gain 4 [Penitence]", 1),
        new SkillDescriptionPart("[On Hit] Gain 3 [Red Eyes]<br>"+
            "[On Hit] Inflict 2 [Bleed]", 2),
        new SkillDescriptionPart("[On Hit] Gain [Red Eyes] equal to ([Bleed] on target/2) (max 3)<br>"+
            "[Heads Hit] At 7+ [Red Eyes], gain 1 [Haste] next turn (2 times per turn)", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/LobotomyEGORedEyesPenitence/1041002.png"
}