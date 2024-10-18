import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class MolarBoatworksFixerIshmaelSkill3 implements Skill {
    readonly Name: string = "Risky Judgement";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gloom;
    readonly BaseValue: number = 3;
    readonly Coins: number = 3;
    readonly CoinValue: number = +5;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +5;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("Coin Power +1 for every 5 [Tremor] Count on self (Max 2)<br>"+
            "If target has 6+ [Sinking], deal +40% damage"),
        new SkillDescriptionPart("[On Hit] Inflict +5 [Sinking] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Sinking]<br>"+
            "[On Hit] Spend 5 [Tremor] Count to inflict 1 [Fragile] next turn", 2),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Sinking]<br>"+
            "[On Hit] Spend 5 [Tremor] Count to inflict 2 [Fragile] next turn", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Ishmael/MolarBoatworksFixer/RiskyJudgement.png";
}