import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class WildHuntHeathcliffDefense implements Skill {
    readonly Name: string = "O Dullahan...!";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Defense;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill1;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 5;
    readonly Coins: number = 2;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Clashable Counter]<br>"+
            "[Before Use] If this unit has [Dullahan] and has 15+ SP, use 'Lament, Mourn, and Despair' as Counter (once per turn)<br>"+
            "[Combat Start] If this unit does not have [Dullahan], gain 1 [Dullahan] next turn (once per turn)<br>"+
            "[On Use] Coin Power +1 for every 3 [Sinking] on the target (max 2)<br>"+
            "[Clash Win] Gain [Offense Level Up] next turn equal to (# of Clashes/3) (max 3, once per turn)<br>"+
            "[Turn End] If this unit has [Dullahan], lose [Dullahan]"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking] and +1 [Sinking] Count", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = undefined;
    readonly DefenseType?: DefenseTypeEnum | undefined = DefenseTypeEnum.Counter;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Heathcliff/WildHunt/ODullahan.png";
}