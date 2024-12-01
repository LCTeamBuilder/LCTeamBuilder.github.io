import {
    DefenseTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ThePriestOfLaManchalandGregorDefense: Skill = {
    Name: "Faded Patience",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 15,
    Coins: 1,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] At 40%+ HP, gain 5 [Bleed] and activate [Bleed] up to 3 times on self (once per turn, lose [Bleed] Count equal to the number of times it was activated)<br>"+
            "[Combat Start] At less than 40% HP, consume up to 20 [Bloodfeast] and heal the same value as HP (once per turn)<br>"+
            "[Combat Start] Gain 3 [Ailing Heart] (once per turn)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/ThePriestOfLaManchaland/FadedPatienceUT4.png"
}