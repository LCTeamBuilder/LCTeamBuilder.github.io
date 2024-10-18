import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class DawnOfficeFixerSinclairSkill2 implements Skill {
    readonly Name: string = "Sunset Blade";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Envy;
    readonly BaseValue: number = 5;
    readonly Coins: number = 3;
    readonly CoinValue: number = +3;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("If the target has 4+ [Burn], Clash Power +1<br>"+
            "[On Use] When in a Volatile E.G.O state, consume 5 SP<br>"+
            "[Before Attack] When in a Volatile E.G.O state, Atk Weight +1<br>"+
            "- At 45 SP, Atk Weight +2 instead<br>"+
            "[After Attack] When in a Volatile E.G.O state, consume 5 SP"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn] Count", 2),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn] Count", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Sinclair/DawnOfficeFixer/SunsetBlade1.png";
}