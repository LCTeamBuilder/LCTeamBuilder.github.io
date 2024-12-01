import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const WildHuntHeathcliffSkill4: Skill = {
    Name: "Lament, Mourn, and Despair",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 31,
    Coins: 2,
    CoinValue: -13,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Lose 15 SP<br>"+
            "[On Use] Base Power +1 for every 5 [Sinking] on the target (max 4)<br>"+
            "[On Use] Deal more damage the further this unit's SP value is from 45 (+0.3% more damage for every missing SP, max 21%)<br>"+
            "[On Use] Deal +10% more damage for every [Coffin] on self (max 100%)<br>"+
            "[On Use] Deal +20% more damage for every [Dullahan] on self (max 60%)<br>"+
            "[On Use] Gain 2 [Coffin]<br>"+
            "[After Attack] If this Skill attack kills the target, gain 3 [Coffin]<br>"+
            "[After Attack] At less than 0 SP, heal 10 SP. When at less than 0 SP, heal more SP the further this unit's SP value is from 0 (heal 2 additional SP for every missing SP, max 50)<br>"+
            "[Turn End] Lose [Dullahan]"),
        new SkillDescriptionPart("[On Hit] Inflict 5 [Sinking] and +2 [Sinking] Count<br>"+
            "[On Hit] Raise the target's Stagger Threshold by 30% of damage dealt", 1),
        new SkillDescriptionPart("[On Hit] Inflict Gloom Affinity damage equal to [Sinking] on target (max 30)<br>"+
            "[On Kill] Inflict ([Sinking] on killed target/2) [Sinking] on 2 random enemies (max 8)<br>"+
            "[On Kill] Heal 15 SP", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Heathcliff/WildHunt/LamentMournAndDespair.png"
}