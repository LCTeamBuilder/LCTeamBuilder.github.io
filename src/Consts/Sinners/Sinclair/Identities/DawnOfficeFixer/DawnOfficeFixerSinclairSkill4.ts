import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class DawnOfficeFixerSinclairSkill4 implements Skill {
    readonly Name: string = "Blazing Strike";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Wrath;
    readonly BaseValue: number = 13;
    readonly Coins: number = 1;
    readonly CoinValue: number = +15;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +5;
    readonly SkillDescription: SkillDescriptionPart[] = 
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
            "[On Kill] Randomly inflict ([Burn] Potency of the defeated target between all enemies (max 10. In Focused Encounters, between all Parts)", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Sinclair/DawnOfficeFixer/Stigmatize2.png";
}