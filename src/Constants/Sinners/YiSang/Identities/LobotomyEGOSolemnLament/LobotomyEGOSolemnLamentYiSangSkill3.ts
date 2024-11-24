import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LobotomyEGOSolemnLamentYiSangSkill3 implements Skill {
    readonly Name: string = "Goodbye Now, A Sorrow In You";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Sloth;
    readonly BaseValue: number = 4;
    readonly Coins: number = 4;
    readonly CoinValue: number = +3;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +5;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("Base Power +1 for every 5 value of [The Living & The Departed] (max 4)<br>"+
                                "Coin Power +1 for every 6 value of the sum of the target's [Sinking] and both [Butterfly] (max 2)<br>"+
                                "[Clash Win] Inflict +3 [Sinking] Count<br>"+
                                "[After Attack] [Reload]"),
        new SkillDescriptionPart("Consume 1 of [The Living & The Departed]<br>"+
                                "[On Hit] Inflict [Butterfly] equal to [The Living & The Departed] consumed", 1),
        new SkillDescriptionPart("Consume 6 of [The Living & The Departed]<br>"+
                                "[On Hit] Inflict [Butterfly] equal to [The Living & The Departed] consumed", 2),
        new SkillDescriptionPart("Consume all of [The Living & The Departed] on self<br>"+
                                "[On Hit] Inflict [Butterfly] equal to [The Living & The Departed] consumed<br>"+
                                "[On Hit] Deal +4% more damage for every value of [The Living & The Departed] consumed by this Skill", 3),
        new SkillDescriptionPart('[On Hit] Inflict Gloom Damage equal to "All" [Butterfly] on the target<br>'+
                                '- "All" = the sum of both The Living and The Departed on the target', 4)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/YiSang/LobotomyEGOSolemnLament/1011003.png";
}