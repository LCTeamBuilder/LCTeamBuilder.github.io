import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LccbAssistantManagerRyoshuSkill3 implements Skill {
    readonly Name: string = "O.O.F";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Pride;
    readonly BaseValue: number = 4;
    readonly Coins: number = 3;
    readonly CoinValue: number = +3;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] Gain 4 [Poise]<br>"+
            "Gain +1 Coin Power for every 7 [Poise] on self (Max 2)"),
        new SkillDescriptionPart("[On Crit] Gain +1 [Poise] Count", 1),
        new SkillDescriptionPart("[On Crit] Gain +1 [Poise] Count", 2),
        new SkillDescriptionPart("Spend 1 [Ammo]<br>"+
            "[On Crit] Double the application of [Tremor] and [Rupture] Potency and Count<br>"+
            "[On Hit] Inflict 4 [Tremor] and +2 [Tremor] Count<br>"+
            "[On Hit] Inflict 4 [Rupture] and +2 [Rupture] Count<br>"+
            "[On Hit] Trigger [Tremor Burst]", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Ryoshu/LCCBAssistantManager/OOF.png";
}