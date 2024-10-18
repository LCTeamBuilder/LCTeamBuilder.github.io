import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class ThePequodCaptainIshmaelSkill3 implements Skill {
    readonly Name: string = "Harpoon of Obsession";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Wrath;
    readonly BaseValue: number = 4;
    readonly Coins: number = 4;
    readonly CoinValue: number = +3;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("Deal more damage based on the target's missing HP (+0.3% damage per 1% missing HP, max +30%)<br>"+
            "Coin Power +1 for every 5 [Bleed] on target (Max 2)<br>"+
            "[After Attack] If the target is Staggered or defeated, (1+(Highest A-Reson./2)) allies with the least SP heal 10 SP, gain 2 [Poise], and gain +4 [Poise] Count. (4 times max. Max of allies that can be healed: 4)"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Bleed] Count", 2),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 3),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Burn] Count", 4)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Ishmael/ThePequodCaptain/HarpoonOfObsession.png";
}