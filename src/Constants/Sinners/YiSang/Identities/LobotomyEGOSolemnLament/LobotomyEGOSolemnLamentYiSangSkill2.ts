import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LobotomyEGOSolemnLamentYiSangSkill2: Skill = {
    Name: "Solemn Lament for the Living",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("At 10+ [The Living & The Departed], Clash Power +1<br>"+
        "Coin Power +1 for every 6 value of the sum of the target's [Sinking] and both [Butterfly] (max 2)<br>"+
        "[Clash Win] Inflict +1 [Sinking] Count<br>"+
        "[After Attack] Gain (highest Reson.) of [The Living & The Departed] (Max 6)<br>"+
        "- If the said Reson. was an A-Reson., gain (highest Reson. x 2) [The Living & The Departed] (max 12)<br>"+
        "- If the said Reson. was at 4+ A-Reson., [Reload] instead", 0),
        new SkillDescriptionPart("Consume 5 of [The Living & The Departed]<br>"+
        "[On Hit] Inflict [Butterfly] equal to [The Living & The Departed] consumed", 1),
        new SkillDescriptionPart("Consume 1 of [The Living & The Departed]<br>"+
        "[On Hit] Inflict [Butterfly] equal to [The Living & The Departed] consumed", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/YiSang/LobotomyEGOSolemnLament/1011002.png"
}