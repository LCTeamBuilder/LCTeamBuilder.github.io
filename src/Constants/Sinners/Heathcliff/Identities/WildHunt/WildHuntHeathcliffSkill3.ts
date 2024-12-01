import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const WildHuntHeathcliffSkill3: Skill = {
    Name: "Requiem",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 6,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[Clash Win] Heal 10 SP<br>"+
            "[Before Use] If this unit has [Dullahan], activate 'Lament, Mourn, and Despair' instead<br>"+
            "[On Use] Coin Power +1 for every 3 [Sinking] on the target (max 4)<br>"+
            "[On Use] Deal +12% more damage for every [Coffin] on self (max 120%)<br>"+
            "[On Use] Gain 1 [Coffin]<br>"+
            "[After Attack] If this Skill attack kills the target, gain 2 [Coffin]"),
        new SkillDescriptionPart("[On Hit] Inflict +4 [Sinking] Count<br>"+
            "[On Hit] If the target has [Impending Ruin], inflict +2 [Sinking] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Sinking]<br>"+
            "[On Kill] Inflict ([Sinking] on killed target/2) [Sinking] on 2 random enemies (max 5)", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Heathcliff/WildHunt/Requiem.png"
}