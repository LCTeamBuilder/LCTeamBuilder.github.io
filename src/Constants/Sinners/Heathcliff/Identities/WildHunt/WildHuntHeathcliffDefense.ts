import {
    DefenseTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const WildHuntHeathcliffDefense: Skill = {
    Name: "O Dullahan...!",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Clashable Counter]<br>"+
            "[Before Use] If this unit has [Dullahan] and has 15+ SP, use 'Lament, Mourn, and Despair' as Counter (once per turn)<br>"+
            "[Combat Start] If this unit does not have [Dullahan], gain 1 [Dullahan] next turn (once per turn)<br>"+
            "[On Use] Coin Power +1 for every 3 [Sinking] on the target (max 2)<br>"+
            "[Clash Win] Gain [Offense Level Up] next turn equal to (# of Clashes/3) (max 3, once per turn)<br>"+
            "[Turn End] If this unit has [Dullahan], lose [Dullahan]"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking] and +1 [Sinking] Count", 2)],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Counter,
    SkillImageDir: "assets/Icons/Skills/Sinners/Heathcliff/WildHunt/ODullahan.png"
}