import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class MolarBoatworksFixerSinclairSkill1 implements Skill {
    readonly Name: string = "Fierce Assault";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill1;
    readonly Affinity: SinEnum = SinEnum.Gloom;
    readonly BaseValue: number = 2;
    readonly Coins: number = 4;
    readonly CoinValue: number = +1;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +1;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("At 10+ [Tremor] Count, Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Gain +2 [Tremor] Count<br>"+
            "[On Hit] Inflict +1 [Tremor] Count", 2),
        new SkillDescriptionPart("[On Hit] Gain +2 [Tremor] Count<br>"+
            "[On Hit] Inflict +1 [Tremor] Count", 4)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Sinclair/MolarBoatworksFixer/FierceAssault.png";
}