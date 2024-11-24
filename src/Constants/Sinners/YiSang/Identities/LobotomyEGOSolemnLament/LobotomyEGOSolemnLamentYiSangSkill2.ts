import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LobotomyEGOSolemnLamentYiSangSkill2 implements Skill {
    readonly Name: string = "Solemn Lament for the Living";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Gloom;
    readonly BaseValue: number = 4;
    readonly Coins: number = 2;
    readonly CoinValue: number = +6;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("At 10+ [The Living & The Departed], Clash Power +1<br>"+
                                "Coin Power +1 for every 6 value of the sum of the target's [Sinking] and both [Butterfly] (max 2)<br>"+
                                "[Clash Win] Inflict +1 [Sinking] Count<br>"+
                                "[After Attack] Gain (highest Reson.) of [The Living & The Departed] (Max 6)<br>"+
                                "- If the said Reson. was an A-Reson., gain (highest Reson. x 2) [The Living & The Departed] (max 12)<br>"+
                                "- If the said Reson. was at 4+ A-Reson., [Reload] instead", 0),
        new SkillDescriptionPart("Consume 5 of [The Living & The Departed]<br>"+
                                "[On Hit] Inflict [Butterfly] equal to [The Living & The Departed] consumed", 1),
        new SkillDescriptionPart("Consume 1 of [The Living & The Departed]<br>"+
                                "[On Hit] Inflict [Butterfly] equal to [The Living & The Departed] consumed", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/YiSang/LobotomyEGOSolemnLament/1011002.png";
}