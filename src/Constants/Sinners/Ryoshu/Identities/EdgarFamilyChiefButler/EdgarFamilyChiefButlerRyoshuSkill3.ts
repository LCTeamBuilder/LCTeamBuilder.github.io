import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const EdgarFamilyChiefButlerRyoshuSkill3: Skill = {
    Name: "Receiving Arts 2: S.Y.N.C.",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +7,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("If the target has [B.M.], Clash Power +1 If this unit's Speed is faster than the target's, gain +1 Coin Power for every 2 Speed difference (Max 2)<br>"+
            "[On Use] Gain +7 [Poise] Count"),
        new SkillDescriptionPart("[On Hit] Gain 5 [Poise] <br>"+
            "[On Hit] Inflict 1 [Bind] next turn<br>"+
            "[On Hit] Raise Stagger Threshold by 30% of damage dealt<br>"+
            "[On Crit] Inflict 1 [B.M.]"),
        new SkillDescriptionPart("[On Hit] If target is Staggered, deal +40% Damage on Critical Hit<br>"+
            "[On Hit] Inflict 2 [B.M.]<br>"+
            "[On Kill] Reuse Skill once on a random target with [B.M.]<br>"+
            "[On Kill] (Does not activate on Reuse. Does not activate when there are no remaining targets with [B.M.])")],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/EdgarFamilyChiefButler/ReceivingArts2SYNC.png"
}