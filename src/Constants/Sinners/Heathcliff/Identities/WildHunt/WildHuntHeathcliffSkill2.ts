import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class WildHuntHeathcliffSkill2 implements Skill {
    readonly Name: string = "Memorial Procession";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Envy;
    readonly BaseValue: number = 5;
    readonly Coins: number = 3;
    readonly CoinValue: number = +3;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] Coin Power +1 for every 5 [Sinking] on the target (max 2)<br>"+
            "[On Use] Atk Weight +1 for every 4 [Coffin] on self (max 2)<br>"+
            "[On Use] If this unit has [Dullahan], Atk Weight +1<br>"+
            "[After Attack] If this unit has [Dullahan], lose 10 SP"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Sinking]<br>"+
            "[On Hit] Inflict 2 [Impending Ruin] next turn", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Heathcliff/WildHunt/MemorialProcession.png";
}