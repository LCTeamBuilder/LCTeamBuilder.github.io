import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LobotomyEGOSolemnLamentYiSangSkill1 implements Skill {
    readonly Name: string = "Celebration for the Departed";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill1;
    readonly Affinity: SinEnum = SinEnum.Pride;
    readonly BaseValue: number = 4;
    readonly Coins: number = 2;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("At 10+ [The Living & The Departed], Clash Power +1<br>"+
                                "If the sum of the target's [Sinking] and both [Butterfly] is 6 or higher, Coin Power +1<br>"+
                                "[Clash Win] Inflict +2 [Sinking] Count", 0),
        new SkillDescriptionPart("Consume 1 of [The Living & The Departed]<br>"+
                                "[On Hit] Inflict [Butterfly] equal to [The Living & The Departed] consumed", 1),
        new SkillDescriptionPart("Consume 1 of [The Living & The Departed]<br>"+
                                "[On Hit] Inflict [Butterfly] equal to [The Living & The Departed] consumed", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/YiSang/LobotomyEGOSolemnLament/1011001.png";
}