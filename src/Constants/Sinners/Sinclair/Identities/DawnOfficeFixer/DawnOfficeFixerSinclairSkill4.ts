import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const DawnOfficeFixerSinclairSkill4: Skill = {
    Name: "Blazing Strike",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 13,
    Coins: 1,
    CoinValue: +15,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +2 for every 4 (sum of [Burn] Potency on all enemies) (max 8)<br>"+
            "[Clash Win] Heal 10 SP<br>"+
            "[Clash Lose] Lose 30 SP<br>"+
            "Deal +10% more damage for every Wrath Reson. (max 60%)<br>"+
            "If at 4+ highest Wrath A-Reson., deal +20% more damage for every Wrath Reson. instead (max 120%)<br>"+
            "[After Attack] Lose 15 SP"),
        new SkillDescriptionPart("Deal +4% damage for every 1 [Burn] on target (max 120%)<br>"+
            "[On Hit] If the target has 10+ [Burn], inflict 2 [Burn] against (number of highest Reson.) random enemies<br>"+
            "- If the above Reson. was a Wrath Reson., inflict +1 [Burn] Count as well<br>"+
            "[On Hit] Inflict 10 [Burn]<br>"+
            "[On Kill] Randomly inflict ([Burn] Potency of the defeated target between all enemies (max 10. In Focused Encounters, between all Parts)", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Sinclair/DawnOfficeFixer/Stigmatize2.png"
}