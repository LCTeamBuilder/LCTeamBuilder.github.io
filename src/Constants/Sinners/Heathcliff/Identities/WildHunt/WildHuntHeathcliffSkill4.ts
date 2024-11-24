import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class WildHuntHeathcliffSkill4 implements Skill {
    readonly Name: string = "Lament, Mourn, and Despair";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gloom;
    readonly BaseValue: number = 31;
    readonly Coins: number = 2;
    readonly CoinValue: number = -13;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +5;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] Lose 15 SP<br>"+
            "[On Use] Base Power +1 for every 5 [Sinking] on the target (max 4)<br>"+
            "[On Use] Deal more damage the further this unit's SP value is from 45 (+0.3% more damage for every missing SP, max 21%)<br>"+
            "[On Use] Deal +10% more damage for every [Coffin] on self (max 100%)<br>"+
            "[On Use] Deal +20% more damage for every [Dullahan] on self (max 60%)<br>"+
            "[On Use] Gain 2 [Coffin]<br>"+
            "[After Attack] If this Skill attack kills the target, gain 3 [Coffin]<br>"+
            "[After Attack] At less than 0 SP, heal 10 SP. When at less than 0 SP, heal more SP the further this unit's SP value is from 0 (heal 2 additional SP for every missing SP; max 50)<br>"+
            "[Turn End] Lose [Dullahan]"),
        new SkillDescriptionPart("[On Hit] Inflict 5 [Sinking] and +2 [Sinking] Count<br>"+
            "[On Hit] Raise the target's Stagger Threshold by 30% of damage dealt", 1),
        new SkillDescriptionPart("[On Hit] Inflict Gloom Affinity damage equal to [Sinking] on target (max 30)<br>"+
            "[On Kill] Inflict ([Sinking] on killed target/2) [Sinking] on 2 random enemies (max 8)<br>"+
            "[On Kill] Heal 15 SP", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Heathcliff/WildHunt/LamentMournAndDespair.png";
}