import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class EdgarFamilyChiefButlerRyoshuSkill2 implements Skill {
    readonly Name: string = "Receiving Arts 7: Capture";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Pride;
    readonly BaseValue: number = 4;
    readonly Coins: number = 2;
    readonly CoinValue: number = +6;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("If this unit's Speed is faster than the main target's, gain Clash Power +1 for every 2 Speed difference (Max 3)<br>"+
            "[Combat Start] Consume 6 [Poise] Count on self to gain +2 Atk Weight for this Skill"),
        new SkillDescriptionPart("[On Hit] Gain 3 [Poise]<br>"+
            "[On Crit] Inflict 1 [B.M.]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [B.M.]", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Ryoshu/EdgarFamilyChiefButler/ReceivingArts7Capture.png";
}