import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class MolarBoatworksFixerIshmaelSkill2 implements Skill {
    readonly Name: string = "Explosive Blast";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Sloth;
    readonly BaseValue: number = 5;
    readonly Coins: number = 2;
    readonly CoinValue: number = +5;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("At 5+ [Tremor] Count, Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Tremor] Count<br>"+
            "[On Hit] Gain +2 [Tremor] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 6 [Sinking]<br>"+
            "[On Hit] Inflict 4 [Defense Level Down] next turn", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Ishmael/MolarBoatworksFixer/ExplosiveBlast.png";
}