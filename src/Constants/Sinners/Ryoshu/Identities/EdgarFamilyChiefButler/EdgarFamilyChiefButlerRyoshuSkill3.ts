import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class EdgarFamilyChiefButlerRyoshuSkill3 implements Skill {
    readonly Name: string = "Receiving Arts 2: S.Y.N.C.";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Wrath;
    readonly BaseValue: number = 4;
    readonly Coins: number = 2;
    readonly CoinValue: number = +7;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +5;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("If the target has [B.M.], Clash Power +1 If this unit's Speed is faster than the target's, gain +1 Coin Power for every 2 Speed difference (Max 2)<br>"+
            "[On Use] Gain +7 [Poise] Count"),
        new SkillDescriptionPart("[On Hit] Gain 5 [Poise] <br>"+
            "[On Hit] Inflict 1 [Bind] next turn<br>"+
            "[On Hit] Raise Stagger Threshold by 30% of damage dealt<br>"+
            "[On Crit] Inflict 1 [B.M.]"),
        new SkillDescriptionPart("[On Hit] If target is Staggered, deal +40% Damage on Critical Hit<br>"+
            "[On Hit] Inflict 2 [B.M.]<br>"+
            "[On Kill] Reuse Skill once on a random target with [B.M.]<br>"+
            "[On Kill] (Does not activate on Reuse. Does not activate when there are no remaining targets with [B.M.])")];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Ryoshu/EdgarFamilyChiefButler/ReceivingArts2SYNC.png";
}