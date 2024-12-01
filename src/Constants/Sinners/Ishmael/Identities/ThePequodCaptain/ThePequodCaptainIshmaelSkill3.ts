import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ThePequodCaptainIshmaelSkill3: Skill = {
    Name: "Harpoon of Obsession",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Deal more damage based on the target's missing HP (+0.3% damage per 1% missing HP, max +30%)<br>"+
            "Coin Power +1 for every 5 [Bleed] on target (Max 2)<br>"+
            "[After Attack] If the target is Staggered or defeated, (1+(Highest A-Reson./2)) allies with the least SP heal 10 SP, gain 2 [Poise], and gain +4 [Poise] Count. (4 times max. Max of allies that can be healed: 4)"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Bleed] Count", 2),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 3),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Burn] Count", 4)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ishmael/ThePequodCaptain/HarpoonOfObsession.png"
}