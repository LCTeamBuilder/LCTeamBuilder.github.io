import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LobotomyEGOSolemnLamentYiSangSkill1: Skill = {
    Name: "Celebration for the Departed",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("At 10+ [The Living & The Departed], Clash Power +1<br>"+
        "If the sum of the target's [Sinking] and both [Butterfly] is 6 or higher, Coin Power +1<br>"+
        "[Clash Win] Inflict +2 [Sinking] Count", 0),
        new SkillDescriptionPart("Consume 1 of [The Living & The Departed]<br>"+
        "[On Hit] Inflict [Butterfly] equal to [The Living & The Departed] consumed", 1),
        new SkillDescriptionPart("Consume 1 of [The Living & The Departed]<br>"+
        "[On Hit] Inflict [Butterfly] equal to [The Living & The Departed] consumed", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/YiSang/LobotomyEGOSolemnLament/1011001.png"
}