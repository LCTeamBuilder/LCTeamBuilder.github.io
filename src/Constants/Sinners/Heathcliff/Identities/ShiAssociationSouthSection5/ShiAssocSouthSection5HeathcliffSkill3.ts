import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ShiAssocSouthSection5HeathcliffSkill3: Skill = {
    Name: "Flashing Strike",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("At 10+ [Poise] Count, Skill Power +2<br>"+
            "At less than 50% HP, +1 Atk Weight."),
        new SkillDescriptionPart("[Before Attack] Lose 5 HP, +50% Skill Damage for this Coin", 1),
        new SkillDescriptionPart("[Before Attack] Lose 5 HP, +50% Skill Damage for this Coin", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Heathcliff/ShiAssociationSouthSection5/FlashingStrike.png"
}