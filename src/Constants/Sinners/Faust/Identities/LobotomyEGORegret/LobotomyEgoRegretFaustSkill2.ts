import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LobotomyEgoRegretFaustSkill2 implements Skill {
    readonly Name: string = "Metallic Ringing";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Pride;
    readonly BaseValue: number = 4;
    readonly Coins: number = 3;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Combat Start] Spend 5 [Tremor] Count and gain +1 Atk Weight for this Skill<br>"+
            "[On Use] Gain +4 [Tremor] Count"),
        new SkillDescriptionPart("[Heads Hit] Gain +1 [Tremor] Count<br>"+
            "[On Hit] Inflict 1 [Offense Level Down] next turn", 1),
        new SkillDescriptionPart("[On Hit] Inflict 5 [Tremor]<br>"+
            "[On Hit] Inflict 1 [Plus Coin Drop] next turn", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Faust/LobotomyEGORegret/MetallicRinging.png";
}